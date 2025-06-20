import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CicdModule } from './cicd/cicd.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    TypeOrmModule.forRoot({
      type: "postgres",
      url: process.env.DB_URL,
      entities: ["dist/**/*.entity.{js,ts}"],
      synchronize: true,
    }),
    CicdModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
