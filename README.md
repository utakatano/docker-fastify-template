# Fastify Template with Docker/Docker Compose

## Environment

- Node.jS ... 15.14.0

## How to confirm in local

1. Run `docker-compose up` command, then start bash command with `docker-compose exec` for the container.

```sh
% docker-compose up -d --build

# attach the docker container
% docker-compose exec develop bash
```

2. You can run node scripts such like `node scripts/server.js` or `node scripts/plugin` and find the result in `http://localhost:3000` with your browser.

```sh
/app $ node scripts/server.js
```