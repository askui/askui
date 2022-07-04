# Changelog

### [0.2.1](https://github.com/askui/askui/compare/0.2.0...0.2.1) (2022-07-04)


### Features

* **askui-nodejs:** allow tracking time to value using install timestamp (#AS-1070) ([a67da0b](https://github.com/askui/askui/commit/a67da0b8a3fc926367467a86fed27223bfb5d439)), closes [#AS-1070](https://github.com/askui/askui/issues/AS-1070)
* **askui-nodejs:** allow typing secrets (#AS-920) ([8fff99c](https://github.com/askui/askui/commit/8fff99cd9647619624619aa502b73cc0c1c803f2)), closes [#AS-920](https://github.com/askui/askui/issues/AS-920)
* dont communicate missing timestamp as an error (#AS-1070) ([0f5824c](https://github.com/askui/askui/commit/0f5824cf2dfceccb154f1cc482ab70d7e0c3b293)), closes [#AS-1070](https://github.com/askui/askui/issues/AS-1070)


### Bug Fixes

* creation of timestamp for esm (#AS-1070) ([fa4f223](https://github.com/askui/askui/commit/fa4f2239d59b6e2e9796bc6894bc263f6a23c3dc)), closes [#AS-1070](https://github.com/askui/askui/issues/AS-1070)

## [0.2.0](https://github.com/askui/askui/compare/0.1.6...0.2.0) (2022-06-23)

* AS-944 Fix Handling UI Controller Binary Paths Including Whitespace by @adi-wan-askui in https://github.com/askui/askui/pull/9
* AS-1061 fix slow jest by @maxi-askui in https://github.com/askui/askui/pull/12
* refactor: rename scollUntil to scollInside. update docs (#AS-925) by @thinh-askui in https://github.com/askui/askui/pull/11
* docs(configuration options): document all config options for askui-ui… by @thinh-askui in https://github.com/askui/askui/pull/10
* As 1034 rename for source code UI controller 2 by @mlikasam-askui in https://github.com/askui/askui/pull/17
* As 993 unauthenticated library usage with tracking by @mlikasam-askui in https://github.com/askui/askui/pull/15
* AS-1010 Fix waitFor() by @adi-wan-askui in https://github.com/askui/askui/pull/22
* As 1073 improve speed if image resizing in lib by @thinh-askui in https://github.com/askui/askui/pull/20
* As 1007 troubleshooting UI controller wayland problems by @thinh-askui in https://github.com/askui/askui/pull/16
* As 979 documentation of configuration options by @thinh-askui in https://github.com/askui/askui/pull/14

### ⚠ BREAKING CHANGES

* construction of ui-control-client with constructor replaced by builder pattern

### 0.1.6 (2022-06-05)

First Official Release

We migrated from Gitlab to Github and made our package public on [npmjs](https://www.npmjs.com/) starting our open-source journey with you.