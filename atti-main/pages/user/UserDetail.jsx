import React from 'react'
import { PencilIcon, UserMinusIcon } from '@heroicons/react/24/outline'

const UserDetail = () => {
    return (
        <div className='overflow-hidden bg-white m-4 p-4 shadow sm:rounded-lg'>
            <div className='px-4 py-5 sm:px-6'>
                <h3 className='text-lg font-medium leading-6 text-gray-900'>User Information</h3>
                <p className='mt-1 max-w-2xl text-sm text-gray-500'>Personal details</p>
            </div>
            <div className='m-2 flex justify-end'>
                <div className='pr-2'>
                    <PencilIcon className='h-5 w-5 text-gray-400'/>
                </div>
                <UserMinusIcon className='h-5 w-5 text-red-400'/>
            </div>
            <div className='border-t border-gray-200'>
                <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Account</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{'props.user.id'}</dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">ID</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Backend Developer</dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Name</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">margotfoster</dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Status</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">휴면</dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Address</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">경기 고양시 일산동구 ㅇㅇㅇ동, 우편번호 ㅇㅇㅇ</dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Gender</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">남자</dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Memo</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
                            qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
                            pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    )
}

export default UserDetail