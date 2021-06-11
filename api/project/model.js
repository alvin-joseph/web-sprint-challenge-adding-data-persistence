const db = require('../../data/dbConfig')

const getById = id => {
    return db('projects').where('project_id', id).first()
}
//{"project_id":1,"project_name":"bar","project_description":null,
//"project_completed":false}
//[POST] /api/projects
const create = async project => {
    const [project_id] = await db('projects').insert(project)
    
    return getById(project_id)
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
