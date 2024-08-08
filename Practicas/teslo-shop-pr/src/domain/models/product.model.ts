export class ProductModel {
  private constructor(
    public readonly id: string,
    public readonly title: number,
    public readonly price: number,
    public readonly description: string,
    public readonly slug: string,
    public readonly stock: number,
    public readonly size: string[],
    public readonly gender: string,
    public readonly tags: string[],
  ) {}

  static fromObject(props: { [key: string]: any }): ProductModel {
    const { id, title, price, description, slug, stock, size, gender, tags } =
      props;

    if (!id) throw 'id is required';
    if (!title) throw 'title is required';
    if (!price) throw 'price is required';
    if (!description) throw 'description is required';
    if (!slug) throw 'slug is required';
    if (!stock) throw 'stock is required';
    if (!size) throw 'size is required';
    if (!gender) throw 'gender is required';
    if (!tags) throw 'tags is required';

    return new ProductModel(
      id,
      title,
      price,
      description,
      slug,
      stock,
      size,
      gender,
      tags,
    );
  }
}
