


const nodemailer = require('nodemailer');

    // OTP Generate 

const  isTransport  = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
        
    }
}); 



isTransport.verify((error, success) =>{
    if (error) {
        console.log("Email Connection Error:", error);
        
    } else {
        console.log("Email Server is ready to send messages!",success);
        
    }
});





      //SendRegisterOTP  

const SendRegisterOTP = async (name, email, otp ) => {
    const mailOptions = {
        from: `Mugi Bus Services <${process.env.EMAIL}>`,
        to: email,
        subject: "Verify Your Account - Welcome to Mugi Bus Servies",
        text: `Dear ${name},\n\n` +
               `Welcome to Mugi Bus Services! We are excited to have you on board.\n\n` +
               `To activate your account and verify your email address, please use the One-Time Password (OTP) provided below:\n\n` +
               `Verification Code: ${otp}\n\n` +
               `Note: This code is valid for the next 10 minutes only. For your account's security, please do not share this OTP with anyone.\n\n` +
               `If you did not initiate this registration, no further action is required. This email was sent to verify your address.\n\n` +
               `Happy Journey,\n` +
               `Team Mugi Bus Services`
    };
        
    return await isTransport.sendMail(mailOptions);
};




            //SendForgetPasswordOTP

const SendForgetPasswordOTP = async (name, email, otp ) => {
    const forgrt_passowrd_otp = {
        from: process.env.EMAIL,
        to: email,
        subject: "Verify Your Account - Welcome to Mugi Bus Servies",
        text: `Dear ${name},\n\n` +
              `We received a request to reset the password for your Mugi Bus Services account.\n\n` +
              `Please use the following One-Time Password (OTP) to proceed with resetting your password:\n\n` +
              `OTP: ${otp}\n\n` +
              `This OTP is valid for the next 10 minutes. For your security, do not share this code with anyone.\n\n` +
              `If you did not request a password reset, please ignore this email or contact our support team if you have concerns.\n\n` +
              `Best regards,\n` +
              `Team Mugi Bus Services`
    };

    return await isTransport.sendMail(forgrt_passowrd_otp);
};






module.exports = {
    SendRegisterOTP,
    SendForgetPasswordOTP  
};