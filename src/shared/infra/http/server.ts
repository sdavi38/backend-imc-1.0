import 'reflect-metadata';
 

import app from './app';

const port = process.env.DATABASE_URL ? process.env.PORT : 5000;

app.listen(port, () => {
  console.log('🚀 Server started!');
});