import { Controller, Get } from '@nestjs/common';

@Controller('api/conpanies')
export class ConpaniesController {
  @Get()
  findAll(): string {
    return 'Conpanies';
  }
}
