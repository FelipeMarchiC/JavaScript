var fibonacci = 0;
var fibonacci2 = 1;
var fibonacci3 = 1;

var count = prompt("Quantas nºs do Fibonacci quer ver?", 1);
if(count != null) {
    alert("Abra o console!")
}
while (count > 0) {
    console.log(fibonacci);
    fibonacci = fibonacci2
    fibonacci2 = fibonacci3
    fibonacci3 = fibonacci + fibonacci2 
    count--;
}
