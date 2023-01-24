
import axios from 'axios';
import { AddProducts } from '../../src/components/admin/AddProducts';
import { Wrapper } from '../../src/components/admin/wrapper/Wrapper';
import { CategoryProps } from '../../src/types/types';
interface Props {
  categories: CategoryProps
}
export default function Admin({ categories }: Props) {
  console.log(categories.categories, 'admin')
  return (
    <Wrapper>

      <AddProducts categories={categories} />

    </Wrapper>
  )

}
export async function getStaticProps() {
  const getAllCategories = async () => {
    const data = await axios.get("http://localhost:3000/api/category");
    const res = await data.data
    return res
  }

  const data = await getAllCategories()

  return {
    props: {
      categories: data
    }
  }
}