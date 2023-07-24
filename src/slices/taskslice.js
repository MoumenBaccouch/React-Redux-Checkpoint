import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tasks:[
        {
            id:Math.random()*100,
            description:"Go Gym",
            isDone:true
        },
        {
            id:Math.random()*100,
            description:"Eating",
            isDone:false
        },
        {
            id:Math.random()*100,
            description:"Coding",
            isDone:true
        }
    ]
}

export const taskslice = createSlice({
    name: 'taskslice',
    initialState,
    reducers: {
        addtask:(state,action)=>{state.tasks=[...state.tasks,action.payload] },
        edittask:(state,action)=>{
            const taskindex=state.tasks.findIndex(el=>el.id===action.payload.id) 
            state.tasks[taskindex]=action.payload.task
        }
    },
})

// Action creators are generated for each case reducer function
export const { addtask,edittask } = taskslice.actions

export default taskslice.reducer