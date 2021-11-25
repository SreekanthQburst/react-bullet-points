import React from 'react'

import { Bullets } from 'react-bullet-points'
import 'react-bullet-points/dist/index.css'

const App = () => {
  const bulletPoints = [
    {
      string: 'item 1',
      color: 'red'
    },
    {
      string: 'item 2',
      bulletPoints: [
        { string: 'item 2 - sub-item 1', color: 'green' },
        { string: 'item 2 - sub-item 2', color: 'red' }
      ]
    },
    {
      type: 'A',
      ordered: true,
      string: 'item 3',
      color: 'blue',
      bulletPoints: [
        { string: 'item 3 - sub-item 1', color: 'green' },
        {
          ordered: false,
          type: 'circle',
          string: 'item 3 - sub-item 2',
          bulletPoints: [
            { string: 'item 3 - sub-item 2 - 1', color: 'green' },
            { string: 'item 3 - sub-item 2 - 2', color: 'red' }
          ]
        },
        { string: 'item 3 - sub-item 3', color: 'blue' }
      ]
    }
  ]
  return <Bullets bulletPoints={bulletPoints} />
}

export default App
