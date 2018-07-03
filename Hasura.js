const clusterName = "bristle55";
const useHasuraApis = true;

// modify the configuration below only if userHasuraApis = false
const config = {
  "username":true, //set this field to true to enable username login
  "email":false, //set this field to true to enable email login
  "mobileOtp":false, // set this field to true to enable OTP login
  "googleArray": [ "<806450854208-eledgf6o20rjvgkbp4o1uu4u4al6vutv.apps.googleusercontent.com>", "<806450854208-708ev2nsvie2fn1srdr92etp2qvd3muk.apps.googleusercontent.com>"], //set this field to null if you want to disable this method
  "facebook": "facebookClientId" // set this field to null if you want to disable facebook login
}

export {
  clusterName,
  useHasuraApis,
  config
};
