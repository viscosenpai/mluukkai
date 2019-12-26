import React from 'react'
import Part from './Part'

const Content = props => {
  const parts = props.parts.map(part => {
    return (
      <Part key={part.id} part={part.name} exercises={part.exercises} />
    )
  })
  return (
    <div>
      {parts}
    </div>
  );
}

export default Content