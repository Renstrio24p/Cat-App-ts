var f=Object.defineProperty;var h=t=>f(t,"__esModule",{value:!0});var g=(t,e)=>()=>(e||(e={exports:{}},t(e.exports,e)),e.exports),L=(t,e)=>{for(var i in e)f(t,i,{get:e[i],enumerable:!0})};var E=g(q=>{h(q);L(q,{default:()=>y});async function y(t){t.innerHTML=`
        <div>
            <div id='TS'></div>
        </div>
    `,u()}});var M=g(A=>{h(A);L(A,{default:()=>v});var T=new Set;function v(){let t;do t=Math.random().toString(36).substring(2);while(T.has(t));return T.add(t),t}});import{initializeApp as B}from"https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";import{getDatabase as C,ref as b,push as k,onValue as j,remove as O}from"https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";var U={databaseURL:"https://playground-a071d-default-rtdb.asia-southeast1.firebasedatabase.app/"};function c(t){t.innerHTML=`
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
    `;let e=B(U),i=C(e),m=b(i,"shoppingList"),a=document.getElementById("input-field"),S=document.getElementById("add-button"),d=document.getElementById("shopping-list"),p=document.getElementById("error");S.addEventListener("click",function(){let s=a.value;s?(k(m,s.charAt(0).toUpperCase()+s.slice(1).toLowerCase()),w()):(p.style.display="block",p.innerText="Input shouldn't be empty",a.style.border="2px solid red",a.style.backgroundColor="#ffe1c7",setTimeout(()=>{p.style.display="none",a.style.border="none",a.style.backgroundColor="#fff"},1e3))}),j(m,function(s){if(s.exists()){let r=Object.entries(s.val());I();for(let o=0;o<r.length;o++){let n=r[o];D(n)}}else d.innerHTML="No items here... yet"});function I(){d.innerHTML=""}function w(){a.value=""}function D(s){let r=s[0],o=s[1],n=document.createElement("li");n.textContent=o.toString(),n.addEventListener("click",()=>{n.classList.add("remove-list"),setTimeout(()=>{let x=b(i,`shoppingList/${r}`);O(x),n.remove()},500)}),d.append(n)}}function u(){let t=document.querySelector("#TS");t&&c(t)}var P=async()=>(await Promise.resolve().then(()=>E())).default,R=async()=>(await Promise.resolve().then(()=>M())).default,H=document.querySelector("#app");Promise.all([P(),R()]).then(([t,e])=>{H.id=e(),t(H)});
//# sourceMappingURL=index.js.map
