// Part 1: Add Categories function

const addCategoryTopBtn = document.querySelector ('#addCategoryTopBtn')

const addCategoryCardBtn = document.querySelector ('#addCategoryCardBtn')

const categoryModal = document.querySelector ('#categoryModal')

const categoryForm = document.querySelector ('#categoryForm')

const categoryName = document.querySelector ('#categoryName')

const cancelCategory = document.querySelector('#cancelCategory')

const categoryCards = document.querySelector('#categoryCards')

const renderedCategories = document.querySelector('#renderedCategories')

const itemModal = document.querySelector ('#itemModal')

const itemForm = document.querySelector ('#itemForm')

const itemName = document.querySelector ('#itemName')

const cancelItem = document.querySelector ('#cancelItem')

let categories = [];

let selectedCategory = null;

function openCategoryModal() {

    categoryModal.showModal();

}

addCategoryTopBtn.addEventListener("click", openCategoryModal);

addCategoryCardBtn.addEventListener("click", openCategoryModal);

cancelCategory.addEventListener("click", function() {

    categoryModal.close();

});

categoryForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const enteredCategoryName = categoryName.value.trim();

    if (enteredCategoryName === "") {

        return;
    }

    const newCategory = {

    name: enteredCategoryName,

    items: []

    };

    categories.push(newCategory); 

    renderCategories();

    console.log(categories)

    categoryForm.reset();

    categoryModal.close();


});

function renderCategories() {

    renderedCategories.innerHTML = "";

    categories.forEach(function(category) {

        const categoryCard = document.createElement("div");

        categoryCard.classList.add("category-card");

        const categoryTitle = document.createElement("h2");

        categoryTitle.textContent = category.name;

        const addItemButton = document.createElement('button')

        addItemButton.textContent="Add Item";

        addItemButton.addEventListener("click", function () {

            selectedCategory = category;
            itemModal.showModal();
 });

categoryCard.appendChild(categoryTitle);
categoryCard.appendChild(addItemButton);
renderedCategories.appendChild(categoryCard);

 });

}

itemForm.addEventListener("submit", function (event)

    {EventTarget.preventDefault();

    });

        

// Part 2: Logout functionality

import { initializeApp } from
"https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";

import {
    getAuth,
    onAuthStateChanged,
    signOut
} from
"https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyAUiAsV7mLbwgAedq6KPafjLOwrNYFKyYw",
    authDomain: "jareljaz-house.firebaseapp.com",
    projectId: "jareljaz-house",
    storageBucket: "jareljaz-house.firebasestorage.app",
    messagingSenderId: "127422481122",
    appId: "1:127422481122:web:1bd6dcbdeddc1a21b954bb",
    measurementId: "G-4ZHJCZWS1T"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


onAuthStateChanged(auth, function(user) {

    if (!user) {

        window.location.href = "index.html";

    }

});

const logoutButton =
    document.getElementById("logout-button");


logoutButton.addEventListener("click", async function() {

    try {

        await signOut(auth);

        window.location.href = "index.html";

    } catch (error) {

        console.error("Logout failed:", error);

    }

});

const header = document.querySelector('.main-header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 1) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});