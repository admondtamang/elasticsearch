# elasticsearch

**Docker**

```sh
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build
```

```sh
docker exec -it node-app bash ==== to open container bash (-it interactive mode)
```

```sh
docker rm node-app -fv (f=force, v=volume)
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
