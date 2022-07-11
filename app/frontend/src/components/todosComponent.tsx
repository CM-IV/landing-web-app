import axios from "axios";
import { Fragment } from "preact";
import { useEffect, useState } from "preact/hooks";
import { Link, Redirect } from "wouter-preact";
import Paginator from "./paginator";

const Todos = () => {
  const [todoData, setTodoData] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(0);
  const [isPaginated, setIsPaginated] = useState<number>(0);

  const getTodos = async () => {
    const todos = await axios.get(`/todos/?page=${page}`)

    try {
      setTodoData(todos.data.data);
      setIsPaginated(todos.data.meta.total);
      setLastPage(todos.data.meta.last_page);
    } catch (error) {
      console.error(error); 
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getTodos();
  }, [page])

  const deleteTodo = async (id: number) => {
    if (window.confirm("Are you sure?")) {
      await axios.delete(`/todos/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      setTodoData(todoData.filter((p: Todo) => p.id !== id));
      window.location.reload();
    }
  };


  return (
    <Fragment>
      <section class="hero">
        <div class="hero-body">
            <h1 class="title">
                Just-Do-It
            </h1>
            <h2 class="subtitle">
                Todos and shortcut links
            </h2>
        </div>
      </section>
      
      <section class="section">
        <div class="container">
          <div class="columns">
            <div class="column col-10">
            {todoData.length == 0 ? (
              <div class="loading loading-lg"></div>
            ) : (
              todoData.map((todo: Todo) => {
                  return (
                    <div class="tile tile-centered" key={todo.id}>
                      <div class="tile-content">
                        <div class="tile-title text-black text-center pt-2">
                          <p>{todo.title}</p>
                        </div>
                        <div class="tile-subtitle text-black text-center">
                          <p>Completed: {String(todo.completed)}</p>
                        </div>
                      </div>
                      <div class="tile-action">
                        <div class="popover popover-left popbtn">
                        <button class="btn btn-link" aria-label="popover button">
                          <i class="icon icon-more-vert"></i>
                        </button>
                          <div class="popover-container">
                            <div class="card">
                              <div class="card-header text-black text-center">
                                <p>Actions</p>
                              </div>
                              <div class="card-body">
                                <div class="form-group">
                                    <Link to={`/manage-todos/${todo.id}/edit`}>
                                      <button class="btn centered-edit">Edit Todo</button>
                                    </Link>
                                </div>
                                <div class="form-group">
                                    <button class="btn centered-delete" onClick={() => deleteTodo(todo.id)}>Delete</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
              })
            )}
            {!isLoading && todoData.length == 0 && (
              <div class="empty">
                <p class="empty-title h5">You have no todos</p>
                <p class="empty-subtitle">Go to the dashboard to add some.</p>
              </div>
            )}
            {isPaginated > 6 && (
              <>
                <div class="divider"></div>
                <Paginator 
                page={page}
                lastPage={lastPage}
                pageChanged={(page) => setPage(page)}
                />
              </>
            )}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}


export default Todos;