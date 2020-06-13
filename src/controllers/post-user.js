export default function makePostUser ({ addUser }) {
    return async function postUser (httpRequest) {
      try {
        const { source = {}, ...userInfo } = httpRequest.body
        
        
        // Construct source
        source.ip = httpRequest.ip
        source.browser = httpRequest.headers['User-Agent']
        if (httpRequest.headers['Referer']) {
          source.referrer = httpRequest.headers['Referer']
        }
        
        const { token, ...user } = await whichUseCase(httpRequest, source, userInfo)
  
        const returnValues = { // never return sensitive info to user.
          id: user.id,
          username: user.username,
          email: user.email
        }
  
        return {
          headers: {
            'Content-Type': 'application/json',
            'Last-Modified': new Date().toUTCString(),
            'x-auth-token': token || ''
          },
          statusCode: 201,
          body: returnValues
        }
      } catch (err) {
        // TODO: Error logging
        console.log(err)
        return {
          headers: {
            'Content-Type': 'application/json'
          },
          statusCode: 400,
          body: {
            error: err.message
          }
        }
      }
      // Whether it is registeration or auth request
      async function whichUseCase(httpRequest, source, userInfo) {
        if ( httpRequest.path === '/api/user/register') {
    
          
          const result = await addUser({ source, ...userInfo })
          
          return result
        }
        /*
        if ( httpRequest.path === '/api/user/login'){
          const result = await authUser({ source, ...userInfo })
          return result
        }*/
        throw new Error ("Bad Request to POST /api/user")
      }
    }
  }