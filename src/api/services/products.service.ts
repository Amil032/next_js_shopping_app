import axios from 'axios'

export const bestsellingService = async () => {
  const data = await axios.get('/movies')
  const products = await data.data
  return products
}
