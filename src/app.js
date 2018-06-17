"use strict";

const Koa = require('koa')
const app = new Koa()
const router = require('./routes')
const bodyParser = require('koa-bodyparser')
const koaBody = require('koa-body')
const PORT = process.env.PORT || 3000
 
 
app
  .use(koaBody())
  .use(bodyParser())
  .use(async (ctx, next) => {
    const start = Date.now()
    await next()
    const ms = Date.now() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
  })
  .use(router.routes())
  .use(router.allowedMethods())
 
app.listen(PORT, () => console.log(`Koa app listening on ${PORT}`))

module.exports = app
