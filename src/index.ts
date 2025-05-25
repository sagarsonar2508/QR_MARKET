import Fastify from 'fastify';
import { Router } from './routes/route.modules';

const server = Fastify({ logger: true });
const router = new Router(server);
router.registerRoutes();

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
