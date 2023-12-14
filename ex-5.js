// Exercise #5
let getJohnProfile = () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};
// Start coding here
// แบบ function ปกติ
// async function asyncShowJohnProfile() {
//   try {
//     const JohnProfile = await getJohnProfile();
//     console.log(JohnProfile);
//   } catch (error) {
//     console.log(error);
//   }
// }
// แบบ arrow function
const asyncShowJohnProfile =async () => {
  try {
    const JohnProfileInfo = await getJohnProfile()
    console.log(JohnProfileInfo)
  }catch (error){
    console.log(error)
  }

}
asyncShowJohnProfile();
