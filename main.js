const form = document.querySelector('form');
const input = document.querySelector('input');
const list = document.querySelector("ul");
const addBtn = document.querySelector(".show");
const itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];
window.onload = displayItems();

document.querySelector('.form1-input-close-btn').addEventListener('click', close);

function close() {
    const form1 = document.querySelector('.form1');
    form1.classList.add('close');
    setTimeout(() => {
        form1.style.display = 'none';
    }, 500);
}

function open() {
    addBtn.style.transform = 'scale(60%)';
    setTimeout(() => {
        addBtn.style.transform = 'scale(100%)';
    }, 300);
    const form1 = document.querySelector('.form1');
    form1.style.display = 'flex';
    setTimeout(() => {
        form1.classList.remove('close');
    }, 1);
}

function toDo() {
    const value = input.value;
    const newList = document.createElement("li");
    const deleteBtn = document.createElement("button");
    if (input.value === '') {
        setTimeout(() => {
            alert('The Value Is Empty');
        }, 10);
    }
    else {
        newList.textContent = value;
        deleteBtn.textContent = 'Delete';
        itemsArray.push(value);
        localStorage.setItem("items", JSON.stringify(itemsArray));
        location.reload();
    }
}

function displayItems() {
    let items = "";
    for (let i = 0; i<itemsArray.length; i++) {
        items += `<li>${itemsArray[i] } <button class="deleteBtn">Delete</button></li>`;
    }
    list.innerHTML = items;
}

function add() {
    form.addEventListener("submit", function handleFormSubmission(e) {
        e.preventDefault();
        toDo();
        form.removeEventListener("submit", handleFormSubmission);
        setTimeout(() => {
            form.addEventListener("submit", handleFormSubmission);
        }, 500);
        input.value = "";
    });
}

add();

addBtn.addEventListener("click", function() {
    open();
});

activateDeleteListeners()

function activateDeleteListeners() {
    let deleteBtn = document.querySelectorAll('.deleteBtn');
    deleteBtn.forEach((db, i) => {
        db.addEventListener("click", () => {
            deleteItem(i);
        });
    });
}

function deleteItem(i) {
    itemsArray.splice(i, 1);
    localStorage.setItem("items", JSON.stringify(itemsArray));
    location.reload();
}