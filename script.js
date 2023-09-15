const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value) {
  txt += value +"&nbsp;";
}
console.log(txt); //innerHTML-ben pl. a html-kódok is működnek!
for(i=0; i<numbers.length; i++)
{
    document.getElementById(`sz${i+1}`).innerHTML += numbers[i];
}
