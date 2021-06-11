const db = require('../../data/dbConfig')

const getById = async id => {
    const projectAdded = await db('projects').where('project_id', id)

    const transformAdded = projectAdded.map(row => {
        if (row.project_completed === 0) {
            return { ...row, project_completed: false }
        } else {
            return { ...row, project_completed: true }
        }
    })

    return transformAdded[0]
}

const create = async project => {
    const [project_id] = await db('projects').insert(project)
    return getById(project_id)
}

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
