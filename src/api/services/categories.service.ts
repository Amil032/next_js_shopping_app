import { instance } from '../axios'

export const getCategories = () => instance.get('/categories')
