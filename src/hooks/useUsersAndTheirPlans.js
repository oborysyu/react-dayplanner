import { useEffect, useState } from "react";


export function useUsersAndTheirTodos() {
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        let usersAndDayPlans = getUsers("usersAndDayPlans", []);
        setUsers(usersAndDayPlans);
    }, []);

    const getUsers = (keyName, defaultValue) => {
        try {
        const value = window.localStorage.getItem(keyName);
        if (value) {
            return JSON.parse(value);
        } else {
            window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
            return defaultValue;
        }
        } catch (err) {
        return defaultValue;
        }    
    };

    const addUser = (user) => {
        let clonedData = users.concat();
        clonedData.push(user);
        setUsers(clonedData); 
        window.localStorage.setItem("usersAndDayPlans", JSON.stringify(clonedData));
    };

    const logInUser = (user) => {
        setCurrentUser(user);
    };
    const signOut = () => {
        setCurrentUser(null);
    };
    const saveDataInLocalStorage = (data) => {
      try {
        window.localStorage.setItem("usersAndDayPlans", JSON.stringify(data));      
      }
      catch(err){
        console.log("ERROR:"+err);
      }      
    }

    const funcs = {
        addTodo: function(desc) {
          let clonedData = users.concat();
          const updatedTodos= currentUser.todos.concat();
          updatedTodos.push({"id":Date.now(), "description":desc, "completed": false});
          const ind = users.findIndex(obj=> obj===currentUser)
          clonedData[ind].todos = updatedTodos;
          setUsers(clonedData); 
          saveDataInLocalStorage(clonedData);
        },

        removeTodo: function (id) {
          let clonedData = users.concat();
          let updatedTodos= currentUser.todos.concat();  
          updatedTodos = updatedTodos.filter((todo) => todo.id !== id);
          const ind = users.findIndex(obj=> obj===currentUser)
          clonedData[ind].todos = updatedTodos;
          setUsers(clonedData);
          saveDataInLocalStorage(clonedData); 
        },
    
        toggleTodo: function (id) {
            let clonedData = users.concat();
            const updatedTodos= currentUser.todos.map((todo) => {
              if (todo.id === id) {
                todo.completed = !todo.completed;
              }
              return todo;
            });
            const ind = users.findIndex(obj=> obj===currentUser)
            clonedData[ind].todos = updatedTodos;
            setUsers(clonedData);
            saveDataInLocalStorage(clonedData);
        },
      };    
    return { users, addUser, getUsers, logInUser, signOut, currentUser, funcs };
}