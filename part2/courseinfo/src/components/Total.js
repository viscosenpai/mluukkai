import React from 'react'

const Total = ({ parts }) => {
  const i = 0
  const total = parts.reduce((s, p) => {
    return s + p.exercises
  }, i)

  return (
    <p><b>Number of exercises {total}</b></p>
  );
}

export default Total