import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import useWindowDimensions from '../hooks/getScreenSize'
import { FixedBottomNavigation } from '../mobile/bottom-navbar/BottomNavigation'
import { NavBarMobile } from '../mobile/Navbar/NavBar'
import { NavbarDown } from './NavbarDown/NavbarDown'
import { Navbar } from './NavbarUp/Navbar'
import { useQuery } from 'react-query'
import { useRouter } from 'next/router'
export const Header = ({ children }: { children: JSX.Element }) => {
  const [visibility, setVisibility] = useState(false)
  const { width } = useWindowDimensions()

  const dispatch = useDispatch()
  const router = useRouter()
  console.log(router)
  if (router.asPath.includes('admin')) {
    return <div style={{ margin: '0', padding: '0', width: '100%', boxSizing: 'border-box' }}>
      {children}
    </div>
  }
  // const { data, isSuccess } = useQuery(['todos'], getCategories)
  // isSuccess && dispatch(setAllCategories(data.data))

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
      {width > 900 ? (
        <>
          <Navbar />
          <NavbarDown visibility={visibility} setVisibility={setVisibility} />
        </>
      ) : (
        <>
          <FixedBottomNavigation setVisibility={setVisibility} />
          <NavBarMobile visibility={visibility} setVisibility={setVisibility} />
        </>
      )}
      {children}
    </div>
  )
}
