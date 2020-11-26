class ButtonRemove{
    render(clb)
    {
        
        const button = document.createElement("button");

        button.classList.add("cart-delete-item-button");
        button.innerText = "remove";

        button.addEventListener("click", clb);
        return button;
    }
}
export default ButtonRemove;