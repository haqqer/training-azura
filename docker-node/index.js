const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
	res.json({ "status": "running well" })
})


const server = app.listen(3000, () => console.log('app running'))

process.on('SIGTERM', () => {
	server.close(() => console.log('shutting down'))
})

