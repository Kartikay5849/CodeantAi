import React, { useState } from 'react';
import Sidebar from '../components/Sidebar'
import repositoriesData from "../data/Repository.json"
const Repositories = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredRepositories = repositoriesData.filter((repo) =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="flex">
        <Sidebar />
        <div className="flex-grow p-6">
            <div className="flex-grow p-6 bg-gray-50 min-h-screen">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl font-semibold">Repositories</h1>
                <div className="flex items-center space-x-4">
                  <p className="text-gray-600">{repositoriesData.length} total repositories</p>
                  <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md">
                    Refresh All
                  </button>
                  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md">
                    + Add Repository
                  </button>
                </div>
              </div>

              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Search Repositories"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="divide-y divide-gray-200">
                {filteredRepositories.map((repo, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-4 hover:bg-gray-100 transition"
                  >
                    {/* Left Section: Repo Name + Public/Private */}
                    <div>
                      <div className="flex items-center space-x-3">
                        <h2 className="text-lg font-medium text-gray-900">{repo.name}</h2>
                        <span
                          className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            repo.visibility === 'Public'
                              ? 'bg-blue-100 text-blue-600'
                              : 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          {repo.visibility}
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 space-x-4">
                        <span className="flex items-center space-x-1">
                          <span
                            className="h-2 w-2 rounded-full"
                            style={{
                              backgroundColor:
                                repo.language === 'React'
                                  ? '#61dafb'
                                  : repo.language === 'Javascript'
                                  ? '#f7df1e'
                                  : repo.language === 'Python'
                                  ? '#306998'
                                  : repo.language === 'Swift'
                                  ? '#fa7343'
                                  : repo.language === 'Java'
                                  ? '#b07219'
                                  : repo.language === 'HTML/CSS'
                                  ? '#e34c26'
                                  : repo.language === 'PHP'
                                  ? '#4F5D95'
                                  : '#999',
                            }}
                          ></span>
                          <span>{repo.language}</span>
                        </span>
                        <span>{repo.size}</span>
                        <span>{repo.lastUpdated}</span>
                      </div>
                    </div>

                    {/* Empty Right Section for now (e.g., icons or other actions can go here) */}
                    <div></div>
                  </div>
                ))}
              </div>
            </div>
        </div>
    </div>
  )
}

export default Repositories
