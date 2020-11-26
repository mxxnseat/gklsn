import goodItem from "./item";
class List{
    constructor()
    {
        this.goodList = [];

        this.fetchGoods();
    }

    fetchGoods()
    {
        return fetch("../db.json").then(data=>data.json()).then(data=>{
            this.goodList.push(...data.map(i=>new goodItem(i)));
        });
    }
}
export default List;