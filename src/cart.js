import cartItem from "./cartItem";

class Cart {
    constructor() {
        this.cartInstance = [];
    }

    add(title, price) {
        const index = this.cartInstance.findIndex(item => {
            return item.title == title
        }) || 0;

        if (index != -1) {
            this.cartInstance[index].count++;
        } else {
            this.cartInstance.push({ title, price, count: 1 });
            
        }
        this.render();
        console.log(this.cartInstance);
    }
    remove(index){
        console.log(`remove ${index}`);
        this.cartInstance.splice(index,1);

        console.log(this.cartInstance);
        this.render();
    }
    render() {
        document.querySelector(".cart-list").remove();
        const cartList = document.createElement("div");
        cartList.classList.add("cart-list");
        document.querySelector(".cart").append(cartList);
        const count = document.querySelector(".cart-count");
        const price = document.querySelector(".cart-price");

        count.innerText = this.cartInstance.length;
        price.innerText = this.cartInstance.reduce((acc, current) => {
            return acc + current.price;
        }, 0) + '$';

        
        this.cartInstance.forEach((item, index)=>{
            document.querySelector(".cart-list").appendChild(new cartItem(item.title).render(()=>this.remove(index)));
        });
    }
}
export default Cart;