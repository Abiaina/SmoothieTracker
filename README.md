# Smoothie Tracker

Smoothie Tracker is UI for a list of the recipies of smoothies I like. It is built with React.

## Local Development
### On Desktop
From the root directory run `npm start`
Open localhost:3000

### Docker for Desktop
`docker run {smoothie container} {listen}:{talk}`

`docker run -p 3000:3000 -i <name of container>`
You can now listen on localhost:3000.

## Deployment
TODOs
### Containerize with Docker
Install Docker for Desktop.

TODO push to gitlab registry over docker container registry.
- containerize app
1. `docker push {name of created docker image}`
1. `docker login`
1. `docker -t smoothie:{version} -f Dockerfile .`


- create cicd pipeline
- deploy in k8s
- create a DB of recipies
- make DB mutable by user
- add user accounts with oauth
