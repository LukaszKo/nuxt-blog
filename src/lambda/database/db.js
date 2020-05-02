// // server.js
// const mongoose = require('mongoose')
// require('dotenv').config()
// // Initialize connection to database
// const URI = process.env.DB_URI
// const dbOptions = {
//   useNewUrlParser: true,
//   useFindAndModify: false,
//   useUnifiedTopology: true
// }

// module.exports = function () {
// // Set DB from mongoose connection
//   mongoose.connect(URI, dbOptions)
//   const db = mongoose.connection
//   // eslint-disable-next-line no-console
//   db.on('error', console.error.bind(console, 'MongoDB connection error:'))
//   db.on('open', () => {
//   // eslint-disable-next-line no-console
//     console.log('MongoDB is connected')
//   })
// }

// server.js
import mongoose from 'mongoose'
require('dotenv').config()
// Initialize connection to database
const dbUrl = process.env.DB_URI
const dbOptions = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}
// Set DB from mongoose connection
mongoose.connect(dbUrl, dbOptions)
const db = mongoose.connection
// eslint-disable-next-line no-console
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
export default db
