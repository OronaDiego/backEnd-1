import fs from 'node:fs' ;
import { v4 as uuidv4 } from 'uuid'; 


class userManager{
    constructor(path){
        this.path = path;
    }

    async getAllUser(){
        try {
            if(fs.existsSync(this.path)){
                const users = await fs.promises.readFile(this.path, 'utf-8');
                return JSON.parse(users);
            }else return [];
        } catch (error) { //tengo que generar un nuevo error llamando al constructor de errores
            throw new Error(error) //-> para que este error lo pueda captar mediante un bloque try catch
        }
    }
    async createUser(obj){
        try {
            const user = {
                id:uuidv4(),
                ...obj
            }
            const users = await this.getAllUser(); // retorna array vacio o con algun objeto
            const userExists = users.find((u)=> u.id === user.id);
            if(userExists) throw new Error('User already exists')
            users.push(user)
            await fs.promises.writeFile(this.path, JSON.stringify(users))
            return users;
        } catch (error) {
            console.log(error);
            
        }
    }

    async getUserById(id){
        try {
            const users = await this.getAllUser(); // retorna array vacio o con algun objeto
            const userExists = users.find((u)=>u.id === id)
            if(!userExists) throw new Error('User does not exist')
            return userExists;
        } catch (error) {
            throw(error) // con este throw lo paso al endpoint para poder tratarlo
        }
    }
}

export const manager = new userManager('./users.json'); // exporto la instancia de la clase

