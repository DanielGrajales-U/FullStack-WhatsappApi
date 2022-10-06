import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios'
import { firstValueFrom } from 'rxjs';
import { CloudAPIRequest,CloudAPIResponse } from '../test/dtos';
import { BASEURL } from 'src/common/api-resources';

@Injectable()
export class ConsumeTemplateService {
    constructor(private httpService: HttpService) {}

    baseUrl = BASEURL.baseUrlWhatsappCloudApi;

    async sendMessage(request: CloudAPIRequest): Promise<AxiosResponse<CloudAPIResponse>> {
        const { data } = await firstValueFrom(this.httpService.post(this.baseUrl, request));
        console.log(data);
        return data;
    }
}