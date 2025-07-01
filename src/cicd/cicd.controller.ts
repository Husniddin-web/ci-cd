import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from "@nestjs/swagger";
import { CicdService } from "./cicd.service";
import { CreateCicdDto } from "./dto/create-cicd.dto";
import { UpdateCicdDto } from "./dto/update-cicd.dto";

@ApiTags("CICD")
@Controller("cicd")
export class CicdController {
  constructor(private readonly cicdService: CicdService) {}

  @Post()
  @ApiOperation({ summary: "Create a new CICD record" })
  @ApiResponse({
    status: 201,
    description: "CICD record created successfully updated ci/cd",
  })
  @ApiBody({ type: CreateCicdDto })
  create(@Body() createCicdDto: CreateCicdDto) {
    return this.cicdService.create(createCicdDto);
  }

  @Get()
  @ApiOperation({ summary: "Get all CICD records" })
  @ApiResponse({ status: 200, description: "List of CICD records" })
  findAll() {
    console.log(process.env.SSS);
    console.log(process.env.DB_URL);
    return this.cicdService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Get a CICD record by ID" })
  @ApiParam({ name: "id", type: "number" })
  @ApiResponse({ status: 200, description: "CICD record found" })
  @ApiResponse({ status: 404, description: "CICD record not found" })
  findOne(@Param("id") id: string) {
    return this.cicdService.findOne(+id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Update a CICD record" })
  @ApiParam({ name: "id", type: "number" })
  @ApiBody({ type: UpdateCicdDto })
  @ApiResponse({ status: 200, description: "CICD record updated successfully" })
  update(@Param("id") id: string, @Body() updateCicdDto: UpdateCicdDto) {
    return this.cicdService.update(+id, updateCicdDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Delete a CICD record" })
  @ApiParam({ name: "id", type: "number" })
  @ApiResponse({ status: 200, description: "CICD record deleted successfully" })
  remove(@Param("id") id: string) {
    return this.cicdService.remove(+id);
  }
}
