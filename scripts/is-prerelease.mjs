#!/usr/bin/env zx

import 'zx/globals'

const version = argv.version
const prereleaseVersionRegExp = /^[0-9]+\.[0-9]+\.[0-9]+-(?:[A-Za-z]*\.)?[0-9]+$/
const execArray = prereleaseVersionRegExp.exec(version)
process.exit(execArray !== null && execArray.length > 0 ? 0 : 1)
