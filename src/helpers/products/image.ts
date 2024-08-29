import {ICarousel, SwiperModules} from "@dathaplus/storybook";

export const carrouselImageProps: Omit<ICarousel, 'Element' | 'data'> = {
    slidesPerView: 1,
    className: 'product_detail__carrousel',
    centeredSlides: true,
    spaceBetween: 20,
    modules: [SwiperModules.Navigation, SwiperModules.Pagination],
    navigation: {
        prevEl: `#product_detail_arrow_left`,
        nextEl: `#product_detail_arrow_right`,
    },
    loop:true,
    pagination: {
        clickable: true,
        renderBullet: (index: number, className: any) => {
            return '<span class="' + className + ' swiper-carrousel-dots-color"></span>';
        },
    },
};
