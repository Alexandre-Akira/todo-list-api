class TodoDTO {
  declare id: string
  declare description: string
  declare isDone: string
  declare createdAt: Date
  declare updatedAt: Date

  constructor(todo) {
    const { id, description, isDone, createdAt, updatedAt } = todo

    this.id = id
    this.description = description
    this.isDone = isDone
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }
}

export default TodoDTO
