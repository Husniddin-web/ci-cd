import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CicdService } from './cicd.service';
import { CreateCicdDto } from './dto/create-cicd.dto';
import { UpdateCicdDto } from './dto/update-cicd.dto';

@Controller('cicd')
export class CicdController {
  constructor(private readonly cicdService: CicdService) {}

  @Post()
  create(@Body() createCicdDto: CreateCicdDto) {
    return this.cicdService.create(createCicdDto);
  }

  @Get()
  findAll() {
    return this.cicdService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cicdService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCicdDto: UpdateCicdDto) {
    return this.cicdService.update(+id, updateCicdDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cicdService.remove(+id);
  }
}
