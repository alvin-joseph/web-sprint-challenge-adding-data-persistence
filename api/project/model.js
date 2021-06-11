const db = require('../../data/dbConfig')

//[POST] /api/projects
//{"project_id":1,"project_name":"bar","project_description":null,
//"project_completed":false}
const create = async () => {

}

// [GET] /api/projects
// [{"project_id":1,"project_name":"bar","project_description":null,
// "project_completed":false}]
const get = () => {
    return Promise.resolve('Hello from projects!')
}

module.exports = {
    create,
    get
}
