// Task 5
let orders = [
    { id: 101, customer: "Alice", total: 300},
    { id: 102, customer: "Bob", total: 450},
    { id:103, customer: "Charlie", total: 200}
];
function findOrder(orders, orderId) {
    return orders.find(order=> order.id === orderId)
}
console.log(findOrder(orders, 102));

// task 6
let inventory = {
    items: [],
    addItem(name,quantity) {
        this.items.push({name, quantity});
    },
    removeLatestItem(){
        this.items.pop();
    },
    removeFirstItem(){
        this.items.shift();
    },
};
inventory.addItem("monitor", 5);
inventory.addItem("keyboard", 10);
inventory.addItem("Mouse", 3);
console.log(JSON.stringify(inventory.items));
inventory.removeFirstItem();
console.log(JSON.stringify(inventory.items));
inventory.removeFirstItem();
console.log(JSON.stringify(inventory.items));