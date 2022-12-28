## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_HOST`

`DATABASE_PORT`

`DATABASE_NAME`

`DATABASE_USERNAME`

`DATABASE_PASSWORD`

`DATABASE_URL`

`DATABASE_CLIENT`

`HOST`

`PORT`

`APP_KEYS`

`API_TOKEN_SALT`

`ADMIN_JWT_SECRET`

`JWT_SECRET`


## Installation and Commands

Docker commands:
```bash
1. sudo apt-get install update;

2. sudo apt install docker-compose

3. sudo docker-compose up --build -d  //to build the app in docker and run containers.

4. sudo docker images --> to get all the images in docker.

# once you run the command 3, so the services will be running on their indivisual conatiner on specified ports and we can communicate with them using our API Endpoints.
5. sudo docker ps -a  --> to get all the containers list

# To check the logs from the server_Conatainer use :
6. sudo docker logs "conatiner_Name/conatiner-ID"

# To start/Stop conatiner:
7. sudo docker start/stop "conatiner-Name/conatiner_id"

# To remove all containers :
8. sudo docker-compose down 

```


# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project. Find the one that suits you on the [deployment section of the documentation](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment.html).

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://docs.strapi.io) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>
