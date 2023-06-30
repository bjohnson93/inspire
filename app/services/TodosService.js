import { AppState } from "../AppState.js";
import { Todo } from "../models/Todo.js";
import { api } from "./AxiosService.js"

class TodosService {
  async getTodos() {
    const res = await api.get('api/todos')

    console.log('got todos?', res.data);

    const builtTodos = res.data.map(todoPojo => new Todo(todoPojo))

    AppState.todos = builtTodos
    // console.log(AppState.todos, 'app state todos', builtTodos, 'built todos');
  }
  async createTodo(todoData) {
    const res = await api.post('api/todos', todoData)
    // console.log('created todo?', res)
    const newTodo = new Todo(res.data)
    AppState.todos.push(newTodo)
    AppState.emit('todos')
  }
  async toggleCompletedTodo(todoId) {
    const foundTodoIndex = AppState.todos.findIndex(todo => todo.id == todoId)

    const foundTodo = AppState.todos[foundTodoIndex]

    if (!foundTodo) {
      throw new Error("INVALID ID!")
    }

    const todoData = { completed: !foundTodo.completed }

    const res = await api.put(`api/todos/${todoId}`, todoData)
    console.log('I completed my task!', res.data);

    const completedTodo = new Todo(res.data)

    AppState.todos.splice(foundTodoIndex, 1, completedTodo)

    AppState.emit('todos')

  }
  async deleteTodo(todoId) {
    // console.log('todoId', todoId);
    const res = await api.delete(`api/todos/${todoId}`)

    console.log(res.data, '<--this is the todo that was deleted');

    const todoIndex = AppState.todos.findIndex(todo => todo.id == todoId)

    if (todoIndex == -1) {
      throw new Error(`no index found with the id of ${todoId}`)
    }
    AppState.todos.splice(todoIndex, 1)
    AppState.emit('todos')
  }

}

export const todosService = new TodosService()