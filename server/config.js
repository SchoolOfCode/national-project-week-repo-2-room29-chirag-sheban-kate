export const config = {
   dbHost: process.env.HOST,
   db: process.env.DATABASE,
   dbUser: process.env.USER,
   dbPort: process.env.PORT,
   dbPassword: process.env.PASSWORD,
};

export default config;

// console.log(config.dbhost);
