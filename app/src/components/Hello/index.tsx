import * as React from 'react'

import './stylus/index.styl'

export interface Props {
  name: string
  enthusiasmLevel?: number
}

// 无状态的函数式组件 SFC:Stateless Functional Components
function Hello({ name, enthusiasmLevel = 1 }: Props) {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D')
  }
  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
    </div>
  )
}

// helpers
function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!')
}

export default Hello