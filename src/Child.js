import React from 'react'

const Child = ({fun}) => {


  return (
    <div>{fun(5)}</div>
  )
}

export default Child