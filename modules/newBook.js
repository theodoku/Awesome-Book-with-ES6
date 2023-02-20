import Book from './bookClass.js';

const newBook = () => {
    const bookTitle = document.querySelector('#book-title');
    const bookAuthor = document.querySelector('#book-author');
    const errorMsg = document.querySelector('.error');
    const addBtn = document.querySelector('#add-book');

    // Add A New Book
    addBtn.addEventListener('click', (event) => {
        event.preventDefault();
        const title = bookTitle.value;
        const author = bookAuthor.value;
        const id = Date.now();
        if (!title && !author) {
            errorMsg.innerHTML = 'Please enter book details';
            errorMsg.classList.add('active');
        } else {
            errorMsg.classList.remove('active');
            const addNewBook = new Book(title, author, id);
            let books = localStorage.getItem('books');
            if (books === null) {
                books = [];
            } else {
                books = JSON.parse(books);
            }
            books.push(addNewBook);
            localStorage.setItem('books', JSON.stringify(books));
            bookTitle.value = '';
            bookAuthor.value = '';
            addNewBook.displayBooks(title, author, id);
        }
    });

    // On Page Load, Display Books From Local Storage.
    window.addEventListener('DOMContentLoaded', () => {
        const books = JSON.parse(localStorage.getItem('books'));
        if (books) {
            books.forEach((book) => {
            const theBook = new Book(book.title, book.author, book.id);
            theBook.displayBooks();
        });
      }
    });
};

export default newBook;