'use strict';

const PiCamera = require('pi-camera');

module.exports.index = (req, res) => {
  let count = 4;
  const myTimer = setInterval(() => {
    if(count === 0) {
      clearInterval(myTimer);
    }
    createCamera(count).snap()
      .then(_ => console.log('photo taken!'))
      .catch(err => console.log(err))
    count -= 1;
  }, 5000)
  res.render('countdown');
};

const createCamera = (count) => {
  return new PiCamera({
    mode: 'photo',
    output: `test_${count}.jpg`,
    width: 400,
    height: 400,
    nopreview: true,
  })
};