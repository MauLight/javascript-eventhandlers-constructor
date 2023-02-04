
let title;
let author;
let pages;
let read;
let newBook;

function Books(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        console.log(
            title +
            " by " +
            author +
            ", " +
            pages +
            " pages, " +
            (read ? "already read" : "not read yet")
        );
    };
}

const titlehandler = (e) => {
    console.log(e.target.value);
    title = e.target.value;
    console.log(title);
};

const authorhandler = (e) => {
    console.log(e.target.value);
    author = e.target.value;
};

const pageshandler = (e) => {
    console.log(e.target.value);
    pages = e.target.value;
};

const getTitle = document.querySelector('.title');
getTitle.addEventListener('input', titlehandler);

const getAuthor = document.querySelector('.author');
getAuthor.addEventListener('input', authorhandler);

const getPages = document.querySelector('.pages');
getPages.addEventListener('input', pageshandler);

const handleClick = (myRadio) => {
    console.log(myRadio.value);
    read = myRadio.value;
};

const submitData = document.querySelector('.btn');
submitData.addEventListener('click', () => {
    newBook = new Books(title, author, pages, read);
    console.log(newBook.title);
});





