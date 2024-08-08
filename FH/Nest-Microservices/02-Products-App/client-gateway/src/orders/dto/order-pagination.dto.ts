import { PaginationDto } from 'src/common';
import { OrderStatus, OrderStatusList } from '../enum/order.enum';
import { IsEnum, IsOptional } from 'class-validator';

export class OrderPaginationDto extends PaginationDto {
  @IsEnum(OrderStatusList, {
    message: `Valid status are ${OrderStatus}`,
  })
  @IsOptional()
  status?: OrderStatus;
}
