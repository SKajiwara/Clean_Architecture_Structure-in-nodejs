// Import all use-cases, data-base access and other third parties.
import makeUsecase_name from './usecase_name'
import makeAddUser from './add-user'
// import dbAccess from ./infrastructure/data-access

import { usersDb } from '../infrastructure/data-access'

const usecase_name = makeUsecase_name({  })
const addUser = makeAddUser({ usersDb })

const nameService = Object.freeze({
  usecase_name,
  addUser
})
export default nameService

export { usecase_name, addUser }
