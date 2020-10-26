///////////////////////////////////////////////////////////////////////   tabs

let crossoversTitle = document.querySelector('.title-3_crossovers');
let sedanTitle = document.querySelector('.title-3_sedan');
let crossTitle = document.querySelector('.title-3_cross');
let crossovers = document.querySelector('.crossovers');
let sedan = document.querySelector('.sedan');
let cross = document.querySelector('.cross');

crossoversTitle.onclick = function () {
    crossoversTitle.classList.add('active');
    crossovers.classList.add('active');
    sedanTitle.classList.remove('active');
    sedan.classList.remove('active');
    crossTitle.classList.remove('active');
    cross.classList.remove('active');
}
sedanTitle.onclick = function () {
    sedanTitle.classList.add('active');
    sedan.classList.add('active');
    crossTitle.classList.remove('active');
    cross.classList.remove('active');
    crossoversTitle.classList.remove('active');
    crossovers.classList.remove('active');
}
crossTitle.onclick = function () {
    crossTitle.classList.add('active');
    cross.classList.add('active');
    crossoversTitle.classList.remove('active');
    crossovers.classList.remove('active');
    sedanTitle.classList.remove('active');
    sedan.classList.remove('active');
}

//////////////////////////////////////////////////////////     modal

let offerOpen = document.querySelector('.btn_offer');
let closeModal = document.querySelector('.modal__close');
let modal = document.querySelector('.modal');
let fonModal = document.querySelector('.modal__fon');

offerOpen.onclick = function () {
    modal.classList.add('modal-open');
    document.body.classList.add('no-scroll');
}

closeModal.onclick = function () {
    modal.classList.remove('modal-open');
    document.body.classList.remove('no-scroll');
}

fonModal.onclick = function () {
    modal.classList.remove('modal-open');
    document.body.classList.remove('no-scroll');
}
