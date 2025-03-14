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

// task 7
let employees = [
    {name: "alice", position: "developer", salary: 70000},
    {name: "bob", position: "Designer", salary: 60000},
    {name: "charlie", postion: "Manager", salary: 90000}
];
function findEmployee(employees, name) {
    return employees.find(employee => employee.name === name);
}
console.log(findEmployee(employees, `bob`));

// task 8
let orders1 = [{ id: 1, customer: "alice" }, { id: 2, customer: "bob"}];
let orders2 = [{ id: 3, customer: "charlie" }, { id: 4, customer: "David"}];

function mergeOrders(orderA, orderB) {
    return [...orderA, ...orderB];
}
console.log(mergeOrders(orders1, orders2));