import dotenv from 'dotenv';
import app from './application/server';
import db from './data/db';
import apolloServer from './graphql/server';

dotenv.config();
const PORT = process.env.PORT;

(async () => {

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  app.listen(PORT, () => console.log('app running on port', PORT));
})();
