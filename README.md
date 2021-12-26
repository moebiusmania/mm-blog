# moebiusmania.net restoration

> old WordPress blog as a set of static pages, thanks to Next.js.

## Do you want to "backup" your old WordPress blog as a static website?

Feel free to fork this repo and tweak as you need it.

In order to be able to reuse it with your content you will need to follow some steps:

- from WordPress dashboard go to `Tools` -> `Export`
- flag to export only `articles` / `posts` and hit `download`
- convert the `.xml` file to a `.json` one
- replace the `mm.json` in the root of this repo with your new one
- you may need to tweak some `.js` files in order to make it work, but they are so few that should not require a lot of time
- have fun!

## License

The content of the blog is original and written by [Salvatore Laisa](https://github.com/moebiusmania), all of the custom code is release under the [MIT License](LICENSE).
