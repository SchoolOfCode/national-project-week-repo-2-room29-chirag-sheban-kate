export const config = {
   dbHost: process.env.PGHOST,
   db: process.env.PGDATABASE,
   dbUser: process.env.PGUSER,
   dbPort: process.env.PGPORT,
   dbPassword: process.env.PGPASSWORD,
};

export default config;

// console.log(config.dbhost);
