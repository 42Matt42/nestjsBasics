import { Module } from '@nestjs/common'
import { ChocolateController } from 'src/modules/chocolate/chocolate.controller'
import { ChocolateService } from 'src/modules/chocolate/chocolate.service'

@Module({
  controllers: [ChocolateController],
  providers: [ChocolateService],
  exports: [ChocolateService]
})
export class ChocolateModule {}
