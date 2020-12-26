import React, { createContext, useState, ChangeEvent } from "react";
import BookModel from "../models/BookModel";
import CartBookModel from "../models/CartBookModel";

import Client from "./contentful";
import { Entry } from "contentful";

interface BookContextInterface {
  books: BookModel[];
  featuredBooks: BookModel[];
  sortedBooks: BookModel[];
  cart: CartBookModel[];
  loading: boolean;
  genre: string;
  price: number;
  maxPrice: number;
  minPrice: number;
  editorship: string;
  language: string;
  pages: number;
  maxPages: number;
  minPages: number;
  isbn: string;
  quantity: number;
}
//either leave any or fill default values from interface
const BookContext = createContext<BookContextInterface | any>({});

interface Props {
  children: React.ReactNode;
}

const BookProvider = ({ children }: Props) => {
  const [books, setBooks] = useState<BookModel[]>([]);
  const [featuredBooks, setFeaturedBooks] = useState<BookModel[]>([]);
  const [sortedBooks, setSortedBooks] = useState<BookModel[]>([]);
  const [cart, setCart] = useState<CartBookModel[]>([]);

  const [loading, setLoading] = useState<boolean>(true);

  const [maxPrice, setMaxPrice] = useState<number>(0);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPages, setMaxPages] = useState<number>(0);
  const [minPages, setMinPages] = useState<number>(0);

  const [genre, setGenre] = useState<string>("All");
  const [price, setPrice] = useState<number>(0);
  const [editorship, setEditoship] = useState<string>("All");
  const [language, setLanguage] = useState<string>("All");
  const [pages, setPages] = useState<number>(0);
  const [isbn, setIsbn] = useState<string>("");

  const getData = async () => {
    try {
      let response = await Client.getEntries<any>({
        content_type: "bookStore",
      });
      let books = formatData(response.items);

      let featuredBooks = books.filter((book) => book.featured === true);

      let maxPrice = Math.max(
        ...books.map((item) => {
          return item.price;
        })
      );

      let minPrice = Math.min(
        ...books.map((item) => {
          return item.price;
        })
      );

      let maxPages = Math.max(
        ...books.map((item) => {
          return item.pages;
        })
      );

      let minPages = Math.min(
        ...books.map((item) => {
          return item.pages;
        })
      );

      setBooks(books);
      setFeaturedBooks(featuredBooks);
      setLoading(false);
      setSortedBooks(books);
      setPrice(maxPrice);
      setMaxPrice(maxPrice);
      setMinPrice(minPrice);
      setPages(maxPages);
      setMaxPages(maxPages);
      setMinPages(minPages);
    } catch (error) {
      console.log(error);
    }
  };

  const formatData = (array: Entry<any>[]): BookModel[] => {
    let tempArray = array.map((item) => {
      let id = item.sys.id;
      let image = item.fields.image.fields.file.url;
      let isbn = item.fields.isbn.toString();
      let book = { ...item.fields, id, image, isbn };
      return book;
    });
    return tempArray;
  };

  //TOTO DAT DO FILTRU LEBO TO JE SPECIFICKE PRE FILTER
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "editorship") {
      setEditoship(value);
    } else if (name === "genre") {
      setGenre(value);
    } else if (name === "language") {
      setLanguage(value);
    } else if (name === "price") {
      let numValue = parseInt(value);
      setPrice(numValue);
    } else if (name === "pages") {
      let numValue = parseInt(value);
      setPages(numValue);
    } else if (name === "isbn") {
      setIsbn(value);
    }
  };

  const filterBooks = () => {
    let tempBooks = [...books];

    if (genre !== "All") {
      tempBooks = tempBooks.filter((book) => book.genre === genre);
    }

    if (language !== "All") {
      tempBooks = tempBooks.filter((book) => book.language === language);
    }
    if (editorship !== "All") {
      tempBooks = tempBooks.filter((book) => book.editorship === editorship);
    }
    tempBooks = tempBooks.filter((book) => book.price <= price);
    tempBooks = tempBooks.filter((book) => book.pages <= pages);

    tempBooks = tempBooks.filter((book) => book.isbn.includes(isbn));

    setSortedBooks(tempBooks);
  };

  const getBook = (slug: string) => {
    let tempItems = [...books];
    const book = tempItems.find((book: BookModel) => book.slug === slug);
    return book;
  };

  const addCart = (book: BookModel) => {
    let cartBooks: CartBookModel[] = [...cart];

    if (!cartBooks.find((b) => b.book === book)) {
      // console.log("!found");
      let newBook: CartBookModel = {
        book: book,
        quantity: 1,
      };
      cartBooks = [...cartBooks, newBook];
    } else {
      let thisBook = cartBooks.find((b) => b.book === book);
      if (thisBook !== undefined) {
        thisBook.quantity += 1;
      }
    }

    localStorage.setItem("cartItems", JSON.stringify(cartBooks));

    setCart(cartBooks);
  };

  const removeItemsFromCart = () => {
    setCart([]);
    localStorage.setItem("cartItems", "[]");
  };

  const removeItem = (book: CartBookModel) => {
    let newCart = [...cart];
    newCart = newCart.filter((b) => b !== book);
    setCart(newCart);
    localStorage.setItem("cartItems", JSON.stringify(newCart));
  };

  const incCartItemQuantity = (book: CartBookModel) => {
    let myCart: CartBookModel[] = [...cart];
    let thisBook = myCart.find((b) => b.book === book.book);
    if (thisBook !== undefined) {
      thisBook.quantity += 1;
      let index: number = myCart.indexOf(thisBook);
      myCart.splice(index, 1);
      myCart.splice(index, 0, thisBook);
      setCart(myCart);
    }

    localStorage.setItem("cartItems", JSON.stringify(myCart));
  };

  const decCartItemQuantity = (book: CartBookModel) => {
    let myCart: CartBookModel[] = [...cart];
    let thisBook = myCart.find((b) => b.book === book.book);
    if (thisBook !== undefined) {
      if (thisBook.quantity > 1) {
        thisBook.quantity -= 1;
      }
      let index: number = myCart.indexOf(thisBook);
      myCart.splice(index, 1);
      myCart.splice(index, 0, thisBook);
      setCart(myCart);
    }

    localStorage.setItem("cartItems", JSON.stringify(myCart));
  };

  const getCartItems = () => {
    let cartItemsStr = localStorage.getItem("cartItems");
    let cartItems = cartItemsStr !== null ? JSON.parse(cartItemsStr) : [];

    setCart(cartItems);
  };

  React.useEffect(() => {
    getData();
    getCartItems();
  }, []);

  React.useEffect(() => {
    filterBooks();
  }, [genre, editorship, language, price, pages, isbn]);

  return (
    <BookContext.Provider
      value={{
        books,
        featuredBooks,
        loading,
        sortedBooks,
        cart,

        genre,
        price,
        maxPrice,
        minPrice,
        pages,
        maxPages,
        minPages,
        editorship,
        language,
        isbn,
        getBook,
        handleChange,
        addCart,
        removeItemsFromCart,
        incCartItemQuantity,
        decCartItemQuantity,
        removeItem,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

const BookConsumer = BookContext.Consumer;

export { BookProvider, BookConsumer, BookContext };
