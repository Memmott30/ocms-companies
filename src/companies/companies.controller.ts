import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('companies')
export class CompaniesController {
  @Get()
  getAll() {
    return 'This action returns all companies';
  }

  @Get(':id')
  getAllId(@Param('id') id: number) {
    return `This action returns a #${id} company`;
  }

  @Post()
  create(@Body() Body: any) {
    return Body;
  }
}
