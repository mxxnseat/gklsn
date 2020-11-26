import removeButton from "./buttonRemove";
class cartItem{
    constructor(title)
    {
        this.title = title;
    }
    render(clb)
    {
        

        const item = document.createElement("div");

        item.classList.add("cart-item");
        item.innerHTML = `
                    <div class="cart-item-title">${this.title}</div>
                `;
        item.appendChild(new removeButton().render(clb));
        return item;
    }
}
export default cartItem;