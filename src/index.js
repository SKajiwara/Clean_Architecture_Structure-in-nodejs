import express from 'express'

// Import Controllers
import {
  notFound,
  controller_name
} from './controllers'

// Import function to make express callbacks
import makeCallback from './infrastructure/express-callback'

const app = express()

require("./infrastructure/middlewares")(app)

// End-points
app.get('/api', (req, res) => res.json({ message: 'Welcome to my API'}))
app.post('/api/request_name', makeCallback(controller_name))

app.listen(6543, () => console.log('App is listening to PORT 6543'))
