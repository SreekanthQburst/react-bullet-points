# react-bullet-points

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-bullet-points.svg)](https://www.npmjs.com/package/react-bullet-points) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-bullet-points
```

## Usage

Unordered list

```jsx
import React, { Component } from 'react'

import Bullets from 'react-bullet-points'
import 'react-bullet-points/dist/index.css'

const App = () => {
  const bulletPoints = [
    {
      string: 'item 1'
    },
    {
      string: 'item 2'
    },
    { string: 'item 3', color: 'red' }
  ]
  return <Bullets type='square' bulletPoints={bulletPoints} />
}
```

![This is an image](/assets/img2.png)

Ordered list

```jsx
const App = () => {
  const bulletPoints = [
    {
      string: 'item 1'
    },
    {
      string: 'item 2',
      color: 'green'
    },
    { string: 'item 3' }
  ]
  return <Bullets type='I' ordered bulletPoints={bulletPoints} />
}
```

![This is an image](/assets/img3.png)

Nested list

```jsx
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
  return <Bullets type='circle' ordered={false} bulletPoints={bulletPoints} />
}

export default App
```

![This is an image](/assets/img1.png)

## props

| Property  | types                                                                                   | default                                             |
| --------- | --------------------------------------------------------------------------------------- | --------------------------------------------------- |
| `type`    | `Unordered list types (disc, circle, square, none), Ordered list types (1, A, a, I, i)` | `Unordered list type (disc), Ordered list type (1)` |
| `color`   | color                                                                                   | black                                               |
| `ordered` | boolean                                                                                 | false                                               |

## License

MIT © [Sreekanth](https://github.com/SreekanthQburst)
