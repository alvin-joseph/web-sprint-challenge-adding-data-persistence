const router = require('express').Router()
const Project = require('./model')

const { checkProjectPayload } = require('./middleware')

//[POST] /api/projects
router.post('/', checkProjectPayload, (req, res, next) => {
    Project.create(req.body)
      .then(project => {
        res.status(201).json(project)
      })
      .catch(next)
})

//[GET] /api/projects
router.get('/', (req, res, next) => {
    Project.get()
      .then(projects => {
        res.json(projects)
      })
      .catch(next)
})

module.exports = router
