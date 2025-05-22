import Fastify from 'fastify';

const server = Fastify({ logger: true });

// Health check route
server.get('/health', async (request, reply) => {
  return { status: 'ok', timestamp: Date.now() };
});

const start = async () => {
  try {
    await server.listen({ port: 3000, host: '0.0.0.0' });
    console.log('🚀 Server running at http://localhost:3000');
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
