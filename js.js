const books = [
    { title: '1984', author: 'George Orwell', year: 1949 },
    { title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
];

function getBooksByAuthor(author) {
    return books.filter(book => book.author === author);
}

console.log(getBooksByAuthor('George Orwell'));