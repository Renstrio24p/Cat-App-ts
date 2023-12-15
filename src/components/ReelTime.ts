import '../assets/css/reeltime.css'
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
import { DatabaseSettings } from './types/TypeOf'

export default function ReelTime(DOM: HTMLDivElement) {

    const appSettings: DatabaseSettings = {
        databaseURL: "https://playground-a071d-default-rtdb.asia-southeast1.firebasedatabase.app/"
    }

    const app = initializeApp(appSettings)
    const database = getDatabase(app)
    const moviesInDB = ref(database,"movies")

    DOM.innerHTML = (`
        <div class="container">
            <h1>Reel Time</h1>
            <div class="field">
                <input type="text" id="input-field" placeholder="Pulp Fiction">
                <button id="add-button">+</button>
            </div>
        </div>
    `)


    const inputFieldEl = document.getElementById("input-field") as HTMLInputElement | null
    const addButtonEl = document.getElementById("add-button") as HTMLButtonElement | null

    addButtonEl?.addEventListener("click", function () {
        let inputValue = inputFieldEl?.value
        push(moviesInDB, inputValue)
        console.log(`${inputValue} added to database`)
    })

    

}