'use strict'

let habbits = [];
const HABBIT_KEY = 'HABBIT_KEY';

/*  page  */

const page = {
    menu: document.querySelector('.menu__list')
}




/*  utils */
function loadData() {
    const habbitsString = localStorage.getItem(HABBIT_KEY);
    const habbitArray = JSON.parse(habbitsString);
    if (Array.isArray(habbitArray)) {
        habbits = habbitArray;
    }
}

function saveData () {
    localStorage.setItem(HABBIT_KEY, JSON.stringify(habbits));

}

/*  render */

function renderMenu(activeHabbitId){
    if (!activeHabbit) {
        return;
    }
    document.querySelector('.menu__list').innerHTML = '';
    for (const habbit of habbits) {
        const existed = document.querySelector(`[menu-habbit-id="${habbit.id}"]`)
        if (!existed) {
            const element = document.createElement('button');
            element.setAttribute('menu-habbit-id', habbit.id);
            element.classList.add('menu__item');
            element.innerHTML = `<img  src="images/${habbit.icon}.svg" alt="${habbit.name}">`
            if (activeHabbit.is === habbit.id) {
                element.classList.add('menu__item_active');
            }
            page.menu.appendChild(element);
            continue;
        }
        if (activeHabbit.is === habbit.id) {
            existed.classList.add('menu__item_active');
        } else {
            existed.classList.remove('menu__item_active')
        }

    }
}

function rerender(activeHabbitId) {
    const activeHabbit = habbits.find(habbit => habbit.id === activeHabbitId)
    renderMenu(activeHabbit);
}


(() => {
    loadData();
    rerender(habbits[0].id);
})();