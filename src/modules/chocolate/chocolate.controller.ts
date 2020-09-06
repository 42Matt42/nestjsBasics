import { Controller, Get, Post, Param, Body, Patch, Delete } from '@nestjs/common'
import { ChocolateService } from 'src/modules/chocolate/chocolate.service'
import { CreateChocolateDto } from './dto/create-chocolate.dto'
import { UpdateChocolateDto } from './dto/update-chocolate.dto'
// import { response } from 'express'

@Controller('chocolate')
export class ChocolateController {
  constructor(
    private readonly chocolateService: ChocolateService,
  ) {}

  @Get()
  findAll() {
  // findAll(@Query() paginationQuery) {
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
  create(@Body() createChocolateDto: CreateChocolateDto) {
    console.log('create_body', createChocolateDto)
    return this.chocolateService.create(createChocolateDto)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChocolateDto: UpdateChocolateDto) {
    // return `This endpoint updates the body (${updateChocolateDto})for the specified id: #${id}`
    return this.chocolateService.update(id, updateChocolateDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // return `This endpoint removes the entry corresponding to id #${id}`
    return this.chocolateService.remove(id)
  }
}
