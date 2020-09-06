import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChocolateController } from './chocolate/chocolate.controller';

@Module({
  imports: [],
  controllers: [AppController, ChocolateController],
  providers: [AppService],
})
export class AppModule {}
