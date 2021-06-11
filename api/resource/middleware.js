const checkResourcePayload = (req, res, next) => {
    if (!req.body.resource_name) {
        next({
            status: 400,
            message: 'resource name is required'
        })
    } else {
        next()
    }
}

module.exports = {
    checkResourcePayload
}
