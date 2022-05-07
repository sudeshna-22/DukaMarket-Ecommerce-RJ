// details of products
import productOne from './images/product-1.png';
import productTwo from './images/product-2.png';
import productThree from './images/product-3.png';
import productFour from './images/product-4.png';
// import productFive from './images/logo.png';

const data = {
    products: [
        {
            id: '1',
            name: 'Essentials Hoodie White',
            price: 56789,
            sex: 'Women',
            rating: 5,
            image: productOne
        },
        {
            id: '2',
            name: 'Levis Mens Dark Jeans',
            price: 2450,
            sex: 'Men',
            rating: 5,
            image: productTwo
        },
        {
            id: '3',
            name: 'Dior Chelsea Boots',
            price: 8000,
            sex: 'Men',
            rating: 5,
            image: productThree
        },
        {
            id: '4',
            name: 'Dr Martin Boots',
            price: 15200,
            sex: 'Men',
            rating: 5,
            image: productFour
        }
    ]
}

export default data;