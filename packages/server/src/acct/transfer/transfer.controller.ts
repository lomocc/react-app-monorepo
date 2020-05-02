import { Controller, Get } from '@nestjs/common';
import { TransferService } from './transfer.service';

@Controller('acct/transfer')
export class TransferController {
  constructor(private readonly transferService: TransferService) {}
  @Get()
  getHello(): string {
    return this.transferService.getHello();
  }
}
