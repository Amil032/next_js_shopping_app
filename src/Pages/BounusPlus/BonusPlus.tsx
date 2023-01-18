import { useEffect } from 'react'
import useWindowDimensions from '../../components/hooks/getScreenSize'
export const BonusPlus = () => {
  const { width, height } = useWindowDimensions()
  console.log('width-', width, 'height-', height)
  useEffect(() => {
    fetch('https://minimaks.rahimli.live/index.php/rest/shops/get_shop_info/api_key/teampsisthebest', {
      mode: 'no-cors'
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
  }, [])
  return <div>bonusPlus</div>
}
