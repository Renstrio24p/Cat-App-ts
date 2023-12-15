import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

type DataSnapshot = {
    val: ()=> {}
}

export default function BookShop(DOM: HTMLDivElement) {
    DOM.innerHTML = (`
        <div>
            <h1>BookShop</h1>
            <ul id="books"></ul>
        </div>
    `);

    const appSettings = {
        databaseURL: "https://playground-a071d-default-rtdb.asia-southeast1.firebasedatabase.app/"
    };

    const app = initializeApp(appSettings);
    const database = getDatabase(app);
    const booksInDB = ref(database, "books");

    const booksEl = document.getElementById("books");

    onValue(booksInDB, function (snapshot: DataSnapshot) {
        let booksArray = Object.values(snapshot.val());
        clearBooksListEl()

        // Challenge: Write a for loop where you console log each book.
        for (let i = 0; i < booksArray.length; i++) {
            console.log(booksArray[i]);

            // Assuming you want to append each book to the DOM
            appendBookToBooksListEl(booksArray[i]);
        }
    });

    function clearBooksListEl() {
        if (booksEl) {
            booksEl.innerHTML = "";
        }
    }

    function appendBookToBooksListEl(bookValue: unknown) {
        if (booksEl) {
            booksEl.innerHTML += `<li>${bookValue}</li>`;
        }
    }
}
