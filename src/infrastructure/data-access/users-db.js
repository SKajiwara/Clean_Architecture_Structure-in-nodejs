import Id from '../Id'
export default function makeUsersDb ({ makeDb }) {
  return Object.freeze({
    findByEmail,
    findById,
    insert,
    update
  })

  async function findByEmail ({ email: email }) {
    const db = await makeDb()
    const result = await db.collection('users').find({ email })
    const found = await result.toArray()
    if (found.length === 0) return null
    const { _id: id, ...info } = found[0]
    return { id, ...info }
  }
  async function findById ({ id: _id }) {
    const db = await makeDb()
    const result = await db.collection('users').find({ _id })
    const found = await result.toArray()
    if (found.length === 0) return null
    const { _id: id, ...info } = found[0]
    return { id, ...info }
  }
  async function insert ({ id: _id = Id.makeId(), ...userInfo }) {
    const db = await makeDb()
    const result = await db
      .collection('users')
      .insertOne({ _id, ...userInfo })
    const { _id: id, ...insertedInfo } = result.ops[0]
    return { id, ...insertedInfo }
  }

  async function update ({ id: _id, ...userInfo}) {
    const db = await makeDb()
    const result = await db
      .collection('users')
      .updateOne({ _id }, { $set: { ...userInfo } })
    return result.modifiedCount > 0 ? { id: _id, ...userInfo } : null
  }
}