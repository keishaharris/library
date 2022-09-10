let myLibrary=[
    {
        title:'Harry POtter',
        author: 'JK ROwling',
        pages: 274
    },
    {
        title:'Harry POtter',
        author: 'JK ROwling',
        pages: 274
    },
    {
        title:'Harry POtter',
        author: 'JK ROwling',
        pages: 274
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

function Book(title, author, pages ){
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(e) {
    let newBook;
    e.preventDefault();

    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;

    newBook = new Book(title, author, pages);
    myLibrary.push(newBook);

    ctn.style.display='none';
    
    render();

}

function render(){

    
    
    myLibrary.forEach(book => {
        let html='';
        const div = document.createElement('div');
        div.classList.add('bookCtn');

        html += book.title + '<br>' + book.author + '<br>' + book.pages;
        div.innerHTML += html;

        // document.body.appendChild(div);
        collectionCtn.appendChild(div);

        console.log(book.title);
        console.log(book.author);
        console.log(book.pages);

    })
}


