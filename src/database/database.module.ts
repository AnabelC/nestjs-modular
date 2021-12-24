import { Module, Global } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

const API_KEY = '12345678';
const API_KEY_PROD = 'xyz';

@Global()
@Module({
  imports: [HttpModule],
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
    },
  ],
  exports: ['API_KEY'],
})
export class DatabaseModule {}
