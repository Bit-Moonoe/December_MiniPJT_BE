import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import curBoardAtom from '../atoms/curBoardAtom';
import { useAtom } from 'jotai';

const WriteBoard = () => {
  const [id, setId] = useState("")
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [curBoard, setCurBoard] = useAtom(curBoardAtom);

  const handleCreate = () => {
    const data = {
      id,
      title,
      body,
    }
    console.log(data);
    console.log(curBoard);
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    };

    fetch('https://jsonplaceholder.typicode.com/posts', options)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('실패', error));
    console.log("handleCreate clicked button")
  }

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${curBoard}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setId(data.id);
        setTitle(data.title);
        setContent(data.body);
      })
      .catch(error => console.error(error))
  }, [])

  return (
    <div className='m-auto'>
      
      <table className='mx-auto my-20 border-2 border-separate rounded-lg shadow-2xl border-spacing-6 border-neutral-300'>
        <thead>
          <tr className="px-6 py-4 text-sm font-medium text-left text-gray-900 border-2"><th className='p-3 text-lg text-center text-neutral-800'>제목</th>
            <input type="text" value={title} placeholder="제목을 입력하세요" onChange={(event) => setTitle(event.target.value)} className="px-6 py-4 text-sm font-medium text-left text-gray-900 border-2" /></tr>
          <tr className="py-4 text-sm font-medium text-left text-gray-900 border-2px-6"><th className='p-3 text-lg text-center text-neutral-800'>내용</th>
            <textarea type="text" value={body} placeholder="내용을 입력하세요" onChange={event => setContent(event.target.value) } className="px-6 py-4 text-sm font-medium text-left text-gray-900 border-2" /></tr>
      <Link href='/BoardList'>
        <button type='create' onClick={handleCreate} className='float-right px-5 py-2 font-bold border-2 rounded-lg text-neutral-900 hover:bg-neutral-200'>작성</button>
      </Link>
        </thead>
      </table>
    </div>
  )
}

export default WriteBoard