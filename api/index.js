const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const config = require('config')

app.use(body.Parser.json())

app.listen(config.get('api.porta'),  () => console.log('A API está funcionando!'))