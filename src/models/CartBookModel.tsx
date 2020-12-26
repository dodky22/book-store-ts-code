import BookModel from "../models/BookModel";

export default interface CartBookModel {
  book: BookModel;
  quantity: number;
}
