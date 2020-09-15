const express = require('express')
const bodyParser = require('body-parser')
const nodeMailer = require('nodemailer')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/api/contact', (req, res) => {
  console.log(req.body)
  nodeMailer.createTestAccount((err, account) => {
    const { name, email, message } = req.body
    const htmlEmail = `
      <h3>Contact Details</h3>
      <ul>
        <li>Name:${name}</li>
        <li>Email:${email}</li>
      </ul>
      <h3>Message</h3>
      <p>${message}</p>
    `

    var transporter = nodeMailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "991cda8f92e869",
        pass: "5765e355ffb020"
      }
    });

    let mailOptions = {
      from: 'test@gmail.com',
      to: 'shaynesebro@gmail.com',
      replyTo: 'test@test.com',
      subject: 'new message',
      text: req.body.message,
      html: htmlEmail
    }

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return console.log(err)
      }

      console.log('Message sent: %s', info, message)
      console.log('Message URL: %s', nodemailer.getTestMessageUrl(info))
      alert('message sent')
    })
  })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`)
})