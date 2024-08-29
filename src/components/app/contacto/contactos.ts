import { INetworkCard } from "@interfaces/cards/INetworkCard";
import email from 'public/icon/email.png'
import whasap from 'public/icon/whasap.png'
import telefono from 'public/icon/telefono.png'
import email2 from 'public/icon/email2.png'

export const contactos: INetworkCard[] = [
    {
        icon: email.src, 
        title: "Correo",  
        description: 'Envíanos un email a: ventas@tribologyec.com',  
        link: { 
            href: 'mailto:ventas@tribologyec.com', 
            target: '_blank', 
            rel: 'noopener noreferrer' 
        },
    },
    {
        icon: whasap.src, 
        title: "+593 9936 45779",  
        description: 'Escríbenos directamente via WhatsApp',  
        link: { 
            href: 'https://wa.me/593993645779', 
            target: '_blank', 
            rel: 'noopener noreferrer' 
        },
    },
    {
        icon: telefono.src, 
        title: "+593 2382 3894",  
        description: 'Llama a nuestros expertos',  
        link: { 
            href: 'tel:+59323823894', 
            target: '_blank', 
            rel: 'noopener noreferrer' 
        },
    },
    
    {
        icon: email2.src, 
        title2: "LMontalvan@tribologyec.com",  
        description: 'Trabaja con nosotros',  
        link: { href: 'mailto:LMontalvan@tribologyec.com', target: '_self' },
    },
    
]
    
