import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import {InjectModel} from "@nestjs/sequelize";
import {User} from "./entities/user.entity";

@Injectable()
export class UserService {
  constructor(
      @InjectModel(User)
      private userModel: typeof User,
  ) {}

  create(createUserInput: CreateUserInput) {
    return this.userModel.create({...createUserInput});
  }

  findAll() {
    return this.userModel.findAll();
  }

  findOne(id: number) {
    return this.userModel.findOne({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateUserInput: UpdateUserInput) {
    const user = await this.findOne(id);
    return user.update({ ...updateUserInput });
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    return user.destroy();
  }
}
