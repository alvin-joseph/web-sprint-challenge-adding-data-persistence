const router = require('express').Router()
const Task = require('./model')

const { checkTaskPayload } = require('./middleware')

//[POST] /api/tasks
router.post('/', checkTaskPayload, (req, res, next) => {
    Task.create(req.body)
      .then(task => {
        res.status(201).json(task)
      })
      .catch(next)
})

//[GET] /api/tasks
router.get('/', (req, res, next) => {
    Task.get()
      .then(tasks => {
        res.json(tasks)
      })
      .catch(next)
})

module.exports = router
