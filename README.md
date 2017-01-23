# Typed NodeStatic

[![Greenkeeper badge](https://badges.greenkeeper.io/effervescentia/typed-node-static.svg)](https://greenkeeper.io/)

[![CircleCI branch](https://img.shields.io/circleci/project/effervescentia/typed-node-static/master.svg?maxAge=2592000)]()

The type definition for [`node-static`](https://github.com/cloudhead/node-static)

## LICENSE

MIT

## Contributing

```sh
# Fork this repo
npm install

npm run watch

# add tests, make changes, pass tests ... then [ctrl+c]
npm run publish
```

## Updating

Update `typings.json/version` to match the source version you are typing against.
e.g. if you are creating typings for `chai@3.5.0`, then:
```js
// typings.json
{
  "version": "3.5.0"
  // ...
}
```
