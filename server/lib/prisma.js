// import "dotenv/config";
// import { PrismaPg } from "@prisma/adapter-pg";
// import { PrismaClient } from "../generated/prisma/client";

// const connectionString = `${process.env.DATABASE_URL}`;

// const adapter = new PrismaPg({ connectionString });
// const prisma = new PrismaClient({ adapter });

// export default  prisma ;

// server/lib/prisma.js
// ---------------------------converted .ts to .js

// lib/prisma.js

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient(); // no adapter, no extra options
export default prisma;