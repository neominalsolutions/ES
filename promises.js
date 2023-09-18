// Asenkron Programlama
// ECMASCRIPT 6 ile birlikte geçildi.
// Promises (Söz)
// HTTP Request HTTP Response hepsi promise olarak çalışıyor.
// Resolve => Sözün tutulması (Success)
// Reject => Sözün tutulamaması (Error)
// (resolve,reject)
// FETCH API, Axios
// XHR


function GetResult(ShowMessage) {
  console.log('g-r');
  const msg = "mesaj";
  ShowMessage(msg, error);


}

function ShowMessage(msg, error) {
  console.log('message', msg)
  error();
}

function error() {
  console.log('error')
}

GetResult(ShowMessage);
// declaration kısmı



const promise = new Promise((resolve, reject) => {
  // kaynak kod blok
  const a = 1
  if (a == 1) {
    resolve(a)
  }
  else {
    reject('hata')
  }
});

// 100ms beklet
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(promise);
  }, 100)
})
  ;

const promise3 = new Promise((resolve, reject) => {
  resolve(promise2)
});

// promise zinciri

let result = {}

promise2
  .then(p1 => {
    console.log('p2', p1);
    result.p1 = p1;
  })
  .then(p2 => {
    console.log('p1', p2);
    result.p2 = p2;

    console.log('result', result);
  })
  .then(p3 => {
    console.log('p3', p3);
    result.p3 = p3;
  })
  .catch(err => {
    console.log('err', err);
  })




const k = 10;
console.log('k', k);
const z = 20;
console.log('z', z);

promise2.then(response1 => {
  console.log('promise2', response1);



  promise
    .then(response2 => { // resolve durumunda callback function // try
      console.log('promise', response2);


      const vm = {
        p1: response1,
        p2: response2
      }

      console.log('vm', vm);

      const r = response1;
      console.log('r', response2);

    })
    .catch(err => { // reject durumunda callback yapılan function // catch
      console.log('e', err);
    }).finally(() => { // finally
      // hata olsun olmasın çalışacak kod blogu
    });

}).catch(err => {
  console.log('p2-error', err)
});















// promise.then(function(response) {

// }).catch(function(err) { // reject durumunda callback yapılan function

// })