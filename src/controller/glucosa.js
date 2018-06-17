const { randomNumberRange } = require('../utils/randomNumberRange')

const glucosa = (ctx) => {
  const min = 40
  const max = 300

  ctx.body = randomNumberRange(40, 300)
  ctx.status = 200
}

module.exports = { glucosa }
