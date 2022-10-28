# svg-icon.js

Web component for SVG icons. Works in any web framework and for any purpose. Optimized for smooth design and development workflow (we built it for ourselves!).

## Install with Unpkg CDN
1. Add the following script to your page:
   ```
   <script src="https://unpkg.com/@rainbowapp/svg-icon.js/dist/svg-icon.min.js"></script>
   ```

## Install with NPX
1. On you Terminal
   ```
   npx @rainbowapp/svg-icon.js
   ```
2. Use `/svg-icon.config.json` in your root directoty and set the default `name` , `source`, and `size`.

   ```html
   {
   "src": "icons",
   "name": "logos/logo",
   "size": 24,
   }
   ```
3. Enjoy icons/icons.html to view all your icons in a simple, organized, and searchable manner.
4. Place all of your icons in `/icons` at your root directory.
   ```
   root/
   ├─ icons/
   │  ├─ icon1.svg
   │  ├─ icon2.svg
   │  ├─ icon3.svg/
   ```
You’re ready to go!

## Usage

1. Set the `icon-name` within the element’s content.

   ```html
   <svg-icon>arrow</svg-icon>
   ```

   Or, you can do `folder/icon-name` if you’ve categorized your library into folders.

   ```html
   <svg-icon>arrows/right</svg-icon>
   ```

   Override the source directly by setting a different one in the `src` attribute. You can Either use internal or external links.

   ```html
   <svg-icon src="icon.svg"></svg-icon>
   ```

2. Colors are one of the main reasons `svg-icon.js` was created!
   
   The fill color of svg-icons is set by default to the inherited color of the font, so it can be overridden using a plain CSS selector.

   ```html
   <div style="color: red;">
   	<svg-icon>arrow</svg-icon>
   </div>
   ```
      And, you can always override colors using the `color` attribute.

   ```html
   <svg-icon color="red">arrow</svg-icon>
   ```
3. You can set the `size` directly (or simply apply your own CSS).

   ```html
   <svg-icon size="80">arrow</svg-icon>
   ```

## Dependencies

Many thanks to [svg-inject](https://github.com/iconfu/svg-inject) for enabling the passing of properties to SVG files.

## Documentation

Visit [svg-icon.fyi](https://svg-icon.fyi) to view the full documentation.

## Community

The svg-icon.js community can be found on [GitHub Discussions](https://github.com/rnbwdev/svg-icon.js/discussions), where you can ask questions, voice ideas, and share your projects.

Join [Rainbow&#39;s Discord](https://discord.com/invite/HycXz8TJkd) to chat with other community members about svg-icon.js.

## Contributing

Please see our [contributing.md](https://github.com/rnbwdev/svg-icon.js/blob/main/contributing.md).

That's it! 🎉