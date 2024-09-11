import Image from 'next/image';
import Whatsapp from '/public/icon/whatsapp.svg';

export const StickyButton = () => {
  return (
    <a href="https://wa.me/593993645779" target="_blank" rel="noreferrer" className="sticky_button">
      <Image src={Whatsapp} alt="Whatsapp - TribologyEC" />
    </a>
  );
};
