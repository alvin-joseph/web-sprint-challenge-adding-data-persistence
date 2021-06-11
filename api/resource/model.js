const db = require('../../data/dbConfig')

// {"resource_id":1,"resource_name":"foo","resource_description":null}
const getById = id => {
    return db('resources').where('resource_id', id).first()
}

// [POST] /api/resources
const create = async resource => {
    const [resource_id] = await db('resources').insert(resource)
    await db('project_resources').insert({
        resource_id: resource_id
    })
    return getById(resource_id)
}

// [{"resource_id":1,"resource_name":"foo","resource_description":null}]
// [GET] /api/resources
const get = () => {
    return db('resources')
}

module.exports = {
    create,
    get
}
