import { Injectable } from '@nestjs/common';
import { HttpModuleOptions,HttpModuleOptionsFactory } from '@nestjs/axios';

@Injectable()
export class HttpConfigService implements HttpModuleOptionsFactory{
    createHttpOptions(): HttpModuleOptions {
        return {
            headers: {
                'Authorization':  'Bearer EAALjBtc4YJoBAJkxUEQuBQouuY2qbqKxQdRjorci3uXObDWnVGvqIkY4GsdoEETWCZAkb4rTO4HqZBjmFnLUAYnCCTZCJsihL0t5STl1vpZChoOcELyYDeYVz6j6AijRBoU5cqXAlgawbjHZAfcy3c0FMxNZBbthfLLRwKFeYMQH283an39SAHpZCb02ARwIFLQqPvGgXUS2gZDZD',
                'Content-Type': 'application/json'
            }
        }
    }
}