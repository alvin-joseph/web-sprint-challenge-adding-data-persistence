const router = require('express').Router()
const Resource = require('./model')

const { checkResourcePayload } = require('./middleware')

//[POST] /api/resources
router.post('/', checkResourcePayload, (req, res, next) => {
    Resource.create(req.body)
      .then(resource => {
        res.status(201).json(resource)
      })
      .catch(next)
})

//[GET] /api/resources
router.get('/', (req, res, next) => {
    Resource.get()
      .then(resources => {
        res.json(resources)
      })
      .catch(next)
})

module.exports = router
