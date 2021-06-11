const db = require('../../data/dbConfig')

// [POST] /api/tasks
// {"task_id":1,"task_description":"baz",
//"task_notes":null,"task_completed":false,"project_id:1}
const create = async () => {

}

// [GET] /api/tasks
// [{"task_id":1,"task_description":"baz",
//"task_notes":null,"task_completed":false,"project_name:"bar",
//"project_description":null}]
const get = () => {
    return Promise.resolve('Hello from tasks!')
}

module.exports = {
    create,
    get
}
