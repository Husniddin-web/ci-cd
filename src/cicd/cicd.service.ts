import { Injectable } from '@nestjs/common';
import { CreateCicdDto } from './dto/create-cicd.dto';
import { UpdateCicdDto } from './dto/update-cicd.dto';

@Injectable()
export class CicdService {
  create(createCicdDto: CreateCicdDto) {
    return 'This action adds a new cicd';
  }

  findAll() {
    return `This action returns all cicd`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cicd`;
  }

  update(id: number, updateCicdDto: UpdateCicdDto) {
    return `This action updates a #${id} cicd`;
  }

  remove(id: number) {
    return `This action removes a #${id} cicd`;
  }
}
