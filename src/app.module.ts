import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pet } from './pets/pet.entity';
import { PetsController } from './pets/pets.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://127.0.0.1:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false',
      database: 'test',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
    ConfigModule.forRoot(),
    TypeOrmModule.forFeature([Pet]),
  ],
  controllers: [AppController, PetsController],
  providers: [AppService],
})
export class AppModule {}
