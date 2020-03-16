"use strict"

var next = (global.process && process.nextTick) || global.setImmediate || function (f) {
  setTimeout(f, 0)
}

module.exports = function maybe (cb, promise) {
  if (cb) {
    promise
      .then(function (result) {
        next(() => {
          cb && cb(null, result)
          cb = undefined
        })
      }, function (err) {
        next(() => {
          cb && cb(err)
          cb = undefined
        })
      })
    return undefined
  }
  else {
    return promise
  }
}
