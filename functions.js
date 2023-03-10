
let title;
let author;
let pages;
let read;
let newBook;
let bookArr = [{
    title: 'The Silmarillion',
    author: 'JJR. Tolkien',
    pages: 300,
    read: false
}];

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
    //console.log(e.target.value);
    title = e.target.value;
    //console.log(title);
};

const authorhandler = (e) => {
    //console.log(e.target.value);
    author = e.target.value;
};

const pageshandler = (e) => {
    //console.log(e.target.value);
    pages = e.target.value;
};

const getTitle = document.querySelector('.title');
getTitle.addEventListener('input', titlehandler);

const getAuthor = document.querySelector('.author');
getAuthor.addEventListener('input', authorhandler);

const getPages = document.querySelector('.pages');
getPages.addEventListener('input', pageshandler);

const handleClick = (myRadio) => {
    //console.log(myRadio.value);
    read = myRadio.value;
};

function submitData(e) {
    //e.stopImmediatePropagation();
    if (title != undefined && author != undefined && pages != undefined && read != undefined) {
        newBook = new Books(title, author, pages, read);
        console.log(newBook.title);
        console.log(newBook.author);
        console.log(newBook.pages);
        console.log(newBook.read);
        getTitle.value = '';
        getAuthor.value = '';
        getPages.value = '';
        bookArr.push(newBook);
        console.log(bookArr);
    }
    else {
        return 0;
    }

};

function changeDisplay(e) {
    console.log('Hey!')
    document.querySelector(".form-group").style.display = "inline";

};

function deleteFunction() {
    const buttons = document.querySelectorAll('[name=delete]');
    function buttonPressed(e) {
        console.log(e.target.id);  // Get ID of Clicked Element
    }

    for (let button of buttons) {
        console.log(button.name);
        button.addEventListener("click", buttonPressed);
    }

    buttonPressed();

}

function sortArr() {
    let container = document.querySelector('.book-list')
    let ul = document.createElement('ul');
    ul.setAttribute('class', 'list-group');

    for (let i = 0; i < bookArr.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = bookArr[i].title +
            " by " +
            bookArr[i].author +
            ", " +
            bookArr[i].pages +
            " pages, " +
            (bookArr[i].read ? "already read" : "not read yet");
        li.setAttribute("class", 'list-group-item');
        li.setAttribute("name", bookArr[i].title);
        li.setAttribute("id", bookArr[i].title);

        let button = document.createElement('button');
        button.setAttribute('class', 'btn btn-outline-dark rounded-0 mx-3');
        button.setAttribute('id', bookArr[i].title);
        button.setAttribute("onclick", "reply_click(this.id)")
        button.setAttribute("name", "delete")
        button.innerHTML = "Delete";

        li.appendChild(button);
        ul.appendChild(li);
        container.appendChild(ul);
    }
}

function reply_click(id) {
    console.log(bookArr);
    console.log(id);
    const elems = document.getElementById(id);
    elems.remove();
}