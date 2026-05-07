/*
   Question 1: The Flight Booking Data Cleaner
**Problem Statement:**
You are given a list of raw flight strings from a travel agency's database. The data is unformatted and needs to be standardized into objects for a front-end display.
**Requirements:**
1. **Parsing:** Iterate through an array of strings formatted as: "CITY_A-CITY_B:PRICE".
2. **Object Creation:** Convert each string into an object with three properties: from, to, and price.
3. **Validation & Coercion:**
  * The price must be explicitly converted to a **Number**.
  * If the price is not a valid number or is missing, set the price to 0.
4. **Filtering:** Create a new array containing only flights where the price is between **$100 and $500** (inclusive).
5. **Sorting:** Sort the final array of objects by price in **ascending order** (cheapest first).
6. **Return:** Return the final array as a **JSON string**.
**Input Data Example:**
```javascript
const rawFlights = [
 "London-Paris:150",
 "New York-Tokyo:invalid",
 "Dubai-Mumbai:450",
 "Berlin-Rome:95"
];
**Expected Output:**```json
[
  { "from": "London", "to": "Paris", "price": 150 },
  { "from": "Dubai", "to": "Mumbai", "price": 450 },
 { "from": "Berlin", "to": "Rome", "price": 95 }
]
*/

function cleanFlightData(rawFlights) {
    const cleanedFlights = rawFlights.map(flight => {
        const [route, priceStr] = flight.split(':');
        const [from, to] = route.split('-');
        let price = Number(priceStr);   
        if (isNaN(price)) {
            price = 0;
        }
        return { from, to, price };
    });
    return JSON.stringify(cleanedFlights);
}   

const rawFlights = [
    "London-Paris:150",
    "New York-Tokyo:invalid",
    "Dubai-Mumbai:450",
    "Berlin-Rome:95"
];

console.log(cleanFlightData(rawFlights));