import React from 'react'
import styles from './styles.module.css'

export const Bullets = ({
  type = '',
  ordered = false,
  bulletPoints = ['Bullet point 1', 'Bullet point 2', 'Bullet point 3']
}) => {
  let Tag = ordered ? 'ol' : 'ul'

  // unordered list types = disc, circle, square, none
  // ordered list types = 1, A, a, I, i
  return (
    <div className={styles.test}>
      <Tag type={type}>
        {bulletPoints.map((item, index) => (
          <li key={index} style={{ color: item.color }}>
            {item.string}
            {item.bulletPoints && (
              <Bullets
                type={item.type || type}
                ordered={item.ordered ? true : false}
                bulletPoints={item.bulletPoints}
              />
            )}
          </li>
        ))}
      </Tag>
    </div>
  )
}
