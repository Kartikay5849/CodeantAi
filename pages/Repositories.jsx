import React from 'react'
import Sidebar from '../components/Sidebar'
const Repositories = () => {
  return (
    <div className="flex">
        <Sidebar />
        <div className="flex-grow p-6">
            <h1>Your Main Content Here</h1>
        </div>
    </div>
  )
}

export default Repositories
