import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'node apis in vercel~';
  }

  getJson() {
    return {
      code: 0,
      data: {
        hello: 'vercel~',
      },
    };
  }
}
