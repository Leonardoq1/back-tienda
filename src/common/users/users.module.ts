/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm/dist";
import { UsersController } from "./users.controller";
import { UsersEntity } from "./users.entity";
import { UsersService } from "./users.service";


@Module({
    imports: [TypeOrmModule.forFeature([UsersEntity])],
    providers: [UsersService],
    exports: [UsersService],
    controllers: [UsersController]
})

export class UsersModule{}