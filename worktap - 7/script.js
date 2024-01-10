let openSelect = document.querySelector('.main_left > div:last-of-type');
let openInfo = document.querySelector('.openInfo');
let infoIsOpen = false;

openSelect.onclick = () => {
    if (!infoIsOpen) {
        openInfo.style.display = 'flex';
        openSelect.style.borderRadius = '20px 20px 0px 0px';
        infoIsOpen = true;
    }
    else if (infoIsOpen) {
        openInfo.style.display = 'none';
        openSelect.style.borderRadius = '20px';
        infoIsOpen = false;
    }
}

let fastSearch = document.querySelector('.fastSearch');
let fastSearch_block = document.querySelector('.fastSearch_block');
let closeFS = document.querySelector('.fastSearch_block > h2');

fastSearch.onclick = () => {
    fastSearch_block.style.display = 'flex';
}

closeFS.onclick = () => {
    fastSearch_block.style.display = 'none';

}