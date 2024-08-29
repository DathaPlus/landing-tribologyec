import React from 'react';
import Bar from '@components/Bar';
import { Footer } from '@components/footer';
import { Navbar } from '@components/navbar';
import { Hero } from '@components/base';
import contactHeroBanner from '@assets/img/contact_hero_bg.png';
import { getWordpressPageData } from '@server/common/getWordpressPageData';
import { IContactPage } from '@interfaces/app/IContactPage';
import { IWordpressPageData } from '@interfaces/server/common/IGetWordpressPageData';
import {RelatedProducts} from "@components/catalogue/relatedProducts/relatedProducts";
import {AditionalInfo} from "@components/catalogue/aditionalInformation/aditionalInfo";




const DetailProduct = async () => {
    const contactData: IWordpressPageData<IContactPage> | undefined =
        await getWordpressPageData<IContactPage>({
            searchParams: { namePage: 'Detalle Producto' },
        });

    return (
        <main>
            <Bar />
            <Navbar />
            <Hero title={contactData?.acf?.heroBanner?.title || ''} image={contactHeroBanner.src} />
            <AditionalInfo/>
            <RelatedProducts/>
            <Footer />
        </main>
    );
};

export default DetailProduct;
