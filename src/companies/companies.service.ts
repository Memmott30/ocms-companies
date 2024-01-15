import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from './entities/companies.entity';
import { Repository } from 'typeorm';
import { CreateCompanyDto } from './dto/create.companies.dto';
import { UpdateCompaniesDto } from './dto/update.companies.dto';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectRepository(Company)
    private companyRepository: Repository<Company>,
  ) {}
  findAll(): Promise<Company[]> {
    return this.companyRepository.find();
  }

  findOne(id: number) {
    return this.companyRepository.findOneBy({ id });
  }

  create(createCompanyDto: CreateCompanyDto) {
    const company = this.companyRepository.create(createCompanyDto);
    return this.companyRepository.save(company);
  }

  update(id: number, updateCompaniesDto: UpdateCompaniesDto) {
    // const company = await this.companyRepository.findOneBy({ id });
    // this.companyRepository.merge(company, updateCompaniesDto);
    // return this.companyRepository.save(company);
    return this.companyRepository.update(id, updateCompaniesDto);
  }

  delete(id: number) {
    return this.companyRepository.delete({ id });
  }
}
