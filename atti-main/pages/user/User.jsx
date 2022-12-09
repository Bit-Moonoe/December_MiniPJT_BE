import Link from 'next/link'
import React from 'react'

const User = (props) => {
    return (
        <Link href={`/users/${1}`}>
            <div className='flex justify-around border-2 my-2'>
                <div>{props.id}</div>
                <div>{props.name}</div>
                <div>{props.gender}</div>
            </div>
        </Link>
    )
}

export default User