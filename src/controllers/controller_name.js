// Controller calls use case
export default function makeController_name ({ usecase_name }) {
  return async function controller_name (httpRequest) {
    try {
      // Call use case with values from the httpRequest
      const result = await usecase_name({
        key_name: httpRequest.query.key_name
      })

      const message = result.message
      return {
        headers: {
          'Content-Type': 'application/json',
          'Last-Modified': new Date().toUTCString()
        },
        statusCode: 201,
        body: { message }
      }
    }
    catch (e) {
      return {
        headers: {
          'Content-Type': 'application/json'
        },
        statusCode: 400,
        body: {
          error: e.message
        }
      }
    }
  }
}
