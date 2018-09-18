'use strict'

const PiCamera = require('pi-camera');
const myCamera = new PiCamera({
  mode: 'photo',
  output: `${ __dirname }/test.jpg`,
  width: 400,
  height: 400,
  nopreview: true,
})

module.exports.snap = (_, res) => {
  myCamera.snap()
    .then(_ => console.log('photo taken!'))
}