export default function buildMakeValidUser ({ isValidUserInfo }) {
    return async function makeValidUser ({ ...userInfo } = {}) {
      
      const validationResult = await isValidUserInfo({...userInfo})

      if ( validationResult.error ) { throw new Error(error) }
      
      const validUserInfo = validationResult.validInfo
      
      return Object.freeze({
        getEmail: () => validUserInfo.email,
        getDate: () => validUserInfo.date,
        getName: () => validUserInfo.name
      })
    }
  }