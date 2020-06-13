import Joi from 'joi'

import buildMakeUser from './user'
import buildMakeValidUser from './validateUseInfo'

const makeValidUser = buildMakeValidUser({ isValidUserInfo })
const makeUser = buildMakeUser({ makeValidUser })

export default makeUser


// TODO: create a folder for shchema
const userSchema = Joi.object().keys({
    email: Joi.string().email({ minDomainAtoms: 2 }).max(255).required(),
    date: Joi.date().required(),
    name: Joi.string().alphanum().min(3).max(30).required()
})
async function isValidUserInfo ({...userInfo}) {
    
    const resultValue = await userSchema.validate({ ...userInfo })
    
    if (resultValue.error != null) return { error: result.error }
    // Formatting error message from Joi
    //if ( error ) return { error: error.details[0].message.replace(/"/g, '') }
    return { validInfo: resultValue }
}


