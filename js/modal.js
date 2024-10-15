const openModalBtns = document.querySelectorAll('[data-action="modal"]');

const modal = document.querySelector('.modal');

const closeModalBtn = modal.querySelector('#closeModal');

const modalBody = modal.querySelector('.modal__body');


function modalOpen() {

    modal.classList.add('modal--open');

    document.body.classList.add('no-scroll');

}

function modalClose() {

    modal.classList.remove('modal--open');

    document.body.classList.remove('no-scroll');

}

openModalBtns.forEach(function (elem) {

    elem.addEventListener('click', modalOpen);

});


closeModalBtn.addEventListener('click', modalClose);

modal.addEventListener('click', modalClose);

modalBody.addEventListener('click', function (event) {

    event.stopPropagation();

});

document.addEventListener('keydown', function (event) {

    if (event.key == 'Escape') {

        modalClose();
    }
});