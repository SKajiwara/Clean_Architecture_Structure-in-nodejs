import makeUser from '../user'
export default function makeAddUser ({ usersDb } ) {
  return async function addUser ( userInfo ) {

    //ENFOR ENTITY MAKERIDE
    const user = await makeUser( userInfo )

    // Application-level rules
    const emailIsUsed = await usersDb.findByEmail( {email: user.getEmail()} )
    if (emailIsUsed) throw new Error('Email is already used')

    return usersDb.insert({
      createdOn: user.getDate(),
      email: user.getEmail(),
      name: user.getName()
    })
  }

}