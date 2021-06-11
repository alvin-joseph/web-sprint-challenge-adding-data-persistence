const express = require("express")
const resourcesRouter = require('./resource/router')
const projectsRouter = require('./project/router')
const tasksRouter = require('./task/router')

const server = express()

server.use(express.json())

server.use('/api/resources', resourcesRouter)
server.use('/api/projects', projectsRouter)
server.use('/api/tasks', tasksRouter)

server.use('*', (req, res, next) => {
    next({ status: 404, message: 'not found' })
})

server.use((err, req, res, next) => { //eslint-disable-line
    res.status(500 || err.status).json({
        message: err.message,
        stack: err.stack
    })
})

module.exports = server
