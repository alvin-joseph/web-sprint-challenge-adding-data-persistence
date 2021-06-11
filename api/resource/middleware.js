const Resource = require('./model')

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

const checkResourceUnique = async (req, res, next) => {
    const { resource_name } = req.body
    try {
        const existing = await Resource.getByResource(resource_name.trim())
        if (existing) {
            next({
                status: 400,
                message: `the resource '${resource_name}' already exists`
            })
        } else {
            next()
        }
    } catch (err) {
        next(err)
    }
}

module.exports = {
    checkResourcePayload,
    checkResourceUnique
}
