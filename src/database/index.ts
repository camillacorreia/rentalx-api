import { DataSource } from 'typeorm';

const dataSource = new DataSource({
  type: 'postgres',
  host: 'database_rentx',
  port: 5432,
  username: 'docker',
  password: '1234',
  database: 'rentx',
});

dataSource
  .initialize()
  .then(async () => {
    console.log('Initializing the database...');
  })
  .catch((err) => console.log(err));
