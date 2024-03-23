// Write your solution here!
 const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){

    cats.push(name);

    console.log(cats);
 }

 beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

   function destructivelyPrependCat(name){
    cats.unshift(name);
   }

   console.log(cats);

   beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function destructivelyRemoveLastCat() {
    cats.pop(name);
  }
    
  console.log(cats);

  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function  destructivelyRemoveFirstCat() {
    cats.shift(name);  
  }

  console.log(cats);

  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });


  function appendCat(name) {
    const newCats = cats.concat(name);
    return newCats;
}
const newCatsarray = appendCat("Broom");
console.log(newCatsArray); 
console.log(cats); 


function prependCat(name) {
    const newCats = [name, ...cats];
    return newCats;
}
const newCatsArray = prependCat("Broom");
console.log(newCatsArray); 
console.log(cats); 


function removeLastCat() {
    const newCats = cats.slice(0, -1);
    return newCats;
}
const newcatsArray = removeLastCat();
console.log(newCatsArray); 
console.log(cats);


function removeFirstCat() {
    const newCats = cats.slice(1);
    return newCats;
}
const newCatArray = removeFirstCat();
console.log(newCatsArray); 
console.log(cats); 