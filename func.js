function Topla(a,b) {

  // throw Error('Hata');

  // === tip eşitliği
  if(a == 5 && a=== 5){

  }

  if(typeof(a) === "string"){
    console.log('a', a);

    if(isNaN(a)){
      a = 0;
    }

    a = parseInt(a);
  }

  if(typeof(b) === "string"){
    console.log('b', b);

    if(isNaN(b)){
      b = 0;
    }

    b = parseInt(b);
  }

  if(b === undefined){
    b = 0;
  }

  console.log('b', b);

  return a+b;
}

function MesajGoster(mesaj) {
  alert(mesaj)
}

const r1 = Topla(6);
console.log('r1',r1);

// ECMASCRIPT 6 ve sonrası
const sum = (a,b) => a+b;

const sum1 = (a = 1,b = 2) => {
  // kod blogu
  return a+b;
}

// rest operator kullanımı params string[]
// bir fonksiyona istenilen sayıda parametre geçebiliyoruz.

const carpim = (... values) => {
  let carpimSonuc = 1;
  for (const value of values) {
    carpimSonuc*=value;
  }

  return carpimSonuc;
}

let s = carpim(1,'2',3,4,6,13);
console.log('s',s);



const r2 = sum(1,2);
console.log('r2', r2);
const r3 = sum1();
console.log('r3', r3);

// forin kullanımı

const person = {id:1,name:'test', age:15};

for (const key in person) {
  // person için key prop var mı
  if (Object.hasOwnProperty.call(person, key)) {
    const value = person[key];
    console.log('value', value, key);
  }
}

// Array Functions
// map kullanımı
// lamda expression desteği

const persons = [{id:1,name:'ali'},{id:2,name:'can'}, {id:3, name:'canan'}];

// 1.yöntem
// yeni bir referans döner
const p2 = persons.map(item => {
   return  {... item, age:10};
});

console.log('persons', persons);
console.log('p2', p2);

// nesnenin direkt referansı ile çalışır. for Of yapısından bir farklı yok
persons.forEach(item => {
  // aksiyon yapılır return etilmez
  item.key = 'key';
});

console.log('p3', persons);

// includes case sentive çalışır
const filteredResult1 = persons.filter(x=> x.name.includes('CAN'));

// search işlemlerinde kullanalım
const filteredResult2 = persons.filter(x=> new RegExp('CAN','i').test(x.name));

const index = persons.findIndex(x=> x.name == 'ali');

console.log('f1', filteredResult1);
console.log('f2', filteredResult2);
console.log('index', persons[index]);

// ECMASCRIPT 5 array remove
const removedArray = persons.splice(0,1);
console.log('removed', removedArray)
console.log('silindikten sonra', persons);

// yeni versiyonda silme
// id 1 olan kaydı silmek istersek
let persons2 =  [... persons.filter(x=> x.id!=3)];

console.log('persons2', persons2);

