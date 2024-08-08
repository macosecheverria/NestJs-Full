import { CreateProductDto, UpdateProductDto } from '../dtos';
import { ProductEntity } from '../entities';

export interface ProductService {
  create(createProductDto: CreateProductDto): Promise<ProductEntity>;

  findAll(): Promise<ProductEntity[]>;

  findOne(term: string): Promise<ProductEntity>;

  findOnePlain(term: string): Promise<ProductEntity>;

  update(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<ProductEntity>;

  remove(id: string): Promise<ProductEntity>;
}
