import Cart from "./cart";


const cart = new Cart();
class Button{
    constructor(text, title, price){
        this.text = text;
        this.bookTitle = title;
        this.bookPrice = price;
    }
    render()
    {
        
        const button = document.createElement("button");

        button.classList.add("book-button");
        button.innerText = this.text;

        button.addEventListener("click", ()=>{cart.add(this.bookTitle, this.bookPrice)});
        return button;
    }
}
export default Button;