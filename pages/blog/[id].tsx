import { useRouter } from 'next/router'
import React from 'react';
import { useSelector } from 'react-redux';
import { Product } from '../../src/Pages/Product/Product';
import { allCategories } from '../../src/store/slices/categories';
export default function Blog() {
    const data = useSelector(allCategories);
    console.log(data)
    const router = useRouter();
    const id = router.query.id
    return (
        <Product />
    )
}