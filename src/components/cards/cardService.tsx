import React, { FC } from 'react';
import {ICardProduct, ICardServiceProd, IHomeServices, IHomeServicesProd} from "@interfaces/home";
import {listServices} from "@data/home";
import {Icon} from "@dathaplus/storybook";

export const CardService: FC<ICardServiceProd> = ({icon, title, desc}) => (

        <div className="services__list-services">
            <div style={{display: "flex", flexWrap: "wrap"}}>
                <div style={{width: '250px', height: '350px'}}>
                  <li>
                    {icon && <Icon {...icon} />}
                    <strong>{title}</strong>
                    <span>{desc}</span>
                  </li>
                </div>
                {/*<div style={{width: '250px', height: '50px'}}>{icon && <Icon {...icon} />}
                  <strong>{title}</strong>
                  <span>{desc}</span></div>
                <div style={{width: '250px', height: '50px'}}>HOLA</div>
                <div style={{width: '250px', height: '50px'}}>HOLA</div>
                <div style={{width: '250px', height: '50px'}}>HOLA</div>*/}
                {/*<li>
                    {icon && <Icon {...icon} />}
                    <strong>{title}</strong>
                    <span>{desc}</span>
                </li>*/}
            </div>

        </div>

        /*{/!*<ul className="services__list-services">
            {listServices.map(({icon, title, desc}, idx) => (
            <li key={idx}>
                {icon && <Icon {...icon} />}
                <strong>{title}</strong>
                <span>{desc}</span>
            </li>
        ))}

            <li>
                {icon && <Icon {...icon} />}
                <strong>{title}</strong>
                <span>{desc}</span>
            </li>
        </ul>*!/}

        {/!*<div>
        <img src={img} alt="services"/>
        <span>{title}</span>
        <p>{description}</p>
    </div>*!/}*/




)
