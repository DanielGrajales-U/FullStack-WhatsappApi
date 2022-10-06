import { BASEURL } from './../../common/api-resources';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { CloudAPIRequest,CloudAPIResponse } from './dtos';
import { firstValueFrom } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class TestService {
    constructor(
        private httpService: HttpService
    ){}
    baseUrl = BASEURL.baseUrlWhatsappCloudApi;

    async testMessge(request: CloudAPIRequest): Promise<AxiosResponse<CloudAPIResponse>>{
        const {data} = await firstValueFrom(this.httpService.post(this.baseUrl,request))
        return data
    }
}
