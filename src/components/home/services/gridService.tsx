import React, {FC} from 'react';
import {Icon} from "@dathaplus/storybook";
import {IHomeServicesProd} from "@interfaces/home";
import {ArrowsCarousel} from "@components/common/arrows";

export const GridService: FC<IHomeServicesProd> = ({ product, className }: IHomeServicesProd) =>
  (
    <ul className="services__list-services">
      {product.map(({icon, title, desc}, idx) => (
        <li key={idx}>
          {icon && <Icon {...icon} />}
          <strong>{title}</strong>
          <span>{desc}</span>
        </li>
      ))}
<li>
  <ArrowsCarousel className={className?.left} id={'product_arrow_left'} type="left" position={0} />
  <ArrowsCarousel className={className?.right} id={'product_arrow_right'} type="right" position={170}/>
</li>

    </ul>


  )
