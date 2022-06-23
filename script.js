let myLibrary = [];

function Book(name, author){
    this.name = name
    this.author = author
}

function addBookToLibrary(Book){
    myLibrary.push(Book);
}

function printLibrary(Library){
    Library.forEach(function (index){
       console.log(index.name + index.author);
    });
}