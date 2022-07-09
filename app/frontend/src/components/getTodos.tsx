import axios from "axios";
import { Fragment } from "preact";
import { useEffect, useState } from "preact/hooks";

const Todos = () => {
  const [todoData, setTodoData] = useState<Todos[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  const getTodos = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos")
      .then((todos) => {
        setTodoData(todos.data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    getTodos();
  }, [])

  return (
    <Fragment>
      <section class="hero">
        <div class="hero-body">
            <h1 class="title has-text-white">
                Just-Do-It
            </h1>
            <h2 class="subtitle has-text-white">
                Todos and shortcut links
            </h2>
        </div>
      </section>
      
      <section class="section">
        {isLoading ? (
          <h1 class="title has-text-white">Loading Todos...</h1>
        ) : (
          todoData.map((todos) => {
              return (
                <div class="card" key={todos.id}>
                  <div class="card-body">
                    <h3 class="card-subtitle">{todos.title}</h3>
                    <p class="card-p">Completed: {String(todos.completed)}</p>
                  </div>
                </div>
              )
          })
        )}
      </section>
    </Fragment>
  )
}


export default Todos;