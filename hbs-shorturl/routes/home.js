// express Router
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  const urls = [
    { origin: 'www.google.com/bluuweb1', shortURL: 'klasjdi1' },
    { origin: 'www.google.com/bluuweb2', shortURL: 'klasjdi2' },
    { origin: 'www.google.com/bluuweb3', shortURL: 'klasjdi3' },
  ]

  res.render('home', { urls: urls })
})

module.exports = router
