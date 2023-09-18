// ECMASCIRPTS özellikleri
// let,const keyword (değişken tanımlamak için kullanırız)

var a = 5;

if(true){
  // var a = 6; 
  const a = 6;
  let b = 8;
  b = 9;
  // a = 7;
  // let a = 6;
  console.log('b-a', a);

  // literal object type
  const obj = {id:1,name:'ali'};
  obj.id = 3;
  console.log('obj.id', obj);

  // obje tipi ile çalışırken alt satırda farklı bir referance verilemez.
  // obj = {id:2,name:'can'}; 

  console.log('obj type', typeof(obj));
  console.log('b type', typeof(b));
  console.log('a type', typeof(a));
  console.log('dizi type', typeof(['ali','can']));

  let dizi1 = [1,2,3,4];
  // referans hatası almamıza sebeb veren kod
  // let dizi2 = dizi1;
  // referansları koparıp yeni referans üzerinden çalışmak
  // let dizi2 = [];
  // Object.assign(dizi2,dizi1);
  // referansı başka bir referans olarak.
  // dizi2 = dizi1.slice(0,dizi1.length);

  // spread operatöri referans koparma.
  let dizi4 = [10,11,12];
  let dizi2 = [7,... dizi1, 6, ... dizi4];

  // let dizi2 = [... dizi1];
  // dizi2.push(6);

  // dizi2 = 5;

  console.log('dizi1', dizi1, dizi2);

  let dizi3 = [];
  dizi1.forEach(function (item) {
    dizi3.push(item);
  });

  dizi3.push(7);

  console.log('dizi1', dizi1);
  console.log('dizi3', dizi3);

  // spread operatörü referance type için kullanılır dizi objelerde kullanabiliriz.

  const ob2 = {id:2, name:'test'};
  const ob3 = {surname:'can',... ob2, age:16};
  console.log('ob3',ob3)

  console.log('f', typeof(function a() {
    return 1;
  }))



  console.log('b-b', b);
}

// ECMASCRIPT 5
function Person(name) {
  _name = name; 
  function getName() {
    return _name;
  }
}

function Employee() {
  
}

Employee.prototype = Person;

var e = new Employee();
console.log('e',e);


Person.prototype.getSurname = function (surname) {
  return surname;
}

var p = new Person('ali');

Object.defineProperty(p, 'age', {
  value: 16,
  writable: false, // setter yok
});


// p.age = 21;
console.log('age',p.age); 
console.log('surname',p.getSurname('can'));
console.log('p', typeof(p), p);



console.log('a', a);

// ES 6 Classes

class Animal {

   #name; // private değişkenler # ile tanımlanıyor
    constructor(name){
      this.#name = name;
    }

    set Name(value) {
      this.#name = value;
    }

    get Name(){
      return this.#name;
    }

    Breath(){

    }
}

// extends keyword ile kalıtım yapılyor.
// Not: Interface ve Generic Class yapısı javascript ECMAScript de yok.
class Bird extends Animal {
  constructor() {
    super('a')
  }

  Speak(){
    super.Breath();
  }
}

const animal = new Animal('bird');
// animal.#name;
animal.Name = "Kuş";
console.log('animal',animal);

const bird = new Bird();
bird.Speak();
bird.Breath();
