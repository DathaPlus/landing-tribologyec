'use client';
import React, { Fragment, useRef, useState } from 'react';
import { CommentCard } from '@components/cards';
import { Button } from '@dathaplus/storybook';
import Image from 'next/image';
import grayOutlinedSearch from '@assets/img/icons/gray-outlined-search.svg';
import { IWordpressPageData } from '@interfaces/server/common/IGetWordpressPageData';
import { ICommentCard } from '@interfaces/cards/ICommentCard';
import { useFormik } from 'formik';
import { getWordpressPosts } from '@server/common/getWordpressPosts';

export const Comments = ({ blogs = [] }: { blogs?: IWordpressPageData<ICommentCard>[] }) => {
  const scrollRef = useRef({
    page: 2,
    end: blogs.length < 9,
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [comments, setComments] = useState<IWordpressPageData<ICommentCard>[]>(blogs || []);
  const { handleSubmit, values, handleChange } = useFormik({
    initialValues: {
      search: '',
    },
    onSubmit: async (values) => {
      setLoading(true);
      const blogData = await getWordpressPosts<ICommentCard>({ ...values });
      setComments(blogData || []);
      setLoading(false);
    },
  });

  return (
    <div className="comments-cards">
      <form onSubmit={handleSubmit} className="comments-cards__input-container">
        <input
          name="search"
          value={values.search}
          onChange={handleChange}
          placeholder="Te ayudamos con tu busqueda"
        />
        <button>
          <Image src={grayOutlinedSearch.src} alt="search-icon" width={23} height={27} />
        </button>
      </form>
      {loading ? <h1>Cargando datos ...</h1> : null}
      {!loading && !comments.length ? (
        <h1>Sin datos</h1>
      ) : (
        <div className="comments-cards__container">
          {comments?.map((comment, index) => (
            <CommentCard
              {...(comment.acf as any)}
              key={index}
              redirection={`/blog/${comment.slug}`}
            />
          ))}
        </div>
      )}
      {!scrollRef.current.end && !loading ? (
        <Button
          type="button"
          size="normal"
          style="primary"
          onClick={async () => {
            const blogData =
              (await getWordpressPosts<ICommentCard>({
                ...values,
                page: scrollRef.current.page,
                perPage: 9,
              })) || [];
            setComments([...comments, ...blogData]);
            scrollRef.current.page++;
            if (blogData?.length < 9) scrollRef.current.end = true;
          }}
        >
          <span style={{ padding: '0 4em' }}>Leer más</span>
        </Button>
      ) : (
        <Fragment />
      )}
    </div>
  );
};
