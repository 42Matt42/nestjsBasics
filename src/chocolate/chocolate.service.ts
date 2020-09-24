import { Injectable } from '@nestjs/common';
import { Chocolate } from 'src/chocolate/chocolate.entity';

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
    return this.chocolates;
  }

  findOne(id: string) {
    return this.chocolates.find(item => item.id === +id);
  }

  create(createChocoDto: Chocolate) {
    this.chocolates.push(createChocoDto);
  }

  update(id: string, updateChocoDto: Chocolate) {
    const existingChoco = this.findOne(id);

    if (existingChoco) {
      // update the existing entity
      console.log(updateChocoDto)
    }
  }

  remove(id: string) {
    const chocoIndex = this.chocolates.findIndex(item => item.id === +id);
    if (chocoIndex >= 0) {
      const deleted = this.chocolates.splice(chocoIndex, 1);
      console.log('element deleted:', deleted)
    }
  }
}