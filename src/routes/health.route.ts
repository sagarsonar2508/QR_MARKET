import { FastifyInstance } from "fastify";

export class Router {
    private server: FastifyInstance;

    constructor(server: FastifyInstance) {
        this.server = server;
    }

    public registerRoutes() {
        this.server.get('/health', async (request, reply) => {
            return { status: 'ok', timestamp: Date.now() };
        });
        this.server.get('/n', async (request, reply) => {
            reply.type('text/html').send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Nikhil Chutiya</title>
                <style>
                body {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                }
                h1 {
                    font-size: 3rem;
                    font-weight: bold;
                    color: #333;
                }
                </style>
            </head>
            <body>
                <h1>Nikhil Chutiya </h1>
                                <h1>Aditya </h1>
            </body>
            </html>
            `);
        });
    }
}