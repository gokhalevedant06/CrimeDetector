// const accountSid = process.env.TWILIO_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;


const client = require('twilio')("AC06ca5ea6f2f038a0123f4407617e9da4","f3e6365f5c62fde768f5968351cbac14");

// client.messages.create({
//     body:"Hello there,how you doin!",
//     from:"+19108308687",
//     to:"+919136302456",
// })
// .then(res => {
//     console.log(res);
// })



// export const sendSMS = async (phoneNumber) => {
//     const msg = client.create({
//         body:"Hello there,how you doin!",
//         from:"+19108308687",
//         to:phoneNumber,
//     })
// }