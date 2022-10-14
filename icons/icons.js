(function () {
  // create notification div
  let notification = document.createElement('div');
  document.body.appendChild(notification)
  notification.setAttribute("style", `
      position: fixed;
      top: 10px;
      left: 50%;
      transform: translate(-50%, 0%);

      padding: 5px 15px;
      font-size: 14px;
      
      border-radius: 5px;

      background: rgb(0, 100, 0);
      color: white;

      display: flex;
      align-items: center;
      justify-content: center;

      transition: 0.3s;
      opacity: 0.0;
    `)
  // notification appear/disappear timeoutID
  let notificationAppearTimeoutID = null

  // load jquery js
  let script = document.createElement("SCRIPT")
  script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js'
  script.type = 'text/javascript'
  document.getElementsByTagName("head")[0].appendChild(script)

  // poll for jQuery to come into existence
  let checkReady = function (callback) {
    if (window.jQuery) {
      callback(jQuery)
    } else {
      window.setTimeout(function () { checkReady(callback) }, 20)
    }
  }

  // start polling...
  checkReady(function ($) {
    $(function () {
      /*
      *********************************************** 1. Now JQuery is loaded ********************************************************
      *********************************************** 2. Fetch the svg icons from /icons folder **************************************
      */
      // get current icons.html href
      let iconsHtmlHref = window.location.href

      // get /icons directory url
      let hArr = iconsHtmlHref.split('/')
      hArr.pop()
      let iconsDirUrl = hArr.join('/')

      // main Fetch function
      const fetchSVGIcons = async () => {
        // get /icons directory structure html
        let categoryHtml = await $.ajax({
          url: iconsDirUrl,
          type: 'GET',
        })

        // get /icons/category code part from the /icons directory html
        let categoryAddRowList = categoryHtml.match(/addRow\("(\w|-)+"/g)

        for (let categoryAddRow of categoryAddRowList) {
          // get category name
          let categoryName = categoryAddRow.match(/".*"/g)[0]
          categoryName = categoryName.substr(1, categoryName.length - 2)

          // get /icons/category directory url
          let iconCategoryDirUrl = iconsDirUrl + "/" + categoryName

          // get /icons/category directory structure html
          let iconsHtml = await $.ajax({
            url: iconCategoryDirUrl,
            type: 'GET',
          })

          // get /icons/category/icon-name code part from the /icons/category directory html
          let iconAddRowList = iconsHtml.match(/addRow\("(\w|-)+\.svg"/g)

          let svgIconNames = []
          for (let iconAddRow of iconAddRowList) {
            // get icon-name
            let iconName = iconAddRow.match(/".*"/g)[0]
            iconName = iconName.substr(1, iconName.length - 6)
            svgIconNames.push(iconName)
          }

          // build html for the category section
          let categorySectionHtml = `
            <div>
              <!-- Category Label -->
              <div>
                <h5 id="${categoryName}" class="category-label">${categoryName}</h5>
              </div>

              <!-- SVGIcons -->
              <div>`
          for (let svgIconName of svgIconNames) {
            categorySectionHtml += `
                <svg-icon size="12" class="${categoryName}-icon" src="./">
                  ${categoryName}/${svgIconName}
                </svg-icon>
              `
          }
          categorySectionHtml += `
              </div>
            </div>
          `

          // append to the div#content at icons.html
          $('#content').append(categorySectionHtml)
        }

        // add event handlers after html page is completed
        // filter when keyboard is released
        $('#searchInput').on('keyup', function (event) {
          // display CSS constants
          const NONE = 'none'
          const BLOCK = ''

          // variables
          let total_icons = document.getElementsByTagName('svg-icon')
          let search_content = $(this).val()

          if (search_content === '') {
            // show all icons
            for (let i = 0; i < total_icons.length; i++) {
              $(total_icons[i]).css('display', BLOCK)
            }
          } else {
            // show matched icons except .post-icon
            for (let i = 0; i < total_icons.length; i++) {
              if ($(total_icons[i]).hasClass('post-icon')) {
                continue
              }
              let item = total_icons[i].innerHTML
              if (item.search(search_content) == -1) {
                $(total_icons[i]).css('display', NONE)
              } else {
                $(total_icons[i]).css('display', BLOCK)
              }
            }
          }

          // remove .category-label including no svg-icon
          $('.category-label').each(function () {
            let categoryId = $(this)[0].id + '-icon'
            let flag = false
            $(document).find(`svg-icon.${categoryId}`).each(function (index, icon) {
              if ($(icon).css('display') == 'inline') {
                flag = true
              }
            })

            if (!flag) {
              $(this).css('display', NONE)
            } else {
              $(this).css('display', BLOCK)
            }
          })
        })

        // copy svg-icon iconName to clipboard on clicking 
        $('svg-icon:not(.post-icon)').click(function () {
          // get iconName from svg-icon
          let iconName = $(this)[0].innerHTML
          let iconHtml = `<svg-icon>${iconName}<svg-icon>`

          // copy iconName to clipboard
          let dummy = document.createElement("textarea")
          document.body.appendChild(dummy)
          dummy.value = iconHtml
          dummy.select()
          document.execCommand("copy")
          document.body.removeChild(dummy)

          // show notification
          clearTimeout(notificationAppearTimeoutID)
          $(notification).css('opacity', '1.0')
          notification.innerHTML = `Copied - &lt;svg-icon&gt;${iconName}&lt;/svg-icon&gt;`

          // hide notification after 3s delay
          notificationAppearTimeoutID = setTimeout(() => {
            $(notification).css('opacity', '0.0')
          }, 3 * 1000)
        })
      }
      fetchSVGIcons()
    })
  })
})()