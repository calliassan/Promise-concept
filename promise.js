// *******Creating Promise********
// let mypromise = new Promise(function (resolve, reject) {
//   let success = true;
//   if (success) {
//     resolve("Data is loaded successfully");
//   } else {
//     reject("Data load failed");
//   }
// });

// console.log(mypromise);

// *******using promise********
// mypromise
//   .then(function (message) {
//     console.log(message);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

//   ********using promise******

// let promise = new Promise(function (resolve, reject) {
//   //   resolve("Yeah its success");
//   reject("Doomed");
// });
// promise
//   .then(function (successmessage) {
//     console.log(successmessage);
//   })
//   .catch(function (failuremessage) {
//     console.log(failuremessage);
//   });

// ****************Promise all*************

const blogdata = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("hello blog data");
  }, 2000);
});
const userdata = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("hello userdata");
  }, 1000);
});
const commentsdata = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hello comments");
  }, 500);
});
Promise.allSettled([userdata, blogdata, commentsdata])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

Promise.all([userdata, blogdata, commentsdata])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
