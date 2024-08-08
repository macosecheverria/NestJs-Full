import { OrderStatus } from '@prisma/client';
import { Type } from 'class-transformer';
import { IsEnum, IsNumber, IsOptional, IsPositive } from 'class-validator';
import { OrderStatusList } from '../enum/order.enum';

export class OrderPaginationDto {
  @IsNumber()
  @IsPositive()
  @Type(() => Number)
  public page: number = 1;

  @IsNumber()
  @IsPositive()
  @Type(() => Number)
  public limit: number = 10;

  @IsEnum(OrderStatusList, {
    message: `Valid status are ${OrderStatusList}`
  })
  @IsOptional()
  public status?: OrderStatus;
}
