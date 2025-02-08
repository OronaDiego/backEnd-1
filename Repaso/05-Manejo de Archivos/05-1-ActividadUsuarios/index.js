const fs = require('node:fs');
const { v4:uuidv4 } = require('uuid'); 


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
        } catch (error) {
            console.log(error);  
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
            console.log(error.message); 
        }
    }
}

const manager = new userManager('./users.json');

const user1 = {
    firtsName: 'Diego',
    lastName: 'Oroná',
    age: 33
};
const user2 = {
    firtsName: 'Julia',
    lastName: 'Oroná',
    age: 0
};
const test = async()=>{
    // const users = await manager.getAllUser()
    // console.log(users);
    
    // console.log(await manager.createUser(user1));
    // console.log('Se agrego un usuario');
    // console.log(await manager.createUser(user2));
    // console.log('Se agrego un usuario');
    
    console.log(await manager.getUserById("c7056673-bb24-4261-957f-c2735127fea1"));
    
    
}

test()