const express = require('express')
const app = express()
const port = 3200
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
console.log(process.env.MONGO_URL)
mongoose.connect(process.env.MONGO_URL)
const bcrypt = require('bcryptjs')
const User = require('./models/User')
const jwt = require('jsonwebtoken')
const imageDownloader = require('image-downloader')
const cookieParser = require('cookie-parser')
const Place = require('./models/Place')

const jwtSecret = 'fasefraw4r5r3wq45wdfgw34twdfg';
app.use(express.json())
app.use(cookieParser())
const bcryptSalt = bcrypt.genSaltSync(10);

app.use('/uploads',
    express.static(__dirname+'/uploads')

)

app.use(cors({
    credentials: true,
    origin: ['http://localhost:3200', 'http://localhost:5174', 'http://localhost:5173']
}))

app.get('/', (req, res) => {
    res.json('Hellosss Worlllld!')
})

app.get('/profile', (req,res) => {
    mongoose.connect(process.env.MONGO_URL);
    const {token} = req.cookies;
    if (token) {
      jwt.verify(token, jwtSecret, {}, async (err, userData) => {
        if (err) throw err;
        const {name,email,_id} = await User.findById(userData.id);
        res.json({name,email,_id});
      });
    } else {
      res.json(null);
    }
  });
  
  app.post('/logout', (req,res) => {
    res.cookie('token', '').json(true);
  });
  



  app.post('/register', async (req,res) => {
    mongoose.connect(process.env.MONGO_URL);
    const {name,email,password} = req.body;
  
    try {
      const userDoc = await User.create({
        name,
        email,
        password:bcrypt.hashSync(password, bcryptSalt),
      });
      res.json(userDoc);
    } catch (e) {
      res.status(422).json(e);
    }
  
  });

app.post('/login', async (req,res) => {
    mongoose.connect(process.env.MONGO_URL);
    const {email,password} = req.body;
    const userDoc = await User.findOne({email});
    if (userDoc) {
      const passOk = bcrypt.compareSync(password, userDoc.password);
      if (passOk) {
        jwt.sign({
          email:userDoc.email,
          id:userDoc._id
        }, jwtSecret, {}, (err,token) => {
          if (err) throw err;
          res.cookie('token', token).json(userDoc);
        });
      } else {
        res.status(422).json('pass not ok');
      }
    } else {
      res.json('not found');
    }
  });

app.post('/logout', (req, res)=> {
    res.cookie('token', '').json(true)
})

console.log({__dirname})
app.post('/upload-by-link', async (req, res)=>{
  const {link} = req.body;
  const newname = 'photo'+Date.now()+'.jpg'
  await imageDownloader.image({
    url: link,
    dest: __dirname+'/uploads/'+ newname
  })
  res.json(newname)
})

app.post('/places', (req, res)=>{
  const{
    title, address, photolink, description, addedphoto
  } = req.body
  const {token} = req.cookies;
  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    if(err) throw err
    const PlaceDoc = await Place.create({ 
      owner: userData.id,
      title,
      address, 
      photolink,
      description,
      addedphoto 
    })
    res.json(PlaceDoc)
  })
})

app.get('/places',(req,res)=>{
  const {token} = req.cookies;
  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    const {id}=userData;
    res.json(await Place.find({owner:id}))
  })
})

app.get('/placess',(req,res)=>{
  Place.find().then((data)=>{
    res.json(data)
  })
})

app.get('/users',(req,res)=>{
  User.find().then((data)=>{
    res.json(data)
  })
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

    // mongodb+srv://kmalik0907:<password>@cluster0.cekdzxd.mongodb.net/?retryWrites=true&w=majority
    // msu0KX6JYGOJ0Btr