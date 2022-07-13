// HTML Custom Element (HTMLElement) for SVG icons - DONE
// By default, it fetches icons from /icons, but you can override this by setting the src attribute.
// The default size is 24px, but you can override this by setting the size attribute or with your own CSS. - DONE
// the icon's fill is the same as the font's inherited color, therefore can be overrided with class selector.
// The color attribute can be used to override the fill of the icon with plain hex values.

class SVGIcon extends HTMLElement {
  constructor() {
    super();
  }

  get size() {
    return this.hasAttribute("size") ? +this.getAttribute("size") : 24;
  }

  get src() {
    if (this.hasAttribute("src")) {
      return this.getAttribute("src").replace(/\/$/, "");
    }

    return "";
  }

  get name() {
    if (this.hasAttribute("name")) {
      return this.getAttribute("name");
    }
    return "question";
  }

  connectedCallback() {
    const icon = new Image(this.size, this.size);
    icon.src = `${this.src}/${this.name}.svg`;
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(icon);  }
}

customElements.define("svg-icon", SVGIcon);
