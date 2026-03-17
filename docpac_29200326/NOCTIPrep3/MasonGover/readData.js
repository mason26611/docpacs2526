const fs = require("fs");

const fileContents = fs.readFileSync("purchases.csv", "utf-8");
const lines = fileContents.split("\n");
const headerContents = lines.shift().split(",")

let total = 0
const purchases = new Map()

for (const line of lines) {
    const order = {}
    const entries = line.split(",")
    for (let i = 0; i < entries.length; i++) {
        order[headerContents[i].trim()] = entries[i];
    }

    const customerName = order["Customer Name"]
    if (!purchases.get(customerName)) {
        purchases.set(customerName, []);
    }

    purchases.get(customerName).push(order)
}

for (const purchase of purchases) {
    console.log(purchase)
}