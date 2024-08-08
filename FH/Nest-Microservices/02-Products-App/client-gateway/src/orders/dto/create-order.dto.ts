import { ArrayMinSize, IsArray, ValidateNested } from 'class-validator';
import { OrderItemDto } from './order-item.dto';
import { Type } from 'class-transformer';
// import { OrderStatus } from '../enum/order.enum';

export class CreateOrderDto {
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  public items: OrderItemDto[];

  // @IsNumber()
  // @IsPositive()
  // public totalAmount: number;

  // @IsNumber()
  // @IsPositive()
  // public totalItems: number;

  // @IsEnum(OrderStatus, {
  //   message: `Possibles status values are ${OrderStatus}`,
  // })
  // @IsOptional()
  // public status?: OrderStatus = OrderStatus.PENDING;

  // @IsBoolean()
  // @IsOptional()
  // public paid?: boolean = false;
}
