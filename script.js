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
       console.log(index.name + ' ' + index.author);
    });
}

let sub = document.querySelector('#button');
sub.addEventListener('click', function (){
    const bName = document.querySelector('#bName').value;
    const aName = document.querySelector('#aName').value;
    // console.log(bName + aName);
    let book = new Book(bName, aName);
    addBookToLibrary(book);
    // console.log('this is working :>')
    printLibrary(myLibrary);
});


