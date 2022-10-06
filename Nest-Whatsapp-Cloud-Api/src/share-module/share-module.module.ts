import { ConsumeTemplateService } from './consume-template/consume-template.service';
import { ConsumeTemplateController } from './consume-template/consume-template.conttoller';
import { HttpModule } from '@nestjs/axios';
import { HttpConfigService } from 'src/http.Service.config';
import { Module } from '@nestjs/common';
import { TestController } from './test/test.controller';
import { TestService } from './test/test.service';

@Module({
  imports:[
    HttpModule.registerAsync({
      useClass:HttpConfigService
    }),
    ShareModuleModule
  ],
  controllers: [TestController, ConsumeTemplateController],
  providers: [TestService, ConsumeTemplateService]
})
export class ShareModuleModule {}
