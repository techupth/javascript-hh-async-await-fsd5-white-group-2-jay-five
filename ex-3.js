//Exercise #3
let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};

let getJohnOrders = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve([
          {
            orderId: "001",
            items: ["apple", "banana"],
          },
          {
            orderId: "002",
            items: ["orange", "itim"],
          },
        ]),
      1500
    );
  });
};

// Start coding here
//แบบfunction แยกข้างนอก
// const showJohnProfile = (data) => {
//   console.log(data);
// };
// const showJohnOrders = (data) => {
//   console.log(data);
// };
// //ถ้าจะ chain ต้องเรียกตัวGetอีกที ไม่ต้องมี ()หลังตัว promise function
// getJohnProfile().then(showJohnProfile).then(getJohnOrders).then(showJohnOrders);
// แบบfunction แบบarrow
getJohnProfile().then((data)=>console.log(data)).then(getJohnOrders).then((data)=>console.log(data))
