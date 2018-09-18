const PiCamera = require('pi-camera');
const myCamera = new PiCamera({
  mode: 'photo',
  output: `${ __dirname }/test.jpg`,
  width: 400,
  height: 400,
  nopreview: true,
})

const countdownTimer = () => {
  let count = 30;
  let cycle = 5;
  const myTimer = setInterval(() => {
    if (count === 0) {
      removeCounter();
      clearInterval(myTimer);
    }
    setTimeHeading(cycle);
    cycle = regulateCycle(cycle);
    count -= 1;
  }, 1000);
};

const removeCounter = () => {
  let counter = retrieveElById('counter');
  counter.parentNode.removeChild(counter);
};

const setTimeHeading = i => {
  let heading = retrieveElById('counter');
  if (i === 0) {
    takePhoto();
    heading.innerHTML = '&#128247;';
  } else {
    heading.innerHTML = i;
  }
};

const regulateCycle = cycle => {
  if (cycle === 0) {
    return 5;
  } else {
    return cycle - 1;
  }
};

const appendNumber = num => {
  retrieveElById('phone-input').value += num;
};

const removeNumber = () => {
  let currentString = retrieveElById('phone-input').value;
  const newString = currentString.slice(0, -1);
  retrieveElById('phone-input').value = newString;
};

const retrieveElById = id => {
  return document.getElementById(id);
};

const takePhoto = () => {
  myCamera.snap()
    .then(_ => console.log('success'))
    .catch(error => console.log(error))
}