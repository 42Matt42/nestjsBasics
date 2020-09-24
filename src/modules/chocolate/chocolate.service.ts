import { Injectable, NotFoundException } from '@nestjs/common'
import { Chocolate } from 'src/modules/chocolate/entities/chocolate.entity'

@Injectable()
export class ChocolateService {
  private chocolates: Chocolate[] = [
    {
      id: 1,
      name: 'Extraordinay map maker',
      brand: 'ChocoLove',
      flavors: ['fractal', 'magic'],
    },
    {
      id: 2,
      name: 'Astonishing Nebula Blast',
      brand: 'ChocoBooM',
      flavors: ['surprising', 'explosive'],
    },
  ]

  findAll() {
    return this.chocolates
  }

  findOne(id: string) {
    const chocolate = this.chocolates.find(item => item.id === +id)

    if (!chocolate) {
      // throw new HttpException(`Chocolate #${id} not found`, HttpStatus.NOT_FOUND)
      throw new NotFoundException(`Chocolate #${id} not found`)
    }
    return chocolate
  }

  create(CreateChocolateDto) {
    this.chocolates.push(CreateChocolateDto)
  }

  update(id: string, UpdateChocolateDto) {
    const existingChoco = this.findOne(id)

    if (existingChoco) {
      // update the existing entity
      console.log(UpdateChocolateDto)
    }
  }

  remove(id: string) {
    const chocoIndex = this.chocolates.findIndex(item => item.id === +id)
    if (chocoIndex >= 0) {
      const deleted = this.chocolates.splice(chocoIndex, 1)
      console.log('element deleted:', deleted)
    }
  }
}