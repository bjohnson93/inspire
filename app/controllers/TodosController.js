import { AppState } from "../AppState.js";
import { todosService } from "../services/TodosService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML, setText } from "../utils/Writer.js";

function _drawTodos() {
  let todos = AppState.todos
  // console.log(todos, 'this is the draw');

  let template = ''

  todos.forEach(todo => template += todo.TodoTemplate)

  const incompleteTodos = AppState.todos.filter(todo => !todo.completed)

  setHTML('todosList', template)
  setText('todo-count', incompleteTodos.length)

}


export class TodosController {

  constructor() {
    // console.log('hello from todos controller!');

    AppState.on('account', this.getTodos)
    AppState.on('todos', _drawTodos)

  }


  async getTodos() {
    try {
      await todosService.getTodos()
    } catch (error) {
      console.error(error)
      Pop.error(error.message)
    }
  }
  async createTodo(event) {
    try {
      event.preventDefault()
      // console.log('you pushed the button!');
      const form = event.target
      const todoData = getFormData(form)
      // console.log('todo Data', todoData);
      form.reset()
      await todosService.createTodo(todoData)
    } catch (error) {
      console.error(error)
      Pop.error(error.message)
    }
  }

  async toggleCompletedTodo(todoId) {
    try {
      await todosService.toggleCompletedTodo(todoId)
    } catch (error) {
      console.error(error)
      Pop.error(error.message)
    }
  }

  async deleteTodo(todoId) {
    try {
      const wantsToDelete = await Pop.confirm('Are you sure you want to delete?')
      if (!wantsToDelete) {
        return
      }
      await todosService.deleteTodo(todoId)
    } catch (error) {
      console.error(error)
      Pop.error(error.message)
    }
  }
}