import { FastifyInstance } from 'fastify'

const routes = async (fastify: FastifyInstance) => {
  fastify.get('/', async (_request, _reply) => {
    return { hello: 'world' }
  })
}

export default routes