const topics = document.querySelectorAll('.topic');

topics.forEach(function (elem) {

    elem.addEventListener('click', function (event) {

        if (event.target.closest('.topic__btn')) {

            const img = elem.querySelector('.topic__icon');

            const content = elem.querySelector('.topic__content');

            if (elem.classList.toggle('topic--open')) {

                img.src = './img/icons/btn-minus.svg';

                content.style.maxHeight = content.scrollHeight + 'px';

            } else {

                img.src = './img/icons/btn-plus.svg';

                content.style.maxHeight = '0px';

            }

        }
    });
});