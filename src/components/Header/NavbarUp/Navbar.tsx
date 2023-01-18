import React from 'react'
import { useNavigate } from 'react-router-dom'
import { navigationConsts } from '../../../consts/navigation-consts'
import { Contact } from './Contact'
import classes from './Index.module.css'
import { useRouter } from 'next/router'
import { Language } from './Language'
export const Navbar = () => {
  // const navigate = useNavigate()
  const router = useRouter()
  const { routes } = navigationConsts
  return (
    <div className={classes.upperNavbar}>
      <div>
        <h1 style={{ color: 'red' }} onClick={() => router.push('/')}>
          Logo
        </h1>
      </div>
      <ul className={classes.list}>
        {routes.map((item, index) => (
          <li style={{ color: index === 0 ? 'red' : 'inherit' }} onClick={() => router.push(`${item[1]}`)} key={index}>
            {item[0]}
          </li>
        ))}
      </ul>

      <Contact />
      <Language />
    </div>
  )
}
