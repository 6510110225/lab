import Router from "koa-router";
import announcement from './announcement'
import userResult from './user_result'
import { authMiddleware } from "../auth";

const api = new Router()

api.use('/api/announcement',authMiddleware,announcement.routes())
api.use('/api/userResult',authMiddleware,userResult.routes())

export default api

