import { PartialType } from '@nestjs/swagger';
import { CreateCicdDto } from './create-cicd.dto';

export class UpdateCicdDto extends PartialType(CreateCicdDto) {}
