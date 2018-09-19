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
      .timelapse('image%04d', 5000, 2000)
      .then(image => console.log(`image taken ${image}`))
      .catch(err => console.log(err));
    count -= 1;
  }, 5000);
  res.render('countdown');
};

const createCamera = () => {
  return new Raspistill({
    height: 400,
    width: 400,
  });
};
