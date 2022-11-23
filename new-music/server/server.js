const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const SpotifyWebApi = require('spotify-web-api-node');

const app = express();
app.use(cors({
    origin: 'https://new-project-2.vercel.app'
  }))
app.use(bodyParser.json());

app.post('/refresh', (req, res, next) => {
    const refreshToken = req.body.refreshToken
    const spotifyWebApi = new SpotifyWebApi({
        redirectUri: 'https://new-project-2.vercel.app',
        clientId: 'a32f4a292b934265b25286c4ce51835c',
        clientSecret: '355170b1e04e4b05bed9865bd42628c5',
        refreshToken,
    })
    spotifyWebApi.refreshAccessToken().then(
        (data) => {
            res.json({
                access_token: data.body.accessToken,
                expiresIn: data.body.expiresIn,
        })

            spotifyWebApi.setAccessToken(data.body['access_token']);
         }) .catch((err) => {
            res.sendStatus(err)
        })
})

app.post('/login', (req, res, next) => {
    const code = req.body.code
    const spotifyWebApi = new SpotifyWebApi({
        redirectUri: 'https://new-project-2.vercel.app',
        clientId: 'a32f4a292b934265b25286c4ce51835c',
        clientSecret: '355170b1e04e4b05bed9865bd42628c5',
    })
   
    spotifyWebApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    })
    .catch((err) => {
        res.sendStatus(400)
    })
})
app.get("/hi", (req, res) => {
    res.json({
        message: "Hello World!"
    })
})

const port = process.env.PORT || 3001;
app.listen(port)
