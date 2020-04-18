// Import all third party libraries needed for enforcing business level rule
import buildMakeName from './name'
// Import sub-entities import buildMakeSource from './source'

//const makeSub_name = buildMakeSub_name({ /*inject stuff for sub-entities*/ })
const makeName = buildMakeName({ /*Inject third parties and sub-entities*/ })

export default makeName;
