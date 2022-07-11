import axios from "axios";
import { useEffect, useState } from "preact/hooks";


const EditTodo = (id: number) => {
    const [title, setTitle] = useState<string>("");
    const [checked, setChecked] = useState<boolean>(false);

    const getTodoById = async () => {
        const todo = await axios.get(`todos/${id}`)

        try {
            setTitle(todo.data.title);
            setChecked(todo.data.completed);
        } catch (error) {
            console.error(error);
        }

    }

    useEffect(() => {
        getTodoById();
    }, [])

    const submit = async () => {

        const todoData = {
            title,
            checked
        }

        await axios.put(`todos/${id}`, todoData, {
            headers: {
                'content-type': 'application/json'
            }
        })
    }

    return (
        <div class="card-body">
        </div>
    )
}


export default EditTodo;