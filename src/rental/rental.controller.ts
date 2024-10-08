import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateRentalDto } from './dto/create-rental.dto';
import { RentalService } from './rental.service';

@Controller('rental')
export class RentalController {
  constructor(private readonly rentalService: RentalService) {}

  @Post()
  create(@Body() createRentalDto: CreateRentalDto) {
    return this.rentalService.create(createRentalDto);
  }

  @Get()
  findAll() {
    return this.rentalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rentalService.findOne(+id);
  }
/*
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRentalDto: UpdateRentalDto) {
    return this.rentalService.update(+id, updateRentalDto);
  }
*/
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rentalService.remove(+id);
  }
}
