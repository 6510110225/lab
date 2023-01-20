import Koa from 'koa'
import json from 'koa-json'
import api from './api'
import appConfig from './config'
import loadFixtures from './fixture'


const app = new Koa()

app.use(json())
app.use(api.routes())

app.listen(8000)
loadFixtures(appConfig.ClearDataBeforeLoad)