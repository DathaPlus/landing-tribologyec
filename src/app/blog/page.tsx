import React from 'react';
import Bar from "@components/Bar";
import {Navbar} from "@components/navbar";
import {Hero} from "@components/services";
import {Footer} from "@components/footer";
import {Contacts} from "@components/contact";

const BlogPage = () => {
    return (
        <main>
            <Bar />
            <Navbar />
            <Hero />
            <Contacts />
            <Footer />
        </main>
    );
};

export default BlogPage;
