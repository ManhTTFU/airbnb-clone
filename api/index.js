const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const imageDownloader = require('image-downloader')
const User = require('./models/User')
const db = require('./config/index')
// require('dotenv').config()
const app = express()
const port = 4000
const bcryptSalt = bcrypt.genSaltSync(12)
const jwtSecrect = '123123asdx123'
//pass: bf73WS09fomvwEIN
app.use(express.json())
app.use(cookieParser())
app.use(morgan('combined'))
app.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173',
    })
)

// connect to db
db.connect()

app.get('/test', (req, res) => {
    res.json('test ok')
})

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body
    const hashPassword = bcrypt.hashSync(password, bcryptSalt)
    try {
        const userDocs = await User.create({
            name,
            email,
            password: hashPassword,
        })
        res.json(userDocs)
    } catch (error) {
        console.log(error)
        res.status(422).json(error)
    }
})

app.post('/login', async (req, res) => {
    const { email, password } = req.body
    const userDocs = await User.findOne({
        email,
    })
    if (userDocs) {
        const isPassWord = bcrypt.compareSync(password, userDocs.password)
        if (isPassWord) {
            jwt.sign(
                {
                    email: userDocs.email,
                    id: userDocs._id,
                },
                jwtSecrect,
                {},
                (err, token) => {
                    if (err) throw err
                    res.cookie('token', token).json(userDocs)
                }
            )
            // res.json('pass ok')
        } else {
            res.status(422).json('pass not ok')
        }
    } else {
        res.json('not found')
    }
})

app.get('/profile', (req, res) => {
    const { token } = req.cookies
    console.log(token)
    if (token) {
        jwt.verify(token, jwtSecrect, {}, async (err, userData) => {
            if (err) throw err
            const { name, email, _id } = await User.findById(userData.id)
            res.json({ name, email, _id })
        })
    } else {
        res.json(null)
    }
    // res.json({ token })
})

app.post('/logout', (req, res) => {
    res.cookie('token', '').json(true)
})

app.post('/upload-by-link', async (req, res) => {
    const { link } = res.body
    const newName = Date.now() + '.jpg'
    await imageDownloader.image({
        url: link,
        dest: __dirname + '/uploads' + newName,
    })
    res.json(__dirname + '/uploads' + newName)
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
