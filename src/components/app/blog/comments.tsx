'use client';
import React from 'react';
import { CommentCard } from '@components/cards';
import commentImage from '@assets/img/blog/comment-image.png';
import commentImageMobile from '@assets/img/blog/comment-image-mobile.png';
import {Button} from "@dathaplus/storybook";

export const Comments = () => {
  const comments: any[] = [];

  for (let i = 0; i < 9; i++) {
    comments.push({
      image: {
        desktop: commentImage.src,
        mobile: commentImageMobile.src,
      },
      title: 'El Papel Vital de Tribologyec en la Industria',
      description:
        'El personal es el capital más importante de una empresa o negocio de cualquier tipo. ¡Descubre aquí como lograrlo con éxito!',
    });
  }

  return (
    <div className="comments-cards">
      <div className="comments-cards__input-container">
        <input placeholder="Te ayudamos con tu busqueda" />
      </div>
      <div className="comments-cards__container">
        {comments.map((comment, index) => (
          <CommentCard {...comment} key={index} />
        ))}
      </div>
      <Button type="button" size="normal" style="primary"  >
          <span style={{padding: "0 4em"}}>Leer más</span>
      </Button>
    </div>
  );
};
