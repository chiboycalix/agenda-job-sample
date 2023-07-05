const dotenv = require('dotenv')
const express = require('express')
const mongoose = require('mongoose')

dotenv.config()

const app = express()
const PORT = 6000
if (process.env.NODE_ENV !== 'test') {
  mongoose
    .connect(process.env.MONGODB_URI, {})
    .then(() => {
      console.log('Connected to MongoDB!')
      app.listen(PORT, () => {
        console.log('running')
      })
    })
    .catch((err) => {
      console.error(err)
    })
}
