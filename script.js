class Smoothie {
    constructor(name, size, fruits, extras) {
        this.name = name;
        this.size = size;
        this.fruits = fruits;
        this.extras = extras;
    }
}

document.getElementById('smoothie-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let size = document.getElementById('size').value;
    let fruits = Array.from(document.querySelectorAll('input[name="fruits"]:checked'), input => input.value);
    let extras = Array.from(document.querySelectorAll('input[name="extras"]:checked'), input => input.value);
    
    let smoothie = new Smoothie(name, size, fruits, extras);

    document.getElementById('order-output').innerHTML = `
        <p>Name: ${smoothie.name}</p>
        <p>Size: ${smoothie.size}</p>
        <p>Fruits: ${smoothie.fruits.join(', ')}</p>
        <p>Extras: ${smoothie.extras.join(', ')}</p>
    `;
});
