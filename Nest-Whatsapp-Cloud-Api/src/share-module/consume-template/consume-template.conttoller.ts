import { Controller, Post, HttpStatus, Res, Body } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { CloudAPIRequest } from '../test/dtos';
import { ConsumeTemplateService } from './consume-template.service';

@Controller('consume-template')
export class ConsumeTemplateController {
    private readonly logger = new Logger('consume-template');
    constructor(private service: ConsumeTemplateService ) {}

    @Post()
    sampleMovieTicketConfirmation(@Body() request: CloudAPIRequest, @Res() response) {
        this.logger.warn('consume-template');
        this.service.sendMessage(request).then( res => {
            response.status(HttpStatus.CREATED).json(res);
        }).catch((err) => {
            response.status(HttpStatus.BAD_REQUEST).json(err.response.data);
        })
    }
}