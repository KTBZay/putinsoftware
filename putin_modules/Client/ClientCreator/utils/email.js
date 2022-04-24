const {nodemailer} = require('nodemailer')
const transporter = (service,{name,pass,from,to,subject,text}) => {
    const EmailTransporter =  nodemailer.createTransport({
        service: service,
        auth: {
          user: name,
          pass: pass
        }
    })
    const mailOptions = {
        from: from,
        to: to,
        subject: subject,
        text: text
      };
      EmailTransporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}
module.exports = {transporter}