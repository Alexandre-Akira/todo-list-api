class UserDTO { 
    declare id: string
    declare name: string
    declare email: string
    declare createdAt: Date
    declare updatedAt: Date

    constructor(user) {
        const { id, name, email, createdAt, updatedAt } = user

        this.id = id
        this.name = name
        this.email = email
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }
}

export default UserDTO 
