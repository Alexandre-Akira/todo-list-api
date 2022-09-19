class AuthenticationDTO { 
    declare token: string
    declare id: string
    declare name: string
    declare email: string
    declare createdAt: Date
    declare updatedAt: Date

    constructor(token, user) {
        const { id, name, email, createdAt, updatedAt } = user

        this.token = token
        this.id = id
        this.name = name
        this.email = email
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }
}

export default AuthenticationDTO 
