import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { LoginController } from './controllers/login/login.controller';
import { LogOutController } from './controllers/log-out/log-out.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [AppController, LoginController, LogOutController],
  providers: [AppService],
})
export class AppModule {}
