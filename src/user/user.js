export default function buildMakeUser ({ makeValidUser }) {
    return async function makeUser({ 
      email,
      date = Date.now(),
      name
    } = {}) {
      
      // Enfore joi input validation which also checks required items
      const validUser = await makeValidUser({ email, name, date })
      
      
      return Object.freeze({
        getEmail: () => validUser.getEmail(),
        getDate: () => validUser.getDate(),
        getName: () => validUser.getName()
      })
      
    }
  }
  