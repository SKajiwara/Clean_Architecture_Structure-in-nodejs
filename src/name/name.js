export default function buildMakeName ({ /*inject libraries and sub-entities*/ }) {
  return function makeName({ // What makes your entity "name" ?
    date = Date.now(),
    key_name
  } = {}) {

    // Make sure you have all values ( enforcing busines rules )
    if (!key_name) {
      throw new Error('Name must have a key_name.')
    }

    // Enforce sub entities here

    // return access method but never allow anybody to change busines rule
    return Object.freeze({
      getKey_name: () => key_name
    })
    // Write functions to enforce rules here if necesarry
  }
}
