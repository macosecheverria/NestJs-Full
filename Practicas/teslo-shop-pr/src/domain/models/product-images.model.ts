import { ProductModel } from './product.model';

export class ProductImagesModel {
  private constructor(
    public readonly id: number,
    public readonly url: string,
    public readonly product: ProductModel,
  ) {}

  static fromObject(props: { [key: string]: any }): ProductImagesModel {
    const { id, url, product } = props;

    if (!id) throw 'Id is required';
    if (!url) throw 'url is required';
    if (!product) throw 'product is required';

    return new ProductImagesModel(id, url, product);
  }
}
