const db = require('../../data/dbConfig')

// [POST] /api/resources
// {"resource_id":1,"resource_name":"foo","resource_description":null}
const create = async () => {

}

// [GET] /api/resources
// [{"resource_id":1,"resource_name":"foo","resource_description":null}]
const get = () => {
    return Promise.resolve('Hello from resources!')
}

module.exports = {
    create,
    get
}
