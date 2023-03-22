import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [],
  controllers: [CompanyController],
  providers: [CompanyService],
})
export class CompanyModule {}
