"use client"
import Todo from "@/Components/Todo";
import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
interface TodoItem {
  _id: string;
  title: string;
  description: string;
  isCompleted: boolean;
}
export default function Home() {
  const [formData,setFromData]=useState({
    title:"",
    description:""
  });

   const [todoData, setTodoData] = useState<TodoItem[]>([]);
   const fetchTodos=async()=>{
    const response=await axios.get('/api');
    setTodoData(response.data.todos);

   }
   const deleteTodo=async(id:string)=>{
const response=await axios.delete('/api',{
  params:{
    mongoId:id
  }
})
toast.success(response.data.msg);
fetchTodos();
   }
   const updateTodoStatus=async(id:string)=>{
    const response=await axios.patch('/api',{},{
      params:{
        mongoId:id
      }
    })
    toast.success(response.data.msg);
    fetchTodos();
       }
   useEffect(()=>{
    fetchTodos();
   },[])
const onChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
const name=e.target.name;
const value=e.target.value;
setFromData(form=>({...form,[name]:value}));
  }
  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  const response=await axios.post('/api',formData)
toast.success(response.data.msg);
setFromData({
  title:"",
  description:""
});
await fetchTodos();
    
  }
  return (
   <>
   <ToastContainer theme="dark"/>
   <form  onSubmit={onSubmitHandler} className="flex items-start flex-col gap-2 w-[80%] max-w-[600px] mt-24 px-2 mx-auto ">
    <input value={formData.title} type="text"  onChange={onChangeHandler} name="title" placeholder="Enter Title"className="px-3 py-2 border-2 w-full "/>
    <textarea value={formData.description} name="description" onChange={onChangeHandler} placeholder="Enter Description" className="px-3 py-2 border-2 w-full"></textarea>
    <button type="submit" className="bg-violet-600 py-3 px-11 text-white">Add To Do</button>
   </form>
   
<div className="relative overflow-x-auto mt-24 w-[60%] mx-auto"> 
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                 ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                 Description
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
          
{todoData.map((item,index)=>{
  return <Todo key={index} id={index} title={item.title} description={item.description} complete={item.isCompleted} mongoId={item._id} deleteTodo={deleteTodo} updateTodoStatus={updateTodoStatus}/>
})}
  
        </tbody>
    </table>
</div>

   </>
  );
}
