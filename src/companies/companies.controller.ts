import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Company } from './entities/companies.entity';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create.companies.dto';
import { UpdateCompaniesDto } from './dto/update.companies.dto';

@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}
  @Get()
  findAll(): Promise<Company[]> {
    return this.companiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.companiesService.findOne(id);
  }

  @Post()
  create(@Body() name: CreateCompanyDto): Promise<Company> {
    return this.companiesService.create(name);
  }

  @Patch('/:id')
  update(
    @Param('id') id: number,
    @Body() updateCompaniesDto: UpdateCompaniesDto,
  ) {
    return this.companiesService.update(id, updateCompaniesDto);
  }
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.companiesService.delete(id);
  }
}
