export interface ITodo {
    _id: string,
    title: string,
    description: string,
    date: {
        created: string,
        start: string | null,
        due: string | null,
        completed: string | null
    },
    tags: string[],
}


const TODOS: ITodo[] = [
    {
        "date": {
            "start": null,
            "due": null,
            "completed": null,
            "created": "2020-07-03T06:30:22.280Z"
        },
        "description": "a description for this task",
        "tags": [],
        "_id": "5efed07e8ad8fa5078d75e1d",
        "title": "some new task",
    },
    {
        "date": {
            "start": null,
            "due": null,
            "completed": null,
            "created": "2020-07-03T06:31:42.209Z"
        },
        "description": "a description for this task",
        "tags": [],
        "_id": "5efed0ce864852566ce984a9",
        "title": "send a post to the api 2",
    }
]

export default TODOS