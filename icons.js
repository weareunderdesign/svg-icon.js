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

      background: rgb(0, 0, 0);
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

        // copy iconName to clipboard
        let dummy = document.createElement("textarea")
        document.body.appendChild(dummy)
        dummy.value = iconName
        dummy.select()
        document.execCommand("copy")
        document.body.removeChild(dummy)

        // show notification
        clearTimeout(notificationAppearTimeoutID)
        $(notification).css('opacity', '1.0')
        notification.innerHTML = `Copied - ${iconName}`

        // hide notification after 3s delay
        notificationAppearTimeoutID = setTimeout(() => {
          $(notification).css('opacity', '0.0')
        }, 3 * 1000)
      })
    })
  })
})()