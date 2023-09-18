

// const wrapper = new Promise((resolve,reject) => {

function init() {

  const response = {};

  function Promise4() {
    return new Promise(function (resolve, reject) {
      response.r4 = 45;
      resolve(response);
    })
  }

  const promise1 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
      response.r1 = 30;
      resolve(response);
    }, 1000);
  });

  // 100ms beklet
  const promise2 = () => new Promise((resolve, reject) => {

    setTimeout(() => {
      response.r2 = 15;
      resolve(response);
    }, 100)
  });

  const promise3 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
      response.r3 = 5;
      // reject('hata');
      resolve(response);
    }, 500);
  });


  return Promise4().then(promise1).then(promise2).then(promise3);
}


// wrapper.then(response => {
//   console.log('res', response);
// });

init().then(response => {
  console.log('response', response);
}).catch(err => {
  console.log('err', err);
});

// Promise.all
// Bütün tanımlı promise yapılarını tek bir kod blogunda çözümlemek için kullanılır

const p11 = Promise.resolve(11);
const p12 = Promise.reject('h');

const promises = Promise.all([p11, p12]);

promises.then(result => {
  console.log('p-all', result);
}).catch(err => {
  console.log(err);
}).finally(() => {
  console.log('hata var yada yok önemli değil biritilecek işlemler')
})

// EC7 ile

const fn = async () => {

  try {

    const j = 45;
    console.log('j', j);
    const p1 = Promise.resolve(5);
    const p2 = Promise.resolve(10);
    // herhangi bir kod blogunda hata olursa hatayı çözer
    const p3 = Promise.resolve(15);

    r1 = await p1; // beklet (promise resolve yada reject eden await keyword kullanımıdır.)
    r2 = await p2;
    r3 = await p3;

    console.log('r1', r1);
    console.log('r2', r2);
    console.log('r3', r3);

  } catch (error) {
    console.log('error', error);
  }

}


fn();



// promise1.then(r1 => {
//   console.log('r1',r1);
// }).then(r2 => {
//   console.log('r2',r2);
// }).then(r3 => {
//   console.log('r3',r3);
// })


