import React from 'react';
import Bar from '@components/Bar';
import { Footer } from '@components/footer';
import { Navbar } from '@components/navbar';
import { RelatedProducts } from "@components/catalogue/relatedProducts/relatedProducts";
import { AditionalInfo } from "@components/catalogue/aditionalInformation/aditionalInfo";
import Evotorque from '@assets/img/tools/03.png';

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

const DetailProduct = async () => {
    // const contactData: IWordpressPageData<IContactPage> | undefined =
    //     await getWordpressPageData<IContactPage>({
    //         searchParams: { namePage: 'Detalle Producto' },
    //     });

    const productDetails: IProductDetails = {
        weight: "6.8 kg",
        brand: "Norbar",
        model: "EBT-80-2700",
        capacity: "676-2700[Nm]",
        certification: "Sí",
        precision: "+/- 3%",
        images: [
            { src: Evotorque.src, alt: "Evotorque Image 1", width: 800, height: 600 },
            { src: Evotorque.src, alt: "Evotorque Image 2", width: 800, height: 600 },
            { src: Evotorque.src, alt: "Evotorque Image 3", width: 800, height: 600 }
        ],
    };

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
