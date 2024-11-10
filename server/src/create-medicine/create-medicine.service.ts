import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateMedicine } from './dto/createMedicine.dto';
import { FindMedicine } from './dto/findMedicine.dto';

@Injectable()
export class CreateMedicineService {
    public constructor(private prisma: PrismaService) {}

    async createMedicine(data: CreateMedicine) {
        return this.prisma.medicine.create({
            data: {
                name: data.name,
                manufacturer: data.manufacturer,
                contraindications: data.contraindications
            }
        })
    }

    async findMedicineByName(dto: FindMedicine) {
        return this.prisma.medicine.findFirst({
            where: {
                name: {
                    contains: dto.name,
                    mode: 'insensitive'
                }
            },
            select: {
                name: true,
                manufacturer: true,
                contraindications: true
            }
        })
    }
}
