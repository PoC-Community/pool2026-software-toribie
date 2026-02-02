let CookiesEaten = 0;

document.getElementById('click-me').addEventListener('click', () => {
    console.log(`Button clicked!`);
    if (CookiesEaten = 0) {
    alert("You haven't noticed it yet, but the cookie is already in your stomach.");
    } else if (CookiesEaten < 4){
        alert("Wow you are quite hungry!! (o^▽^o)");
    } else {
        alert("How hungry are you... (；￣Д￣)");
    }
    CookiesEaten += 1;
});

// Step 2: Jack, remember the basics of JAVASCRIPT
function basicSum(a, b)
{
    return a + b;
}

function greet(name, age)
{
    const string = `Hello! My name is ${name} and I am ${age} years-old.`;
    return string;
}

function combine_arrays(first, second)
{
    let result = [];

    for (let i = 0; i < first.length; i++) {
        result.push(first[i]);
    }
    for (let i = 0; i < second.length; i++) {
        result.push(second[i]);
    }
    return result;
}

const number = basicSum(10, 5);
let string = greet("John", number);
string += " I love eating pasta!";

const first = ["Haru Urara", "Mejiro McQueen", 'Aston Macchan'];
const second = ["Charles Leclerc", "Rice Shower", "Agnes Digital", "F-15C Eagle"];

const final = combine_arrays(first, second);
/*
final.forEach(function(entry) {
  console.log(entry);
});
*/
console.log(final);
console.log(string);

