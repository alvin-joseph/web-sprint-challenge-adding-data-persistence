const db = require('../../data/dbConfig')

//[POST] /api/projects
//{"project_id":1,"project_name":"bar","project_description":null,
//"project_completed":false}
const create = async () => {

}

// [GET] /api/projects
// [{"project_id":1,"project_name":"bar","project_description":null,
// "project_completed":false}]
const get = async () => {
    const projectRows = await db('projects as p')

    const transformedRows = projectRows.map(row => {
        if (row.project_completed === 0) {
            return { ...row, project_completed: false }
        } else {
            return { ...row, project_completed: true }
        }
    })

    return transformedRows
}

module.exports = {
    create,
    get
}
