const express = require('express');
const path = require('path');
const morgan = require('morgan');
const _ = require("lodash")
const mathjs =require("mathjs")
const angular = require("angular")

const app = express()
const port = 3000

app.use(morgan('tiny'))

app.get('/', (req, res) => {
  res.send(`🐸 Welcome to SWAMPUP-2021 🐸`)
})

app.get('/session', (req, res) => {
  res.send(`🐸 SU-201 Intro to DevSecOps with JFrog Xray 🐸`)
})

let nums = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(_.nth(nums, 3));
console.log(_.nth(nums, -3));

console.log(mathjs.random(1,1000000000000));

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  error.message = "🐸 Ribbit Ribbit Ribbit Ribbit 🐸"
  next(error);
});

// error handler middleware
app.use((error, req, res, next) => {
  res.status(error.status || 500).send({
    error: {
      status: error.status || 500,
      message: error.message || 'Internal Server Error',
    },
  });
});

const HelloFrogs = {
  message: "🐸 Welcome to SWAMPUP-2021 🐸"
}

const evilsrc = {__proto__: {evilkey: "evilvalue"}}


app.listen(port, () => {
  angular.merge({}, evilsrc)
  console.log(angular.version.full)
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports.HelloFrogs = HelloFrogs;
