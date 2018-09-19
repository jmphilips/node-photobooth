'use strict';

const PiCamera = require('pi-camera');

module.exports.index = (req, res) => {
  const myCamera = createCamera();
  let count = 4;
  const myTimer = setInterval(() => {
    if(count === 0) {
      clearInterval(myTimer);
    }
    myCamera.snap()
      .then(_ => console.log('photo taken!'))
    count -= 1;
  }, 5000)
  res.render('countdown');
};

const createCamera = () => {
  return new PiCamera({
    mode: 'photo',
    output: `test.jpg`,
    width: 400,
    height: 400,
    nopreview: true,
  })
};