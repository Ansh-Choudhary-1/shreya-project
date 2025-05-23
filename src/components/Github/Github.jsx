import React from 'react'
import { useLoaderData } from 'react-router-dom'
function Github(){
    const data=useLoaderData()
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Follower:{data.followers}
    <img src={data.avatar_url} alt='Git Profile' width={300} />
    </div>
  )
}

export default Github
export const UseGitInfoLoader= async () =>{
    const response =await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}