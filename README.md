# sync-styles
This package will sync the [style-variables](https://zesty.org/services/manager-ui/settings/less-variables#what-are-style-variables) from the Zesty.io instances to an external project with sync package.

Run:

```javascript
npm run sync-styles
```

The script can also be used to sync new changes from the styles in the Instance. 

The sync-styles will rely to `zesty.config.json`, to fetch the style variables from the correct instance.

Running the script will do the following:

1. It will read to `zesty.config.json` and collects the `stage` url and `stage_password` to fetch the styles via api endpoint.
2. Once the style variables are already fetched via API, it will generate a json file `styleVariables.json` which contains all the style variables.

## Examples

Currently, we only have examples of the style variable usage with [Material UI](https://github.com/zesty-io/example-mui-styles).


Instance Zuid: 8-dcb09bb3a4-ld44lg

Example Preview: https://jwctrxq3-dev.webengine.zesty.io/
