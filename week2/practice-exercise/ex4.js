/**
 * Keep track of which books you read and which books you want to read!
 *  
 * Follow the steps:
 *  Declare a variable that holds an array of 3 objects, where each object describes a book and has properties
 *  for the title (string), author (string), and alreadyRead (boolean indicating if you read it yet).
 *  Loop through the array of books.
 *  For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
 *  Create a conditional statement to change the log depending on whether you read it yet or not. If you read 
 * it, log a string like You already read "The Hobbit" right after the log of the book details
 *  If you haven't read it log a string like You still need to read "The Lord of the Rings"
 */
let books = [{
    title: 'First Born',
    author: 'Arthur C.Clarke',
    alreadyRead: false,
}, {
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    alreadyRead: true,
}, {
    title: 'Homo Deus',
    author: 'Yuval Noah Harari',
    alreadyRead: true,
}]
for (let i = 0; i < 3; i++) {
    console.log('The ' + books[i].title + ' by ' + books[i].author);
    if (books[i].alreadyRead) {
        console.log('You already read ' + books[i].title)
    } else {
        console.log('You still need to read ' + books[i].title)
    }
    console.log(' ')
}