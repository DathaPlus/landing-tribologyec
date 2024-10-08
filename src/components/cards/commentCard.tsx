'use client';
import React from 'react';
import Image from 'next/image';
import { ICommentCard } from '@interfaces/cards/ICommentCard';

export const CommentCard = ({ title, shortDescription, images }: ICommentCard) => {
  return (
    <div className="comment-card">
      <div className="comment-card__image-container">
        <Image
          className="comment-card__image-container__desktop"
          src={images?.desktop}
          alt="comment-image-card"
          width={320}
          height={450}
        />
        <Image
          className="comment-card__image-container__mobile"
          src={images?.mobile}
          alt="comment-image-card"
          width={360}
          height={267}
        />
        <div className="comment-card__image-opacity" />
      </div>
      <p className="comment-card__title">{title}</p>
      <p className="comment-card__description">{shortDescription}</p>
    </div>
  );
};
