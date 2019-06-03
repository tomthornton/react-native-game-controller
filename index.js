const { prisma } = require('./prisma/generated/prisma-client')

// A `main` function so that we can use async/await
async function main() {
  // Create a new user with a new post
  const hamburger = await prisma.menuItems();
  console.log(JSON.stringify(hamburger));
}

main().catch(e => console.error(e))