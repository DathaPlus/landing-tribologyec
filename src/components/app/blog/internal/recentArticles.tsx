'use client';
import { Icon } from '@dathaplus/storybook';
import React, { FC } from 'react';
import { IBlogInformation } from '@interfaces/app/IInternalBlogPage';
import { IWordpressPageData } from '@interfaces/server/common/IGetWordpressPageData';
import Link from 'next/link';
import moment from 'moment-timezone';
export const RecentArticles: FC<{ content?: IWordpressPageData<IBlogInformation>[] }> = ({
  content,
}) => {
  return (
    <div className="articles__container">
      <div className="articles__container__line">
        <div className="articles__container__line__content articles__container__line__content__icon">
          <Icon name="menu" size={35} />
          <span>Artículos recientes</span>
        </div>
        {content?.map((blog, index) => (
          <div key={index} className="articles__container__line__content">
            <Link href={`/blog/${blog.slug}`} className="articles__container__line__content__title">
              {blog.acf.title}
            </Link>
            <Link
              href={`/blog/${blog.slug}`}
              className="articles__container__line__content__paragraph"
            >
              {blog.acf.shortDescription}
            </Link>
            <div className="articles__container__line__content__caption">
              {blog.acf.author}&emsp;|&emsp;
              {moment(blog.date).tz('America/Guayaquil').locale('es').format('LL')}
            </div>
          </div>
        ))}

      </div>
        <Link href="/blog" className="articles__container__line__button">
            Ver más
        </Link>
    </div>
  );
};
