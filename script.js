let myLibrary=[
    {
        title:'Harry Potter',
        author: 'JK Rowling',
        pages: 274,
        read: false,
    },
    {
        title:'Twilight',
        author: 'Stepanie Meyers',
        pages: 274,
        read: true,
    },
    {
        title:'Harry Potter',
        author: 'JK Rowling',
        pages: 274,
        read: true,
    },
];

let ctn = document.querySelector('#libCtn');
let collectionCtn = document.querySelector('#collectionCtn');

const submitBtn = document.querySelector('#submitBtn');
submitBtn.addEventListener('click', addBookToLibrary);

const addBtn = document.querySelector('#addBtn');
addBtn.addEventListener('click', function (){
    ctn.style.display='block';
})

const closeBtn = document.querySelector('#close');
closeBtn.addEventListener('click', function(){
    ctn.style.display='none';
})

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(e) {
    let newBook;
    e.preventDefault();

    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').checked;


    newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);

    clear();
    render();

}

function clear (){
    ctn.style.display='none';
    document.querySelector('#book-form').reset();
}

function render(){

    collectionCtn.innerHTML = '';
    
    myLibrary.forEach(book => {
        let html='';
        const div = document.createElement('div');
        div.setAttribute('class', 'bookCtn');

        const cardTitle = document.createElement('div');
        cardTitle.setAttribute('class', 'cardTitle');
        cardTitle.innerHTML = book.title;

        const cardAuthor = document.createElement('div');
        cardAuthor.setAttribute('class', 'cardAuthor');
        cardAuthor.innerHTML = book.author;

        const cardPages = document.createElement('div');
        cardPages.setAttribute('class', 'cardPages');
        cardPages.innerHTML = book.pages;

        const removeBtn = document.createElement('button');
        removeBtn.setAttribute('class', 'removeBtn');
        removeBtn.innerText = 'Remove Book';

        const readBtn = document.createElement('button');
        

        // const notReadBtn = document.createElement('button');
        // notReadBtn.setAttribute('class', 'notReadBtn');
        // notReadBtn.innerText = 'Read';



        div.appendChild(cardTitle);
        div.appendChild(cardAuthor);
        div.appendChild(cardPages);
        div.appendChild(removeBtn);
        div.appendChild(readBtn);
        if(book.read){
            readBtn.setAttribute('class', 'readBtn');
            readBtn.innerText = 'Not Read';
        }
        else{
            readBtn.setAttribute('class', 'notReadBtn');
            readBtn.innerText = 'Read';
        }

        collectionCtn.appendChild(div);

        removeBtn.addEventListener('click', function() {
            const index = myLibrary.indexOf(book);
            myLibrary.splice(index, 1);
            render();
        })

        readBtn.addEventListener('click', function(){
            book.read = !book.read;
            render();
            console.log(book.read);
        })
    })
}


window.onload = (e) => {
    render ();
}

