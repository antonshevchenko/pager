# bson-ext

[![linux build status](https://secure.travis-ci.org/imlucas/bson-ext.png)](http://travis-ci.org/imlucas/bson-ext)
[![windows build status](https://ci.appveyor.com/api/projects/status/github/imlucas/bson-ext)](https://ci.appveyor.com/project/imlucas/bson-ext)

This module contains the BSON [native addon](https://nodejs.org/api/addons.html)
only and is not meant to be used in isolation from the [bson](http://npm.im/bson)
NPM module. It lives in it's own module so it can be an optional
dependency for the [bson](http://npm.im/bson) module.

## Testing

```
npm test
```

## Prebuilt Binaries

Have you ever seen this message in your console?

```
js-bson: Failed to load c++ bson extension, using pure JS version
```

We are experimenting with [node-pre-gyp](http://npm.im/node-pre-gyp) to publish
and install prebuilt binaries.  This means you don't need the full toolchain installed
and configured correctly to use this module and you'll never have to see this
message again.  Currently, prebuilt binaries will only be used for Windows,
as it is the most problematic platform for this issue.  This will also allow us
more time to evaluate the costs and benefits of prebuilt support on OSX and Linux.

If you are interested in prebuilt binary support on OSX or Linux, please
[join the discussion on this issue](https://github.com/christkv/bson-ext/issues/6)!

## License

Apache 2
