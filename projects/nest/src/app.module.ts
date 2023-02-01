import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {GraphqlModule} from "./graphql/graphql.module";
import {SequelizeModule} from "@nestjs/sequelize";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {UserModule} from './user/user.module';
import {UserFriendModule} from "./user-friend/user-friend.module";

@Module({
  imports: [
    GraphqlModule,
    SequelizeModule.forRootAsync({
      inject: [ConfigService],
      imports: [
        ConfigModule.forRoot(),
      ],
      useFactory: (configService: ConfigService) => {
        return {
          dialect: 'postgres',
          host: configService.get('DB_URL'),
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_NAME'),
          autoLoadModels: true,
          synchronize: true,
        };
      },
    }),
    UserModule,
    UserFriendModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
