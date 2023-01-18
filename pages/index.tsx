import React from "react";
import { Home } from "../src/Pages/Home/Home"
import { Header } from "../src/components/Header/Header"
import axios from "axios";
import { CategoryProps } from "../src/types/types";
import { useDispatch } from "react-redux";
import { setAllCategories } from "../src/store/slices/categories";

interface Props {
    categories: CategoryProps
}
export default function HomeRoute({ categories }: Props) {
    console.log(categories.categories)
    const dispatch = useDispatch();
    dispatch(setAllCategories(categories.categories))
    return <Home categories={categories.categories} />

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