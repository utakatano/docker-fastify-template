import Fastify, { FastifyInstance } from 'fastify'
import OurFirstRoute from './our-first-route'

const server: FastifyInstance = Fastify({ logger: true })

server.register(OurFirstRoute)

const port = 3000

server.listen(port, '0.0.0.0', (err, address) => {
  if (err) {
    server.log.error(err)
    process.exit(1)
  }
  server.log.info(`server listening on ${address}`)
})
