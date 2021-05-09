# elasticsearch

## Docker

**Running docker container**

```sh
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build
```

**Open bash of conatiner**

```sh
docker exec -it node-app bash
```

**Delete Container**

```sh
docker rm node-app -fv
```

## Refrences

docker-compose up -d (detach)
docker-compose down -v ===== --build (to force build) (volume)

docker build -t node-app-image . ==== docker build command
docker run -p 4000:3000 -d --name node-app node-app-image ==== -d detach mode to free terminal

sync folder with docker container

docker run -v $(pwd):/app -p 4000:3000 -d --name node-app node-app-image==== bind mount volume
docker run -v $(pwd):/app:ro -v .app/node_modules -p 4000:3000 -d --name node-app node-app-image ==== overrides bind
docker run -v $(pwd):/app:ro -v .app/node_modules --env-file ./.env -p 4000:3000 -d --name node-app node-app-image
docker logs node-app

//delete volume
docker volume ls
docker volume volume_hash
docker volume prune
