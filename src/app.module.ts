import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ChocolateModule } from './modules/chocolate/chocolate.module'

@Module({
  imports: [ChocolateModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
