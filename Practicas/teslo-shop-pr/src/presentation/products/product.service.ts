import { Injectable, Logger } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from './dtos';
import { ProductService } from './interfaces';
import { DataSource, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './entities';

@Injectable()
export class ProductServiceImpl implements ProductService {
  private readonly logger: Logger = new Logger('ProductService');

  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
    private readonly datasource: DataSource,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<ProductEntity> {
    throw new Error('Method not implemented.');
  }

  async findAll(): Promise<ProductEntity[]> {
    throw new Error('Method not implemented.');
  }

  async findOne(term: string): Promise<ProductEntity> {
    throw new Error('Method not implemented.');
  }

  async findOnePlain(term: string): Promise<ProductEntity> {
    throw new Error('Method not implemented.');
  }

  async update(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<ProductEntity> {
    throw new Error('Method not implemented.');
  }

  async remove(id: string): Promise<ProductEntity> {
    throw new Error('Method not implemented.');
  }
}
