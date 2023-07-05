const Agenda = require('agenda')
const dotenv = require('dotenv')
dotenv.config()
// Initialize Agenda
const agenda = new Agenda({ db: { address: process.env.MONGODB_URI } })

agenda.define('log users', async (job) => {
  console.log('hello')
})
;(async function () {
  // IIFE to give access to async/await
  await agenda.start()

  await agenda.every('1 minutes', 'log users')
})()
