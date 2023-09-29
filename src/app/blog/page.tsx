import React from 'react';
import Bar from '@components/Bar';
import { Navbar } from '@components/navbar';
import { Hero } from '@components/base';
import { Footer } from '@components/footer';
import { Contacts } from '@components/contact';
import { Comments, WhyWork } from '@components/app/blog';
import blogHeroBanner from '@assets/img/blog_hero_bg.png';
import { getWordpressPosts } from '@server/common/getWordpressPosts';
import { ICommentCard } from '@interfaces/cards/ICommentCard';

const BlogPage = async () => {
  const blogData = await getWordpressPosts<ICommentCard>();

  return (
    <main>
      <Bar />
      <Navbar />
      <Hero
        title="blog"
        image={blogHeroBanner.src}
        style={{ height: '45vh', right: '0%', alignItems: 'center' }}
      />
      <WhyWork />
      <Comments blogs={blogData} />
      <Contacts />
      <Footer />
    </main>
  );
};

export default BlogPage;
