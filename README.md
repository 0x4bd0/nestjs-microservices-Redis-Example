# NestJs microservices examples

In this example, we'll see a really basic math microservice using REDIS as a transport,
it has almost the same config as MQTT, NATS, RabbitMq,
we have a basic microservice that does math operations for us, in our example, it does a sum of an array of numbers that we'll be passing through our HTTP server.

## Installation

We need to install our npm packages, and install redis on our machine,
read more about redis <a href="https://redis.io/">here</a>

```bash
cd http-server
npm install
cd ../math-microservice
npm install
```

## Usage
First, we need to start the redis server on our machine and the projects, open each project in a different terminal for a good view of what's going on,
you can also monitor redis server by running `redis-cli monitor`

```bash
redis-server
cd http-server
npm run start:dev
cd math-microservice
npm run start:dev
```

Then all we have to do is request our HTTP server with insomnia or postman or whatever you prefer using,

## Example

```bash
POST localhost:3000/sum
BODY { data : [6,2,9] }
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
