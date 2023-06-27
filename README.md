# sync-styles
This package will sync the [style-variables](https://zesty.org/services/manager-ui/settings/less-variables#what-are-style-variables) from the Zesty.io instance to an external project with [sync package](https://github.com/zesty-io/nextjs-sync).

Run:

```javascript
npm run sync-styles
```

The script can also be used to sync new changes from the Zesty instance style variables in your project. 

The sync-styles will rely on `zesty.config.json`, to fetch the style variables from the correct instance.

Running the script will do the following:

1. It will read the file `zesty.config.json` and collect the `stage` url and `stage_password` values to fetch the styles via the style variables JSON endpoint.
2. Once the style variables are fetched, it will generate a json file `styleVariables.json` which contains all the style variables. This is an optional workflow to stage your style changes in your project.

## Examples

Here is an example use case of Zesty style variables usaged with [Material UI](https://github.com/zesty-io/example-mui-styles).


Instance Zuid: 8-dcb09bb3a4-ld44lg

Example Preview: https://jwctrxq3-dev.webengine.zesty.io/
