'use strict'

module.exports.index = (_, res) => res.render('index');

module.exports.create = (({ body }, res, err) => {
  console.log(body)
  res.send('ayo river')
})