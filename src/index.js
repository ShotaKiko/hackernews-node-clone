const { GraphQLServer } = require("graphql-yoga");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const resolvers = {
  Query: {
    info: () => `This is the API of HackerNews clone`,
    feed: async (parent, args, context, info) => {
      return context.prisma.link.findMany();
    },
  },

  Mutation: {
    post: (parent, args, context) => {
      const newLink = context.prisma.link.create({
        data: {
          url:   args.url,
          description: args.description,
        },
      });
      return newLink;
    },
  },

  Link: {
    id: (parent) => parent.id,
    description: (parent) => parent.description,
    url: (parent) => parent.url,
  },
};


const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: {
    prisma,
  },
});

server.start(() => console.log("The server is running!!!"));
