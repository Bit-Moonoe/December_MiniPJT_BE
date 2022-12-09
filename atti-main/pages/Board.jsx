import React from 'react'
import BoardList from './board-category/BoardList'

const Board = () => {

  return (
    <>
      <div className="text-center">
          <div className="hidden text-xl md:ml-10 md:block md:space-x-8 md:pr-4">
            {/* <a> test</a> */}
            <BoardList/>
          </div>
      </div>
    </>
  )
}

export default Board