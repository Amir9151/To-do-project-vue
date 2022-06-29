import axios from "axios";


const state = {
    tasks: []
};
const getters = {
    allTasks: (state) => state.tasks
};



const mutations = {
    setTask: (state, tas) => state.tasks = tas,
    newTask: (state, task) => state.tasks.unshift(task),
    delete: (state, id) => state.tasks = state.tasks.filter((task) => task.id !== id),

    edit: (state,edittask) => {
            console.log("id up",edittask.id)
            console.log("state",state.tasks[edittask.id-1])
           console.log("edittask.completed",edittask.completed)
           const index=state.tasks.findIndex((task)=>task.id===edittask.id)
           state.tasks[index].completed=edittask.completed
           

        //    state.tasks[edittask.id-1].completed=edittask.completed
        //  state.tasks[task.id]=task
        //  const index=state.tasks.findIndex((task)=>task.id===edittask.id)
        //   if(index!==-1){state.tasks.splice(index,1,edittask)}
    }
};

const actions = {
    async fetchTask({ commit }) {

        let response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=5`)

        console.log(response)
        commit("setTask", response.data)

    },
    async addTask({ commit }, title) {
        const response = await
            axios.post("https://jsonplaceholder.typicode.com/todos?_limit=6", { title, completed: false })
        commit("newTask", response.data)
    },

    async deleteTask({ commit }, id) {
        console.log(id)
        const response = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        console.log('delete', response.data)
        commit("delete", id)
    },

    async edit({ commit }, edittask) {
        console.log(edittask.completed)
        console.log("id down",edittask.id)
        const res=await axios.put(`https://jsonplaceholder.typicode.com/todos/${edittask.id}`,{edittask})
        console.log("res.data",res.data)
        
        commit("edit",edittask)

    },
    async filterTask({commit},e)
    {
        console.log('commit',commit)
        console.log('e',e)
        const limit=e.target.value
        let response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
        commit("setTask", response.data)

    }






    // fetchTask({ commit }) {
    //     let response;
    //     axios.get("https://jsonplaceholder.typicode.com/todos?_limit=6").then((res) => {
    //         response = res.data
    //         console.log(response)
    //         commit("setTask", (response))
    //     })
    // }
};

export default {
    state, getters, mutations, actions
}