import { CloudAPIRequest } from './dtos/wharsapp-cloud-api-request';
import { TestService } from './test.service';
import { Controller, Logger,Post, Body, Res, HttpStatus } from '@nestjs/common';

@Controller('test')
export class TestController {
    private readonly logger = new Logger('test');
    constructor(
       private testService:TestService
    ){}

    @Post()
    testMessage(
        @Body() request: CloudAPIRequest,
        @Res() response
    ){
        this.logger.warn('testMessage');
        this.testService.testMessge(request).then(res => {
            response.status(HttpStatus.CREATED).json(res);
        }).catch(err => {
            response.status(HttpStatus.BAD_REQUEST).json(err)
        })
    }
}
