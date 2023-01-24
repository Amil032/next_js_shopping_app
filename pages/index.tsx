import React from "react";
import { Home } from "../src/Pages/Home/Home"
import { Header } from "../src/components/Header/Header"
import axios from "axios";
import { CategoryProps } from "../src/types/types";
import { useDispatch } from "react-redux";
import { setAllCategories } from "../src/store/slices/categories";
import { getCategories } from "../src/api/services/categories.service";
import { Product } from "./api/admin/upload";
import { getAllProducts } from "../src/api/services/products.service";

interface Props {
    categories: CategoryProps,
    products: { products: Product[] }
}
export default function HomeRoute({ categories, products }: Props) {
    console.log(categories.categories);
    console.log(products.products, 'products')
    const dispatch = useDispatch();
    dispatch(setAllCategories(categories.categories))
    return <Home categories={categories.categories} products={products.products} />

}
export async function getStaticProps() {
    const getAllCategories = async () => {
        const response = await getCategories()
        return response
    }
    const getProducts = async () => {
        const products = await getAllProducts()
        return products
    }
    const data = await getAllCategories()
    const products = await getProducts()
    return {
        props: {
            categories: data,
            products: products
        }
    }
}