import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChocolateController } from './chocolate/chocolate.controller';
import { ChocolateService } from './chocolate/chocolate.service';

@Module({
  imports: [],
  controllers: [AppController, ChocolateController],
  providers: [AppService, ChocolateService],
})
export class AppModule {}
