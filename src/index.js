import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
// Import Controllers
import {
  notFound,
  controller_name,
  postUser
} from './controllers'

// Import function to make express callbacks
import makeCallback from './infrastructure/express-callback'

const app = express()
app.use(express.json())

require("./infrastructure/middlewares")(app)

// End-points
app.get('/api', (req, res) => res.json({ message: 'Welcome to my API'}))

//app.get('/api/user/get-user', makeCallback(getUser))
app.post('/api/user/register', makeCallback(postUser))
//app.post('/api/user/auth', makeCallback(postUser))
//app.patch('/api/user/register', makeCallback(patchUser))
//app.delete('/api/user/register', makeCallback(deleteUser))

app.post('/api/request_name', makeCallback(controller_name))

app.use(makeCallback(notFound))
app.listen(process.env.PORT, () => console.log(`App is listening to PORT ${process.env.PORT}`))
