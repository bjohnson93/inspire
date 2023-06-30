export class Todo {
  constructor(data) {
    this.id = data.id || ''
    this.completed = data.completed || false
    this.creatorId = data.creatorId
    this.description = data.description
  }

  get TodoTemplate() {
    return `
    <div class="mb-2 fs-4">
      <input ${this.completed ? 'checked' : ''} onchange="app.TodosController.toggleCompletedTodo('${this.id}')" type="checkbox" class="form-check-input fs-4" id="todoComplete"> ${this.description} <span class="selectable"><i  onclick="app.TodosController.deleteTodo('${this.id}')" class="mdi mdi-delete-circle"></i></span>
    </div>
    
    `
  }
}


// let todoData = {
//   //the server will create these properties for you
//   id: { type: String, required: true, unique: true }
//   completed: { type: Boolean, required: true, default: false },
//   creatorId: { type: String, required: true },
//   //You will need to provide a description
//   description: { type: String, required: true },
// }