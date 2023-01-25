import React from 'react';
import { Product } from '../../../../pages/api/admin/upload';
interface Props {
    products: Product[]
}
export const Table = ({ products }: Props) => {
    return (
        <div >
            <table style={{ width: '100%', textAlign: 'center' }}>
                <thead>
                    <tr>
                        {Object.keys(products[0]).map((item) => (
                            <th>{item}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {products.map((item) => (
                        <tr>
                            {Object.entries(item).map((item) => (
                                <td>{item[0] === 'imageUrl' ? <img src={`${item[1].split('public')[1]}`} width="40px" /> : item[1]}</td>
                            ))}

                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
};

