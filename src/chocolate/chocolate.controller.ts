import { Controller, Get, Post, Param, Body, Patch, Delete, Query } from '@nestjs/common';
// import { response } from 'express';

@Controller('chocolate')
export class ChocolateController {
  @Get()
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;

    return `All chocolate in the Universe ! constraints: Limit: ${limit}, Offset: ${offset}`
  }
  // @Get()
  // findAll(@Res() response) {
  //   response.status(200).send('This endpoint sends a response.status: 200')
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This endpoint chocolate/{id} returns: #${id}`;
  }

  @Post()
  // @HttpCode(HttpStatus.GONE)
  create(@Body('name') body: string) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `This endpoint updates the body (${body})for the specified id: #${id}`
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This endpoint removes the entry corresponding to id #${id}`
  }
}
