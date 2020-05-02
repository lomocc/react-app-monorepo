import { Module } from '@nestjs/common';
import { TransferController } from './transfer/transfer.controller';
import { TransferService } from './transfer/transfer.service';

@Module({
  controllers: [TransferController],
  providers: [TransferService],
})
export class AcctModule {}
