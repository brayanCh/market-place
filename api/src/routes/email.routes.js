"use strict";

const router = require("express").Router();
const emailsender = require("nodemailer");



router.post("/", async(req, res) => {

    let testAccount = await emailsender.createTestAccount();


    let code = "fg";

    // create reusable transporter object using the default SMTP transport
    let transporter = emailsender.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, 
        auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass
        }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: req.body.email, // sender address
        to: "stuff@outlook.es", // list of receivers
        subject: "Code of authentification", // Subject line
        text: "Hello this is your code: " + code , // plain text body
        html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);

});


module.exports = router;
