// Exercise #6
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
// แบบ function ปกติ
// async function asyncShowJohn (){
//   try{
//   const JohnProfileInfo = await getJohnProfile()
//   console.log(JohnProfileInfo)
//   const JohnOrdersInfo = await getJohnOrders()
//   console.log(JohnOrdersInfo)
//   }catch(error){
//     console.log(error)
//   }
// }
// แบบ arrow function
const asyncShowJohn = async() => {
  try{
    const showJohnProfile = await getJohnProfile()
    console.log(showJohnProfile)
    const showJohnOrders = await getJohnOrders()
    console.log(showJohnOrders)
  }catch (error){
    console.log(error)
  }
}
asyncShowJohn()
