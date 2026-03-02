// import "dotenv/config";
// import { PrismaPg } from "@prisma/adapter-pg";
// import { PrismaClient } from "../generated/prisma/client.js";

// const connectionString = `${process.env.DATABASE_URL}`;

// const adapter = new PrismaPg({ connectionString });
// const prisma = new PrismaClient({ adapter });

// export default  prisma ;
// ------------------------------------------------------ts-----------------------------
// now it is in js---------------changing the name of file from prisma.ts  to prisma.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default prisma;