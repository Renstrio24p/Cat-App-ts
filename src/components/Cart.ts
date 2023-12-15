import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
import { DatabaseSettings, DataSnapshot } from "./types/TypeOf"
import 'animate.css'

const appSettings: DatabaseSettings = {
    databaseURL : 'https://playground-a071d-default-rtdb.asia-southeast1.firebasedatabase.app/'
}

export default function Cart(DOM: HTMLDivElement) {

    DOM.innerHTML = (`
        <div class="container">
            <img src="images/cat.png" class='img'>
            <input type="text" id="input-field" class='input' placeholder="Milk">
            <button id="add-button">Add to cart</button>
            <ul id="shopping-list">
            </ul>
            <div class='error-div'>
                <p class='error' id='error'></p>
            </div>
        </div>
    `)

    const app = initializeApp(appSettings)
    const database = getDatabase(app)
    const shoppingListInDB = ref(database, "shoppingList")

    const inputFieldEl = document.getElementById("input-field") as HTMLInputElement
    const addButtonEl = document.getElementById("add-button") as HTMLButtonElement
    const shoppingListEl = document.getElementById("shopping-list") as HTMLUListElement
    const errorEl = document.getElementById('error') as HTMLParagraphElement

    addButtonEl!.addEventListener("click", function () {
        let inputValue = inputFieldEl.value

        if(inputValue){
            push(shoppingListInDB, inputValue.charAt(0).toUpperCase() + inputValue.slice(1).toLowerCase())
            clearInputFieldEl()
        } else {
            errorEl.style.display = 'block'
            errorEl.innerText = `Input shouldn't be empty`
            inputFieldEl.style.border = '2px solid red'
            inputFieldEl.style.backgroundColor = '#ffe1c7'
            
            setTimeout(()=>{
                errorEl.style.display = 'none'
                inputFieldEl.style.border = 'none'
                inputFieldEl.style.backgroundColor = '#fff'
            },1000)

        }

    })

    onValue(shoppingListInDB, function(snapshot: DataSnapshot) {
        
        if (snapshot.exists()) {
            let itemsArray = Object.entries(snapshot.val())
        
            clearShoppingListEl()
            
            for (let i = 0; i < itemsArray.length; i++) {
                let currentItem = itemsArray[i]                
                appendItemToShoppingListEl(currentItem as HTMLElement[])
            }    
        } else {
            shoppingListEl.innerHTML = "No items here... yet"
        }
        
        
    })

    function clearShoppingListEl() {
        shoppingListEl!.innerHTML = ""
    }

    function clearInputFieldEl() {
        inputFieldEl!.value = ""
    }

    function appendItemToShoppingListEl(item: HTMLElement[]) {
        let itemID = item[0];
        let itemValue = item[1];
    
        let newEl = document.createElement("li");
        newEl.textContent = itemValue.toString();
    
        newEl.addEventListener('click', () => {
            newEl.classList.add('remove-list');
    
            setTimeout(() => {
                let exactLocationOfItemInDB = ref(database, `shoppingList/${itemID}`);
                remove(exactLocationOfItemInDB);
    
                newEl.remove();
            }, 500);
    
        });
    
        shoppingListEl.append(newEl);
    }
    
    
}