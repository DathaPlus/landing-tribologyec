import React from 'react';
import Bar from '@components/Bar';
import { Footer } from '@components/footer';
import { Navbar } from '@components/navbar';
import { RelatedProducts } from "@components/catalogue/relatedProducts/relatedProducts";
import { AditionalInfo } from "@components/catalogue/aditionalInformation/aditionalInfo";
import {formatSlug, getProductBySlug} from "@server/common/getProducts";


export interface IProductImage {
    src: string;
    alt: string;
    width: number;
    height: number;
}

export interface IProductDetails {
    weight: string;
    brand: string;
    model: string;
    capacity: string;
    certification: string;
    precision: string;
    images: IProductImage[];
}

const DetailProduct = async ({ params }: { params: { slug: string } }) => {
    const productDetails = getProductBySlug(formatSlug(params.slug));

    if (!productDetails) {
        return <div>Producto no encontrado</div>;
    }

    return (
        <main>
            <Bar />
            <Navbar />
            <AditionalInfo details={productDetails} />
            <RelatedProducts />
            <Footer />
        </main>
    );
};


export default DetailProduct;
