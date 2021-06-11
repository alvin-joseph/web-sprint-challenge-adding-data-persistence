const projects = [
    { 
        project_name: "Treehouse", 
        project_description: "Build a treehouse" 
    },
    { 
        project_name: "Remodel", 
        project_description: "Remodel a house",
    }
]

const resources = [
    { 
        resource_name: "Hammer",
        resource_description: "Thor's hammer will suffice" 
    },
    { 
        resource_name: "Paint", 
        resource_description: "Paint can",
    },
    { 
        resource_name: "Trash Bags",
        resource_description: "bags to hold the trash",
    }
]

const tasks = [
    { 
        task_description: "Find a tree",
        task_notes: "find a tree in the forest",
        project_id: 1
    },
    { 
        task_description: "Create a base",
        task_notes: "make sure base is strong like bull",
        project_id: 1
    },
    { 
        task_description: "Find a house",
        task_notes: "make sure it passes the smell test",
        project_id: 2
    }
]

const project_resources = [
    { project_id: 1, resource_id: 1 },
    { project_id: 2, resource_id: 2 },
    { project_id: 2, resource_id: 3 }
]

exports.seed = async function (knex) {
    await knex('projects').insert(projects)
    await knex('resources').insert(resources)
    await knex('tasks').insert(tasks)
    await knex('project_resources').insert(project_resources)
}
