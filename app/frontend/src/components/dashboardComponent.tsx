import { Fragment } from "preact";
// import { Link } from "wouter-preact";
import { useState, useEffect } from "preact/hooks";
import axios from "axios";

const DashboardComponent = () => {
    const [todoNum, setTodoNum] = useState(0);

    const fetchTodos = async () => {

        const todo = await axios.get(`todos`)

        try {
            setTodoNum(todo.data.meta.total);
        } catch (error) {
            console.error(error);
        }

    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return (

        <Fragment>
            <section class="hero is-info">
                <div class="hero-body">
                    <h1 class="title">Hello, Admin.</h1>
                </div>
            </section>
            <section class="section">
                <div class="columns">
                    <div class="column col-6 col-xs-12">
                        <div class="panel">
                            <div class="panel-header">
                                <div class="panel-title">
                                    <h1 class="text-center">Todos</h1>
                                </div>
                            </div>
                            <div class="panel-body">
                                <h3 class="text-center">{todoNum}</h3>
                            </div>
                        </div> 
                    </div>
                    <div class="column col-6 col-xs-12">
                        <div class="panel">
                            <div class="panel-header">
                                <div class="panel-title">
                                    <h1 class="text-center">Links</h1>
                                </div>
                            </div>
                            <div class="panel-body">
                                <h3 class="text-center">10</h3>
                            </div>
                        </div> 
                    </div>
                </div>
            </section>
        </Fragment>

    )

}

export default DashboardComponent;