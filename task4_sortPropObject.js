/*ЗАДАЧА 4*/

let arrPeople = [ { name: "Steve", age: 22 },{ name: "Max", age: 12 }, { name: "Stephanie", age: 32 }];
let sortMyArray = (arrPeople ) => {
  arrPeople.sort((first, second) => {
      if (first.age > second.age) { 
          return 1;  
      } else {
          return -1;
      }
  });           
}

sortMyArray(arrPeople );
console.log(JSON.stringify(arrPeople ));
