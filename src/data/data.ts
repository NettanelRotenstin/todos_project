import Todo from "../types/models/Todo";
import User from "../types/models/User";

export const users: User[] = []

export const todos: Todo[] = [];


(async ():Promise<void> =>{
    
    const user1 = new User(`John`)

    await user1.hashPassword(`1234`)
    
    users.push(user1)
    
    const todo1 = new Todo('fold fome clean loundry',user1.id)

    const todo2 = new Todo('dishes',user1.id)
    
    todos.push(todo1,todo2)
})()

 
