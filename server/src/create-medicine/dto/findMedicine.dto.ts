import { IsString } from "class-validator";

export class FindMedicine {
    @IsString()
    name: string
}