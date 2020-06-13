import makeUsersDb from './users-db'
import mongodb from 'mongodb'

const MongoClient = mongodb.MongoClient
const url = 'mongodb://localhost'
const dbName = 'fastingApp_dev'
const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

export async function makeDb () {
  if (!client.isConnected()) {
    await client.connect()
    console.log('!client.isConnected()');
  }
  console.log('client.isConnected()');
  return client.db(dbName)
}

const usersDb = makeUsersDb({ makeDb })


export { usersDb }