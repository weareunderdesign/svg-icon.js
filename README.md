# svg-icon.js

An SVG icon component for the web. Optimized for smooth design and development experience. Fits into any web framework and can be used anyhow.

```html
<svg-icon size=”80px” color=”gray”>arrow</svg-icon>
```

## Get Started

1. Install with NPM:
    
    ```
    npm install svg-icon.js
    ```
    
    Or, you can get it going quickly with Unpkg CDN:
    
    ```
    <script src="https://unpkg.com/rnbwdev/dist/svg-icon.min.js"></script>
    ```
    
    You’ll then find (or manually create when manually embedding the script.
    
    - `/icons` for placing all of your icons.
    - `icons/svg-icon.config.js` to locate the Icons' folder and defining a global default `color` and `size`..
    - `icons/icons.js` and `icons/icons.html` to view of all your icons in a simple, organized, and searchable manner.
2. Place all of your icons in the `/icons` folder.
    
    Or set different source at `svg-icon.config.js`
    
    ```html
    ...
    ```
    

## Usage

1. Set the `icon-name` within the element’s content.
    
    ```html
    <svg-icon>arrow</svg-icon>
    ```
    
    Or, you can do `folder/icon-name` if you’ve categorized your library into folders.
    
    ```html
    <svg-icon>arrows/right</svg-icon>
    ```
    
    Override the source directly by setting a different one in the `src` attribute. You can Either use internal or external links.
    
    ```html
    <svg-icon src="https://en.wikipedia.org/wiki/Google_logo#/media/File:Google_2015_logo.svg"></svg-icon>
    ```
    
2. Colors are one of the main reasons svg-icon.js was created! Icons' fills are set by default to the font's inherited color, therefore can be overridden with plain CSS selectors using the `color` property.
    
    ```html
    <div style="color: red;">
    	<svg-icon size="80">arrow</svg-icon>
    </div>
    ```
    
    You can set a global `color` using `svg-icon.config.js`
    
    ```html
    ...
    ```
    
3. Set the `size` directly or simply apply your own CSS.
    
    ```html
    	<svg-icon size="80">arrow</svg-icon>
    ```
    
    ---
    
    You can set a global `size` using `svg-icon.config.js`
    
    ```html
    ...
    ```
    

## Dependencies

Many thanks to [svg-inject](https://github.com/iconfu/svg-inject) for enabling the passing of properties to SVG files.

## Documentation

Visit [svg-icon.fyi](https://svg-icon.fyi) to view the full documentation.

## Community

The svg-icon.js community can be found on [GitHub Discussions](https://github.com/rnbwdev/svg-icon.js/discussions), where you can ask questions, voice ideas, and share your projects.

Join [Rainbow's Discord](https://discord.com/invite/HycXz8TJkd) to chat with other community members about svg-icon.js.

## Contributing

Please see our [contributing.md](https://github.com/rnbwdev/svg-icon.js/blob/main/contributing.md).

That's it! 🎉