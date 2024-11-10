import { IsOptional, IsString } from "class-validator";

export class CreateMedicine {
    @IsString()
    name: string

    @IsString()
    @IsOptional()
    manufacturer: string

    @IsString()
    contraindications: string
}