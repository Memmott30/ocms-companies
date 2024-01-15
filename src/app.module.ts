import { Module } from '@nestjs/common';
import { CompaniesModule } from './companies/companies.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [CompaniesModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
