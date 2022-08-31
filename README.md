# Sample node application and Docker

## What you will need

1. You need Docker Desktop installed. You can download from [here](https://www.docker.com/get-started/)

   - Click on docker tray on the bottom to make sure you see are using Linux Container. Do not click on "Switch to Windows container" but if you see this option you are on Linux container.

   - Open `cmd` and run `Docker --help` to ensure docker installation

2. Make sure you have node installed. You can download recommended version from [here](https://nodejs.org/en/)

   - Open `cmd` and run `npm --version` and `node --version` to ensure node installation

        > For more information on `npm`, see [here](https://nodejs.org/en/knowledge/getting-started/npm/what-is-npm/)
        >
        > For more information on what is `node`, see [here](https://www.codecademy.com/article/what-is-node)

> ⚠️ Note
> The node app can be anything but I am using node app that takes some parameters using commander and displays it along with some mocked data.

You can clone this repo and use what I have and skip the next section where I will help you with creating a simple node app.

> ⚠️ Note
> If you clone my repo then open `cmd` and run `npm install`

## Creating simple node app

1. Goto a directory where you want to create an node app
2. Open `cmd` and run [`npm init`](https://docs.npmjs.com/cli/v8/commands/npm-init) and follow `cmd`.
3. A file called `package.json` will be created. In the same directory create a file named `index.js`
4. Open that file and `console.log("Hello  World");`
5. Open `cmd` and run `node .index.js`

    > You can also create scripts to run your application. For more information, see [here](https://docs.npmjs.com/cli/v8/using-npm/scripts)

At this point you should now have docker, node and a sample node application to work with ready.

## Creating docker image

Now lets create a docker image. For more information on docker, see [here](https://docs.docker.com/get-started/overview/)

    > If you are not familiar with docker then I highly recommend you read through some docs or watch some videos on docker.

1. **_Optional_** - Sign up [here](https://hub.docker.com/signup)

2. Copy The `DockerFile` from this repo.

3. To build an image, open `cmd` and run `docker build -t YOUR_DOCKER_HUB_NAME/DOCKER_IMAGE_NAME .`

4. Todo@@@

    > If you are following this readme for the purpose of using it for circle ci pipeline from this repo TODO GET IT then then you need to create an account on docker hub. Click [here](https://hub.docker.com/signup) to sign up
    If you are going to push this docker hub then make sure your docker image name follows this pattern YOUR_DOCKER_HUB_NAME/DOCKER_IMAGE_NAME
    For me it would look like this ->  docker build -t smitkumarpatel/sample .

5. **_Optional_** - To tag our docker image, open `cmd` and run `docker tag YOUR_DOCKER_HUB_NAME/DOCKER_IMAGE_NAME YOUR_DOCKER_HUB_NAME/DOCKER_IMAGE_NAME:vVERSION_NAME`

    > Example : `docker tag smitkumarpatel/sample smitkumarpatel/sample:v1.0.0`

6. Lets run our docker locally before we push to docker hub(pushing to docker is an optional step
    1. Open `cmd` and run `docker run -it --rm --entrypoint bash YOUR_DOCKER_HUB_NAME/DOCKER_IMAGE_NAME:vVERSION_NAME`
        > Example: `docker run -it --rm --entrypoint bash smitkumarpatel/sample:v1.0.0`
    2. You should not be inside out docker container so you can run either of the following depending on how you setup on your project
    - If you cloned my repo and have `npm start` script then you can run `npm start -- --ids "10,20,30,40"`
    - If you cloned my repo and but do not have `npm start` script then you can run `node index.js --ids "10,20,30,40"`
    - If you have simple `console.log("Hello World");` statement inside your `index.js` file and no start script then run `node index.js` or `npm start` if you do have start script

7. **_Optional_** - To push an image to docker you need to login first.
    1. Open `cmd` and  run `docker login`
    2. To push our tagged version open `cmd` and run `docker push YOUR_DOCKER_HUB_NAME/DOCKER_IMAGE_NAME:vVERSION_NAME` or untagged version `docker push YOUR_DOCKER_HUB_NAME/DOCKER_IMAGE_NAME`
        > Example: `docker push smitkumarpatel/sample:v1.0.0`

8. Now head to docker hub and click on `repositories` and you should see your docker image there.

If you want to learn more on how to create an orb that uses your docker image so that other can use your orb and use its functinality then click here TODO GET IT
