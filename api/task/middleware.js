const checkTaskPayload = (req, res, next) => {
    if (!req.body.task_description) {
        next({
            status: 400,
            message: 'task description is required'
        })
    } else {
        next()
    }
}

module.exports = {
    checkTaskPayload
}
