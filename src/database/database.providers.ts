import { TypeOrmModule } from '@nestjs/typeorm';

export const databaseProviders = [
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'marcelo',
    password: '1234',
    database: 'ocms',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
    logging: true,
  }),
];
