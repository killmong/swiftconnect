import React from 'react'
export interface Sidebarprops{
    children : React.ReactNode
}
const Sidebar : React.FC <Sidebarprops> = ({children}) => {
  return (
    <aside className=' h-screen'>
        <nav className='h-full flex flex-col bg-blue-900 border-r shadow-sm'>
            <div className='p-4 pb-2 flex justify-between items-center'>
           <button className='p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100'>
           </button>
           </div>
           <ul className='flex-1 px-3'>{children}</ul>
         </nav>

     </aside>
  )
}

export default Sidebar