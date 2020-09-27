//imports the client constructor from node module
const { PrismaClient } = require("@prisma/client");

//instantiates
const prisma = new PrismaClient();

async function main() {
  const newLink = await prisma.link.create({
    data: {
      description: "Fullsatck tutorial for graphQL",
      url: "www.howtographql.com",
    },
  });
  const allLinks = await prisma.link.findMany();
  console.log(allLinks);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
