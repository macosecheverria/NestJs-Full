import { IsArray, IsIn, IsInt, IsNumber, IsOptional, IsPositive, IsString, MinLength } from "class-validator";

export class UpdateProductDto {
  @IsString()
  @MinLength(3)
  @IsOptional()
  public title?: string;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  public price?: number;

  @IsString()
  @MinLength(10)
  @IsOptional()
  public description?: string;

  @IsString()
  @IsOptional()
  public slug?: string;

  @IsInt()
  @IsPositive()
  @IsOptional()
  public stock?: number;

  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  public sizes?: string[];

  @IsIn(['men', 'women', 'kid', 'unisex'])
  @IsOptional()
  public gender?: string;

  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  public tags?: string[];

  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  public images?: string[];
}
