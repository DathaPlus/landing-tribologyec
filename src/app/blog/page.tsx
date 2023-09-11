import React from 'react';
import Bar from '@components/Bar';
import { Navbar } from '@components/navbar';
import { Hero } from '@components/base';
import { Footer } from '@components/footer';
import { Contacts } from '@components/contact';
import { Comments, WhyWork } from '@components/app/blog';
import blogHeroBanner from '@assets/img/blog_hero_bg.png';

const BlogPage = () => {
  return (
    <main>
      <Bar />
      <Navbar />
      <Hero title="blog" image={blogHeroBanner.src} />
      <WhyWork />
      <Comments />
      <Contacts />
      <Footer />
    </main>
  );
};

export default BlogPage;
