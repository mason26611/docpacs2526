const fs = require("fs");

const fileContents = fs.readFileSync("purchases.csv", "utf-8");
const lines = fileContents.split("\n");
const headerContents = lines.shift().split(",")

let total = 0
const orders = new Map()

for (const line of lines) {
    const order = {}
    const entries = line.split(",")
    for (let i = 0; i < entries.length; i++) {
        order[headerContents[i].trim()] = entries[i].trim();
    }

    const orderId = order["Order ID"];
    orders.set(orderId, order)
}

for (const order of orders) {
    // todo
}