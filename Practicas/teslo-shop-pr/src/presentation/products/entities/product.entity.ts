import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductImagesEntity } from './product-images.entity';

@Entity({ name: 'products' })
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({
    type: 'text',
    unique: true,
  })
  public title: string;

  @Column({
    type: 'float',
    default: 0,
  })
  public price: number;

  @Column({
    type: 'text',
  })
  public description: string;

  @Column({
    type: 'text',
    unique: true,
  })
  public slug: string;

  @Column({
    type: 'int',
    nullable: true,
  })
  public stock: number;

  @Column({
    type: 'text',
    array: true,
  })
  public size: string[];

  @Column({
    type: 'text',
  })
  public gender: string;

  @Column({
    type: 'text',
    array: true,
    default: [],
  })
  public tags: string;

  @OneToMany(
    () => ProductImagesEntity,
    (productImages) => productImages.product,
    {
      cascade: true,
      eager: true,
    },
  )
  public images: string[];

  @BeforeInsert()
  checkSlugInsert() {
    if (!this.slug) {
      this.slug = this.title;
    }

    this.slug = this.slug
      .toLocaleLowerCase()
      .replaceAll(' ', '_')
      .replaceAll('"', "'");
  }

  @BeforeUpdate()
  checkSlugUpdate() {
    this.slug = this.slug
      .toLocaleLowerCase()
      .replaceAll(' ', '_')
      .replaceAll('"', "'");
  }
}
