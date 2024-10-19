import React from 'react'
interface TodoProps {
  id: number;
  title: string;
  description: string;
  mongoId: string; 
  complete: boolean;
  deleteTodo: (id: string) => void; 
  updateTodoStatus: (id: string) => void;
}

const Todo: React.FC<TodoProps> = ({ id, title, description, mongoId, complete, deleteTodo, updateTodoStatus }) => {
  return (
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
     {id+1}
    </th>
    <td className={`px-6 py-4 ${complete?"line-through":""}`}>
        {title}
    </td>
    <td className={`px-6 py-4 ${complete?"line-through":""}`}>
     {description}
    </td>
    <td className={`px-6 py-4 ${complete?"line-through":""}`}>
     {complete?"Completed":"Pending"}
    </td>
    <td className="px-6 py-4 flex gap-1">
    <button onClick={()=>deleteTodo(mongoId)} className='py-2 px-4 bg-red-600 text-white'>Delete</button>
   {complete?"": <button onClick={()=>updateTodoStatus(mongoId)} className='py-2 px-4 bg-green-600 text-white'>Done</button> }
    </td>
</tr>

  )
}

export default Todo