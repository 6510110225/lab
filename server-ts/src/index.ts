import Koa from 'koa'
import apiRouter from './api'
import api from './api'

const app = new Koa()

app.use(api.routes());

app.listen(8000)