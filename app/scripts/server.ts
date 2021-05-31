import Fastify, { FastifyInstance, RouteShorthandOptions } from 'fastify'

const server: FastifyInstance = Fastify({logger: true})

const opts: RouteShorthandOptions = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          pong: {
            type: 'string'
          }
        }
      }
    }
  }
}

server.get('/ping', opts, async(request, reply) => {
  return { pong: 'it worked!' }
})

const start = () => {
  server.listen(3000, '0.0.0.0', (err, address) => {
    if (err) {
      server.log.error(err)
      process.exit(1)  
    }
    server.log.info(`server listening on ${address}`)
  })
}

start()