const db = require('../../data/dbConfig')

const getById = id => {
    return db('tasks').where('task_id', id).first()
}
// [POST] /api/tasks
// {"task_id":1,"task_description":"baz",
//"task_notes":null,"task_completed":false,"project_id:1}
const create = async task => {
    const [task_id] = await db('tasks').insert(task)
    return getById(task_id)
}

// [GET] /api/tasks
// [{"task_id":1,"task_description":"baz",
//"task_notes":null,"task_completed":false,"project_name:"bar",
//"project_description":null}]
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
