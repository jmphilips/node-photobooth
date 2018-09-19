'use strict';

const { Raspistill } = require('node-raspistill');

module.exports.index = (req, res) => {
  let count = 4;
  const myCamera = createCamera();
  const myTimer = setInterval(() => {
    if (count === 0) {
      clearInterval(myTimer);
    }
    createCamera(count)
      .takePhoto()
      .then(photo => {
        console.log('photo taken!');
        console.log(photo);
      })
      .catch(err => console.log(err));
    count -= 1;
  }, 5000);
  res.render('countdown');
};

const createCamera = () => {
  return new Raspistill({
    height: 400,
    width: 400
  });
};
