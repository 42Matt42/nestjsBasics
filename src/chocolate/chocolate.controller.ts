import { Controller, Get, Post, Param, Body, Patch, Delete, Query } from '@nestjs/common'
import { ChocolateService } from 'src/chocolate/chocolate.service'
import { Chocolate } from './chocolate.entity'
// import { response } from 'express'

@Controller('chocolate')
export class ChocolateController {
  constructor(private readonly chocolateService: ChocolateService) {}

  @Get()
  findAll(@Query() paginationQuery) {
    // const { limit, offset } = paginationQuery

    // return `All chocolate in the Universe ! constraints: Limit: ${limit}, Offset: ${offset}`
    return this.chocolateService.findAll()
  }
  // @Get()
  // findAll(@Res() response) {
  //   response.status(200).send('This endpoint sends a response.status: 200')
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // return `This endpoint chocolate/{id} returns: #${id}`
    return this.chocolateService.findOne(id)
  }

  @Post()
  // @HttpCode(HttpStatus.GONE)
  create(@Body() body: Chocolate) {
    console.log('create_body', body)
    return this.chocolateService.create(body)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    // return `This endpoint updates the body (${body})for the specified id: #${id}`
    return this.chocolateService.update(id, body)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // return `This endpoint removes the entry corresponding to id #${id}`
    return this.chocolateService.remove(id)
  }
}
