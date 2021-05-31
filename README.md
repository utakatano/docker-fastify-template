# Fastify Template with Docker/Docker Compose

## Environment

- Node.jS ... 16.2.0
- TypeScript ... 4.3.2

## How to confirm in local

1. Run `docker-compose up` command, then start bash command with `docker-compose exec` for the container.

```sh
% docker-compose up -d --build

# attach the docker container
% docker-compose exec develop bash
```

2. You can run node scripts such like `npm start` and find the result in `http://localhost:3000` with your browser.
