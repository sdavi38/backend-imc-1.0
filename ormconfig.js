// const CI_DATABASE_URL = 'postgres://test:test@postgres:5432/test';

console.log(`Configuring ORM - Conecting...`);

const base = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  schema: 'public',
  synchronize: false,
  logging: false,
  entities: ['./dist/modules/**/infra/typeorm/entities/*.js'],
  migrations: ['./dist/shared/infra/typeorm/migrations/*.js'],
  cli: {
    entitiesDir: './dist/modules/**/infra/typeorm/entities',
    migrationsDir: './dist/shared/infra/typeorm/migrations',
  },
  migrationsRun: true,
};

const development = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  url: '',
  username: 'postgres',
  password: '1199',
  database: 'api-imc',
  entities: ['./src/modules/**/infra/typeorm/entities/*.ts'],
  migrations: ['./src/shared/infra/typeorm/migrations/*.ts'],
  cli: {
    migrationsDir: './src/shared/infra/typeorm/migrations',
  },
};

module.exports = process.env.DATABASE_URL ? { ...base } : { ...development };

// module.exports = { ...development };
