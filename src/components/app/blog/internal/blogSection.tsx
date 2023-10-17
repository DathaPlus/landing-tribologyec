import { FC } from 'react';
import { IBlogContent } from '@interfaces/app/IInternalBlogPage';
import Image from 'next/image';

export const BlogSection: FC<IBlogContent & { index: number }> = ({
  title,
  index,
  imageProps,
  paragraphProps,
    sectionElement
}) => {
  return (
    <div className="blog_section__container">
      <div className="blog_section__content">
          {sectionElement.includes("imagen")&&<div className="blog_section__content__image" style={{float: imageProps.imagePosition}}>
              <Image src={imageProps.imageUrl} alt={title + index} fill/>
          </div>}
        <div className="blog_section__content__paragraph">
          {title && (
            <span className="blog_section__title">
              {index}. {title}
            </span>
          )}
            {sectionElement.includes("parrafo")&&<><p>
                {paragraphProps.textContent}
            </p>
                <ul>
                    {paragraphProps.listContent?.map((p,i)=>(<li className="blog_section__content__list" key={i}>
                        {p.texto}
                    </li>))}
                </ul>
            </>
            }
        </div>
      </div>
    </div>
  );
};

