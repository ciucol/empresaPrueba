const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
  res.json({ message: 'All characters' })
})

module.exports = router
