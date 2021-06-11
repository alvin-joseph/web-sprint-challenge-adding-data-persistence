const checkProjectPayload = (req, res, next) => {
    if (!req.body.project_name) {
        next({
            status: 400,
            message: 'project name is required'
        })
    } else {
        next()
    }
}

module.exports = {
    checkProjectPayload
}
