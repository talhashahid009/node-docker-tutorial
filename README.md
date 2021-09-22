# node-docker-tutorial

A hello world app using nodejs and dockerizing it.

# To build image run
docker build --tag node-docker-tutorial .

# To start container run
docker run -d -p 3003:3003 --name node-app node-docker-tutorial

#Check docker desktop and the container will be running

#Go to localhost:3003 and check the server is running
