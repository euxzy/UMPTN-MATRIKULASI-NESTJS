import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getUsers(): Array<object> {
    return [
      {
        name: 'Muhamad Rijal',
        domisili: 'Kab. Bandung Barat',
      },
      {
        name: 'Test User',
        domisili: 'Kota Bandung',
      },
    ];
  }
}
