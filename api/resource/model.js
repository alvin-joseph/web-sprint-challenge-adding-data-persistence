const db = require('../../data/dbConfig')

const getById = id => {
    return db('resources').where('resource_id', id).first()
}

const create = async resource => {
    const [resource_id] = await db('resources').insert(resource)
    await db('project_resources').insert({
        resource_id: resource_id
    })
    return getById(resource_id)
}

const get = () => {
    return db('resources')
}

const getByResource = resource => {
    return db('resources').where('resource_name', resource).first()
}

module.exports = {
    create,
    get,
    getByResource
}
