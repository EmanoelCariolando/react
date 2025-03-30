import { AllStudents } from '@/types/typeg';
 
 type Props = {
   people: AllStudents[] 	
 }

  export const BaseStude = ({people}:Props) => {
  return (
     <div>
        <table className='flex flex-col w-full h-full border-collapse border border-slate-500 font-bold'>
          <thead className='bg-slate-950 p-2'>
            <tr className='flex flex-row items-center justify-between '>
            <th className='w-55'>perfil</th>
            <th className=''>Active</th>
            <th className=''>Grade</th>
            <th className=''>Grade</th>
            <th className=''>Grade</th>
          </tr>
        </thead>
        <tbody className='border-collapse border border-slate-500 bg-slate-200'>
          {people.map((person) => (
            <tr key={person.id} className='flex flex-row items-center justify-between border-b border-slate-500 text-black'>
              <td className='ml-8'>
                <td className='flex flex-col items-center justify-center w-45'>
                  <img className='w-15 h-15 rounded-full mt-3' src={person.avatar}/>
                  <td className=''>{person.name}</td>
               
                  <td className='flex text-gray-700 text-sm'>
                   <td>{person.email}</td>
                   </td>
              </td>
               </td>

             <td className=''>
              {person.active && <div className='px-2 border border-gray-600 bg-green-500 '>active</div>}
              {!person.active && <div className='bg-red-500 px-2 border border-gray-600 '>enable</div>}
             </td>
    
              <td className=' '>{person.grade}</td>
              <td className=' w-10'>{person.grade}</td>
              <td className=' w-12'>{person.grade}</td>
              
            </tr>
          ))}
        </tbody>
        </table>
     </div>
    );
   }