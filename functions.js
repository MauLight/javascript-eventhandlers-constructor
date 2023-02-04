
const titlehandler = (e) => {
    console.log(e.target.value);
};

const title = document.querySelector('.title');
title.addEventListener('input', titlehandler);

const author = document.querySelector('.author');
author.addEventListener('input', titlehandler);

const pages = document.querySelector('.pages');
pages.addEventListener('input', titlehandler);

const handleClick = (myRadio) => {
    console.log(myRadio.value);
};