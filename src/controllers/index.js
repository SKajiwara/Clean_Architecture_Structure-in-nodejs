// Import usecase and third party libraries to inject into makeController_name
import {
  usecase_name
} from '../use-cases'
import notFound from './not-found'
import makeController_name from './controller_name'

const controller_name = makeController_name({ usecase_name })

const nameController = Object.freeze({
  notFound,
  controller_name
})

export default nameController
export { notFound, controller_name }
