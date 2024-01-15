import { DataSource } from 'typeorm';
import { Company } from './companies.entity';

export const companiesProvider = {
  provide: 'COMPANIES_REPOSITORY',
  useFactory: (dataSource: DataSource) => dataSource.getRepository(Company),
  inject: ['DATA_SOURCE'],
};
