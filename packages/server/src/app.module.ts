import { Module } from '@nestjs/common';
import { AcctModule } from './acct/acct.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [AcctModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
