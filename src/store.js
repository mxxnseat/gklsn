import '../public/scss/main.scss';
import List from "./list";

const list = new List();
const cartDOM = document.querySelector(".cart");
cartDOM.addEventListener("click",()=>{
    console.log("click cart");
    document.querySelector(".cart-list").classList.toggle("visible");
});