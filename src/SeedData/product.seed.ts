import { createProduct } from "../components/Product/ProductController";
import ProductModel from "../components/Product/ProductModel";

const generateRandomProduct = () => {
    const names = ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'];
    const descriptions = ['Description 1', 'Description 2', 'Description 3', 'Description 4', 'Description 5'];
    const marketPrice = Math.floor(Math.random() * 100) + 1;
    const features = ['Feature A', 'Feature B', 'Feature C', 'Feature D', 'Feature E'];
    const randomFeatures = features.slice(0, Math.floor(Math.random() * features.length));
    const statuses = ['ACTIVE', 'INACTIVE'];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    const quantity = Math.floor(Math.random() * 100) + 1;

    return {
        name: names[Math.floor(Math.random() * names.length)],
        description: descriptions[Math.floor(Math.random() * descriptions.length)],
        marketPrice,
        status: randomStatus,
        quantity,
    };
};

export const generateRandomProducts = (count) => {
    const products = [];
    for (let i = 0; i < count; i++) {
        products.push(generateRandomProduct());
    }
    return products;
};



