
import { MongoClient } from 'mongodb'

function createClient () {
  console.log(process.env.DB_URI)
  const client = new MongoClient(
    process.env.DB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )

  return client
}

export { createClient }
