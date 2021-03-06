const { GraphQLServer } = require("graphql-yoga");
const { PrismaClient } = require("@prisma/client");
const { PubSub } = require("graphql-yoga");
const Subscription = require("./resolvers/Subscription");

const pubsub = new PubSub();

const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
const User = require("./resolvers/User");
const Link = require("./resolvers/Link");
const Vote = require("./resolvers/Vote");

const prisma = new PrismaClient();

const resolvers = {
  Query,
  Mutation,
  User,
  Link,
  Subscription,
  Vote,
};


const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: (request) => {
    return {
      ...request,
      prisma,
      pubsub,
    };
  },
});

server.start(() => console.log("The server is running!!!"));
