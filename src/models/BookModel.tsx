export default interface BookModel {
  author: string;
  description: string;
  editorship: string;
  featured: boolean;
  genre: string;
  id: string;
  image: string;
  isbn: string;
  language: string;
  name: string;
  pages: number;
  price: number;
  published: number;
  size: number;
  slug: string;
  weight: number;
  quantity?: number;
}
