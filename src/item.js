import Button from "./button";

class Item{
    constructor({title, price, image})
    {
        this.title = title;
        this.price = price;
        this.image = image;
        this.render();
    }
    component()
    {
        return `
            <img class="book-image" src='${this.image}'>
            <div class="book-title">${this.title}</div>
            <div class="book-price">${this.price}$</div>
        `;
    }
    render(){
        const book = document.createElement("div");
        book.classList.add("book");

        book.innerHTML = this.component();
        book.appendChild(new Button("add", this.title, this.price).render());
        document.querySelector(".list").append(book);
    }
}
export default Item;