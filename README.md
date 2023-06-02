# DOO PROJECT !

### TO INIT THIS PROJECT IN DOCKER
### build the img
docker build -t react-app-img .

### executes with this command in WINDOWS to allow the sync of local volume to the container
docker run -e WATCHPACK_POLLING=true -v ${pwd}\src:/app/src -d -p 3000:3000 --name react-app react-image

#### just remove the WATCHPACK_POLLING if OS Unix based.

