const inputSearch = document.querySelector('.header__search');
const inputBtnClear = document.querySelector('.btn__clear');
const onClearClick = (event) => {
    event.preventDefault();
    inputSearch.value = "";
}
    
inputBtnClear.addEventListener('click', onClearClick);

const filterLink = document.querySelectorAll('.filter__list-area__list__link');
const onListClick = event => {
    console.log('Pablo');
    event.preventDefault();
    let childList = event.target.parentNode.querySelector('ul');
    childList.classList.toggle('closed');
    childList.classList.toggle('opened');
}

filterLink.addEventListener('click', onListClick);
