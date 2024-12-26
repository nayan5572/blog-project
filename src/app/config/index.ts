/* eslint-disable no-undef */
// /* eslint-disable no-undef */
// import dotenv from "dotenv";
// import path from "path";

// // dotenv.config();
// dotenv.config({ path: path.join((process.cwd(), ".env")) });

// export default {
//   node__env: process.env.NODE_ENV,
//   port: process.env.PORT,
//   database_url: process.env.DATABASE_URL,
//   jwt_access_secret: process.env.JWT_ACCESS_SECRET,
//   jwt_refresh_token_secret: process.env.JWT_REFRESH_SECRET,
//   jwt_access_expire_in: process.env.JWT_ACCESS_EXPIRES_IN,
//   jwt_refresh_expire_in: process.env.JWT_REFRESH_EXPIRES_IN,
// };

import dotenv from "dotenv";
import path from "path";

// declare var process: NodeJS.Process;

dotenv.config({ path: path.join((process.cwd(), ".env")) });

export default {
  node__env: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  jwt__access__token__secret: process.env.JWT__ACCESS__SECRET__TOKEN,
  jwt__refresh__token__secret: process.env.JWT__REFRESH__SECRET__TOKEN,
};
