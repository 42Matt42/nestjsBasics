import { Controller, Get, Param } from '@nestjs/common';

@Controller('chocolate')
export class ChocolateController {
  @Get()
  findAll() {
    return 'this endpoint findAll()'
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This endpoint chocolate/{id} returns: #${id}`;
  }
}
