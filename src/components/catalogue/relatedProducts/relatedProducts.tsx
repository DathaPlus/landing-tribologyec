'use client';
import {listRelatedProducts} from "@components/catalogue/relatedProducts/listRelatedProducts";

export const RelatedProducts = () => {

    return (
        <div className="detail-products">
            <p className="detail-products__title">
                <span>productos</span>
                <span>relacionados</span>
            </p>

            <div className="detail-products__list">
                <div className="detail-products__list-items">
                    {listRelatedProducts.map((product, index) => (
                        // @ts-ignore
                        <a key={index} href={product.link.href} className="item">
                            <img src={product.img} alt={product.description} />
                            <span>{product.category}</span>
                            <span>{product.description}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};
