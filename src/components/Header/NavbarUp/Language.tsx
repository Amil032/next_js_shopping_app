import React from 'react'
import classes from './Language.module.css'
export const Language = () => {
  interface Amil {
    a: (data: string) => void
  }
  return (
    <div className={classes.container}>
      <p>AZ</p>
      <p>|</p>
      <p>RU</p>
    </div>
  )
}
