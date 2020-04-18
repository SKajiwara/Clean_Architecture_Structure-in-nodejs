// Import all use-cases, data-base access and other third parties.
import makeUsecase_name from './usecase_name'
// import dbAccess from ./infrastructure/data-access


const usecase_name = makeUsecase_name({ /*dbAccess*/ })

const nameService = Object.freeze({
  usecase_name
})
export default nameService

export { usecase_name }
