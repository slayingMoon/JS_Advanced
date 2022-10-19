class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if(this.books.length === this.capacity) {
            throw new Error("Not enough space in the collection.");
        }

        this.books.push({
            bookName,
            bookAuthor,
            payed: false
        });

        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }

    payBook(bookName) {
        const foundBook = this.books.find(b => b.bookName === bookName);

        if(!foundBook) {
            throw new Error(`${bookName} is not in the collection.`);
        }

        if(foundBook.payed) {
            throw new Error(`${bookName} has already been paid.`);
        }

        foundBook.payed = true;
        return `${bookName} has been successfully paid.`;
    }

    removeBook(bookName) {
        const foundBook = this.books.find(b => b.bookName === bookName);

        if(!foundBook) {
            throw new Error("The book, you're looking for, is not found.");
        }

        if(!foundBook.payed) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }

        this.books.splice(this.books.indexOf(foundBook), 1);
        return `${bookName} remove from the collection.`;
    }

    getStatistics(bookAuthor) {
        if(!bookAuthor) {
            let emptySlots = this.capacity - this.books.length;
            let output = `The book collection has ${emptySlots} empty spots left.\n`;
            let result = [];
            this.books.sort((a,b) => a.bookName.localeCompare(b.bookName)).forEach(b => {
                let paid = b.payed ? 'Has Paid' : 'Not Paid';
                result.push(`${b.bookName} == ${b.bookAuthor} - ${paid}.`);
            });

            output += result.join('\n');
            return output;
        }else {
            let authorBook = this.books.find(b => b.bookAuthor === bookAuthor);

            if(!authorBook) {
                throw new Error(`${bookAuthor} is not in the collection.`);
            }

            let paid = authorBook.payed ? 'Has Paid' : 'Not Paid';
            return `${authorBook.bookName} == ${bookAuthor} - ${paid}.`;
        }
    }
}

const library = new LibraryCollection(2)
console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
console.log(library.getStatistics('Miguel de Cervantes'));


// The book collection has 2 empty spots left.
// Don Quixote == Miguel de Cervantes - Has Paid.
// In Search of Lost Time == Marcel Proust - Not Paid.
// Ulysses == James Joyce - Not Paid.