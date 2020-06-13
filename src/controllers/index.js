// Import usecase and third party libraries to inject into makeController_name
import {
  usecase_name,

  addUser

} from '../use-cases'
import notFound from './not-found'
import makeController_name from './controller_name'
import makePostUser from './post-user'

const controller_name = makeController_name({ usecase_name })
const postUser = makePostUser({ addUser }) 

const nameController = Object.freeze({
  notFound,
  controller_name,
  postUser
})

export default nameController
export { notFound, controller_name, postUser }
