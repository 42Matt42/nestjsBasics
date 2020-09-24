import { PartialType } from '@nestjs/mapped-types'
import { CreateChocolateDto } from './create-chocolate.dto'

export class UpdateChocolateDto extends PartialType(CreateChocolateDto) {
  // readonly name?: string
  // readonly brand?: string
  // readonly flavors?: string[]
}
