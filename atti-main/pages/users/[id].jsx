import { useRouter } from 'next/router'
import React from 'react'
import UserDetail from '../../components/Users/UserDetail';

const UserDetailPage = () => {
    const router = useRouter();
    console.log(router.query.id);
  return (
    <div className='container mx-auto bg-slate-200 p-2'>
    <UserDetail />
    </div>
  )
}

export default UserDetailPage