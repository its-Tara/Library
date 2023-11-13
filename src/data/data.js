let books = [
    {
      name: "سمفونی مردگان",
      number: 21,
      amount: "50,000",
      due: "1401/01/12",
      photo:"https://upload.wikimedia.org/wikipedia/fa/7/76/1631_63289_normal.jpg",
    },
    {
      name: "کوری",
      number: 22,
      amount: "65,000",
      due: "1400/12/22",
      photo:"https://www.iranketab.ir/Images/ProductImages/8148528125a34659ab4621c909a91909.jpg",
    },
    {
      name: "غرور و تعصب",
      number: 23,
      amount: "42,000",
      due: "1400/08/03",
      photo:"https://cdn.fidibo.com/phoenixpub/content/fc3c0287-cd7b-43a8-8162-7b642c138512/f44f6369-837a-4b6f-9b64-a1459a43a490.jpg",
    },
    {
      name: "فرصت از دست رفته",
      number: 24,
      amount: "75,000",
      due: "1399/01/12",
      photo:"https://shirazehstore.com/images/thumbs/012/0127692_-_550.jpeg",
    },
    {
      name: "قلعه حیوانات",
      number: 25,
      amount: "52,000",
      due: "1401/02/14",
      photo:"https://www.iranketab.ir/Images/ProductImages/Thumbs/19c923cc22274a00871dcddd79afb3df.jpg",
    },
    {
      name: "1984",
      number: 26,
      amount: "52,000",
      due: "1401/02/14",
      photo:"https://bookland.ir/Images/Products/Book_12135_lg_0.jpg",
    },
  ];
  
  export const getBooks = () => {
    return books;
  };
  export const getBook =(number) =>{
    return books.find(book => book.number === number)
  };
  export const deleteBook = (number) => {
    books = books.filter(
      (book) => book.number !== number,
    );
  };

