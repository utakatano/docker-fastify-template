const fastify = require('fastify')({
  logger: true
})

const port = 3000

fastify.register(require('./our-first-route'))

fastify.listen(port, '0.0.0.0', (err, address) => {
  if(err) {
    fastify.log.error(err)
    process.exit(1)
  }
  fastify.log.info(`server listening on ${address}`)
})