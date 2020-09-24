const { GraphQLServer } = require("graphql-yoga");

let links =[{
  id: 'link-0',
  url: 'www.howtographql.com',
  description: 'Fullstack tutorial for GraphQL'
}]

let idCounter = links.length;
const resolvers = {
  Query: {
    info: () => `This is the API of HackerNews clone`,
    feed: () => links,
  },

  Mutation: {
    post: (parent, arg) => {
      const link = {
        id: `link-${idCounter++}`,
        description: arg.description,
        url: arg.url,
      };
      links.push(link);
      return link;
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
});

server.start(() => console.log("The server is running!!!"));
