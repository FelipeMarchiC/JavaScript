var highest_number = 1;
var count = 0; 

var number = prompt("Seu número inicial?", 3);
if(number != null) {
    alert("Abra o console!");
}

while (number != 1 && number > 0) {
    if(number % 2 == 1) {
        number = number * 3 + 1;
    } else {
        number = number / 2
    }

    if(number > highest_number) {
        highest_number = number;
    }
    console.log(number);
    count++
}

console.log("Maior número foi: ", highest_number);
console.log("Número de loops foi: ", count)