import redOutlinedMail from '@assets/img/icons/red-outlined-mail.svg';
import redOutlinedWhatsapp from '@assets/img/icons/red-outlined-whatsapp.svg';
import redOutlinedCall from '@assets/img/icons/red-outlined-call.svg';
import redOutlinedPaper from '@assets/img/icons/red-outlined-paper.svg';
import {HeroProps} from "@interfaces/base/layout/HeroProps";
import contactHeroBanner from "@assets/contacto/image.png";

export const contactPageIcons = {
  redOutlinedMail: redOutlinedMail,
  redOutlinedWhatsapp: redOutlinedWhatsapp,
  redOutlinedCall: redOutlinedCall,
  redOutlinedPaper: redOutlinedPaper,
};

export const contactHeroData:HeroProps={
  title:"CONTACTO",
  image:contactHeroBanner.src
}
