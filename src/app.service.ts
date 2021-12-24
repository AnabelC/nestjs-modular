import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from './config';

@Injectable()
export class AppService {
  constructor(
    @Inject('TASKS') private tasks: any[],
    @Inject(config.KEY) private configServices: ConfigType<typeof config>,
  ) {}
  getHello(): string {
    const apiKey = this.configServices.apiKey;
    const dbName = this.configServices.database.name;
    const dbPort = this.configServices.database.port;
    return `Hola Mundo! ${apiKey} ${dbName} ${dbPort}`;
  }
}
