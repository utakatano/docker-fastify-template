const fastify = require('fastify')({ logger: true })

const port = 3000

// fastify.get('/', async (request, reply) => {
//   return { hello: 'world' }
// })

fastify.route({
  method: 'GET',
  url: '/',
  schema: {
    querystring: {
      name: { type: 'string' }
    },
    response: {
      200: {
        type: 'object',
        properties: {
          hello: { type: 'string' }
        }
      }
    }
  },
  ppreHandler: async (request, reply) => {},
  handler: async (request, reply) => {
    return { hello: 'world' }
  }
})

const start = async () => {
  try {
    await fastify.listen(port, '0.0.0.0')
  } catch(err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()