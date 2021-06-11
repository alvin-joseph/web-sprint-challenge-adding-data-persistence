const db = require('../../data/dbConfig')

const getById = async id => {
    const taskAdded = await db('tasks').where('task_id', id)

    const transformAdded = taskAdded.map(row => {
        if (row.task_completed === 0) {
            return { ...row, task_completed: false }
        } else {
            return { ...row, task_completed: true }
        }
    })

    return transformAdded[0]
}

const create = async task => {
    const [task_id] = await db('tasks').insert(task)
    return getById(task_id)
}

const get = async () => {
    const taskRows = await db('tasks as t')
    .leftJoin('projects as p', 't.project_id', 'p.project_id')
    .select('t.task_id','t.task_description',
        't.task_notes', 't.task_completed','p.project_name', 'p.project_description')

    const transformedRows = taskRows.map(row => {
        if (row.task_completed === 0) {
            return { ...row, task_completed: false }
        } else {
            return { ...row, task_completed: true }
        }
    })

    return transformedRows
}

module.exports = {
    create,
    get
}
