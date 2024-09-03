import React from 'react';
import { Bar, Contacts, Footer, Navbar } from '../../components';
import { ButtonClient } from '@components/common/buttonClient/ButtonClient';

const TerminosYCondiciones = () => (
  <main>

    <Bar />
    <Navbar />
    <p className="catalogue-products__title" style={{paddingTop: "30px", letterSpacing: "20px", fontWeight:"bold"}}>
      Términos y condiciones
    </p>
    <br />
    <div className="terminos">
      <p>Términos Y Condiciones De Protección De Datos</p>
    <br />
    <div className='subtitle'>
    <p><strong>1. Introducción</strong></p>
    </div>
    <p>En Tribologyec, Nos Comprometemos A Proteger Y Respetar La Privacidad De Nuestros Usuarios. Este Documento
      Detalla Los Términos Y Condiciones Bajo Los Cuales Manejamos, Almacenamos Y Protegemos Los Datos Personales Que
      Nos Proporciona. Al Utilizar Nuestros Servicios, Usted Acepta Los Términos Descritos En Esta Política De
      Protección De Datos.</p>
      <br />
    <p><strong>2. Recopilación De Datos Personales</strong>.</p>
    <p>Tribologyec Puede Recopilar Ciertos Datos Personales Necesarios Para La Prestación De Nuestros Servicios, Como
      Nombre, Dirección De Correo Electrónico, Número De Teléfono, Y Cualquier Otra Información Relevante Para Su
      Interacción Con Nuestra Marca. Estos Datos Serán Recopilados De Forma Legal, Justa Y Con Su Consentimiento
      Explícito.</p>
      <br />
    <p><strong>3. Uso De Datos Personales</strong></p>
    <p>Los Datos Personales Que Recopilamos Serán Utilizados Únicamente Para Los Fines Para Los Cuales Fueron
      Proporcionados, Tales Como:</p>
      <br />
    <ul className='parrafo'>
      <li>Procesar Pedidos O Solicitudes De Nuestros Productos O Servicios.</li>
      <li>Mejorar La Calidad De Nuestros Servicios.</li>
      <li>Enviar Información Relevante Sobre Nuestros Productos, Promociones O Actualizaciones.</li>
      <li>Cumplir Con Obligaciones Legales O Regulatorias.</li>
    </ul>
    <br />
    <p><strong>4. Protección De Datos</strong></p>
    <p>En Tribologyec, Tomamos Muy En Serio La Seguridad De Sus Datos. Implementamos Medidas De Seguridad Técnicas Y
      Organizativas Para Proteger Sus Datos Personales Contra El Acceso No Autorizado, Alteración, Divulgación O
      Destrucción. Sin Embargo, Es Importante Que Usted Entienda Que, Aunque Hacemos Nuestro Mejor Esfuerzo Para
      Proteger Sus Datos, Ninguna Transmisión De Datos A Través De Internet Es Completamente Segura.</p>
      <br />
    <p><strong>5. Compartición De Datos</strong></p>
    <p>No Compartimos, Vendemos Ni Cedemos Sus Datos Personales A Terceros Sin Su Consentimiento Previo, Excepto En Las
      Siguientes Circunstancias:</p>
      <br />
    <ul className='parrafo'>
      <li>Si Es Requerido Por Ley O En Respuesta A Solicitudes Legales De Las Autoridades Gubernamentales.</li>
      <li>Para Proteger Los Derechos, Propiedad O Seguridad De Tribologyec, Nuestros Usuarios O El Público.</li>
    </ul>
    <br />
    <p><strong>6. Derechos Del Usuario</strong></p>
    <p>Usted Tiene Derecho A Acceder, Corregir, Actualizar O Solicitar La Eliminación De Sus Datos Personales En
      Cualquier Momento. Si Desea Ejercer Alguno De Estos Derechos, Por Favor Contáctenos A Través De La Información
      Proporcionada En Nuestra Página Web.</p>
      <br />
    <p><strong>7. Retención De Datos</strong></p>
    <p>Los Datos Personales Serán Retenidos Por El Tiempo Que Sea Necesario Para Cumplir Con Los Fines Descritos En
      Estos Términos Y Condiciones, A Menos Que La Ley Exija O Permita Un Período De Retención Más Largo.</p>
      <br />
    <p><strong>8. Modificaciones A Los Términos Y Condiciones</strong></p>
    <p>Tribologyec Se Reserva El Derecho De Modificar Estos Términos Y Condiciones En Cualquier Momento. Cualquier
      Cambio Será Publicado En Nuestra Página Web Y, En Su Caso, Le Notificaremos por correo electrónico al continuar utilizando nuestros servicios después de que se hayan realizado cambios</p>
      <p><strong>Usted Acepta Los Nuevos Términos Y Condiciones.</strong></p>
    </div>

    <div className={"terminos__btn"}>
      <ButtonClient size="normal" style="primary" path="/">
        Regresar al inicio
      </ButtonClient>
    </div>

    <Contacts />
    <Footer />
  </main>
)

export default TerminosYCondiciones;