let length;
let width;

function calculateArea() {
    length = Number.parseFloat(document.getElementById('length').value);
    width = Number.parseFloat(document.getElementById('width').value);

    let area = length * width;
    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}


function calculateTotal() {
    let grocery1Price = Number.parseFloat(document.getElementById('grocery1Input').value);
    let grocery2Price = Number.parseFloat(document.getElementById('grocery2Input').value);
    let grocery3Price = Number.parseFloat(document.getElementById('grocery3Input').value);

    const totalPrice = groceryTracker(grocery1Price, grocery2Price, grocery3Price);
    document.getElementById('resultTotalGroceryPrice').innerText = `The total grocery price is: ${totalPrice}`;
}

function groceryTracker(grocery1Price, grocery2Price, grocery3Price) {
    return grocery1Price + grocery2Price + grocery3Price;
}