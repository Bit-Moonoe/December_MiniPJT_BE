import { useAtom } from 'jotai';
import React from 'react'
import Link from 'next/link'
import curBoardAtom from '../atoms/curBoardAtom';

const List = (props) => {
    const boards = props.boards;

    const [ _, SetCurBoard] = useAtom(curBoardAtom);

    return (
        <>
            {boards && boards.map(board => (
                <Link href="/ModifyBoard" >
                    <button onClick={() => {SetCurBoard(board.id)}} >
                        <div className='container flex justify-center'>
                            <div className="flex flex-col my-2 ">
                                <div className="w-full">
                                    <div className="border-2 border-gray-200">
                                        <div className="overflow-hidden">
                                            <table className='divide-y divide-green-400'>
                                                <thead className=' bg-gray-50'>
                                                    <tr key={board.id + board.title + board.body} className="hover:bg-neutral-200">
                                                        <th className="px-6 py-3 text-xl text-gray-500">{board.id}</th>
                                                        <td className="px-40 text-xl text-gray-500 py-30">{board.title}</td>
                                                        <td className="px-6 py-2 text-xl text-gray-500">{board.body}</td>
                                                    </tr>
                                                </thead>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </button>
                    <br />
                </Link>
            ))}
        </>
    )
}

export default List