import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

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
  create(@Body() body: any) {
    return body;
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return body;
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return `This action removes a #${id} company`;
  }
}
