const reqTime = 2;
const successCode = 200;
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const dataCode = 200;
    if (dataCode === successCode) resolve(dataCode);
    else reject(dataCode);
  }, reqTime * 1000);
});

// console.log("Begin");
// myPromise
//   .then((res) => {
//     console.log(`Thanh cong sau ${reqTime}s. Code: ${res}`);
//     return 200;
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(`That bai sau ${reqTime}s. Code: ${err}`);
//   })
//   .finally(() => {
//     console.log("finish");
//   });

// const a = async () => {
//   console.log("Begin");
//   try {
//     const res = await myPromise;
//     console.log(`Thanh cong sau ${reqTime}s. Code: ${res}`);
//   } catch (err) {
//     console.error(`That bai sau ${reqTime}s. Code: ${err}`);
//   }
//   console.log("Finish");
// };
// a();

// const promise1 = new Promise((resolve, reject) => {
//   // Thực hiện một tác vụ bất đồng bộ
//   setTimeout(() => {
//     console.log("Propmise 1");
//     resolve(10);
//   }, 1000);
// });
// const promise2 = new Promise((resolve, reject) => {
//   // Thực hiện một tác vụ bất đồng bộ
//   setTimeout(() => {
//     console.log("Propmise 2");
//     resolve(20);
//   }, 2000);
// });

// All
// const promiseAll = Promise.all([promise1, promise2]);
// promiseAll
//   .then((values) => console.log(values))
//   .catch((error) => console.error(`Lỗi: ${error}`));

// All Selected
// const promiseAllSelected = Promise.allSettled([promise1, promise2]);
// promiseAllSelected
//   .then((values) => console.log(values))
//   .catch((error) => console.error(`Lỗi: ${error}`));

// Race
// const promiseRace = Promise.race([promise1, promise2]);
// promiseRace
//   .then((value) => console.log(value))
//   .catch((error) => console.error(`Lỗi: ${error}`));
