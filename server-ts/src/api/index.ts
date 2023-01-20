import Router from "koa-router";
import announcement from './announcement'
const api = new Router()

api.use('/api/announcement',announcement.routes())

export default api

