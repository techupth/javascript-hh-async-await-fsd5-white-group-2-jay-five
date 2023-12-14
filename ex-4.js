// Exercise #4
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
// Start coding here
// แบบ  function ปกติ
// async function asyncShowJohnProfile() {
//   const JohnProfile = await getJohnProfile();
//   console.log(JohnProfile);
// }
//แบบarrow function 
const asyncShowJohnProfile = async () => {
  const JohnProfileInfo = await getJohnProfile()
  console.log(JohnProfileInfo)
};
asyncShowJohnProfile();
