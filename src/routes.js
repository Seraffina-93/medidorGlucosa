const Router = require('koa-router')
const router = new Router()

const { glucosa } = require('./controller/glucosa')

router.get('/glucosa', glucosa)

module.exports = router
