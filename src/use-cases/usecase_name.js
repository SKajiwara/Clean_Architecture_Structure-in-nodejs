import makeName from '../name'
export default function makeUsecase_name ({ /*Inject DB access and so on*/ } ) {
  return async function usecase_name ({ key_name } = {}) {

    //ENFOR Business Logic
    const name = makeName({ key_name })

    // Enforce all application level rules
    if (!key_name) throw new Error ( 'You must supply a key_name.' )

    // Return a function to do action depending on the request
    return doWorkForTheRequest({ key_name })
  }

  async function doWorkForTheRequest ({ key_name }) {
    // if GET request return values
    // if POST/PUT/DELETE request return the result of action
    return {
      message: 'successful'
    }
  }

}
