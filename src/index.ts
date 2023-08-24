import './config/index.js'

import express, { Application, Request, Response } from 'express'

const app: Application = express()
const port = process.env.PORT

app.get('/', (req: Request, res: Response) => {
	res.send('Hello, Express!')
})

app.listen(port, () => {
	console.log(`Server is running on port ${port}`)
})
