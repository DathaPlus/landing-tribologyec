import Bar from "@components/Bar";
import {Navbar} from "@components/navbar";
import React from "react";
import {getWordpressPosts} from "@server/common/getWordpressPosts";
import blogHeroBanner from "@assets/img/internal_blog_hero.png"

import {Hero} from "@components/base";
import {redirect} from "next/navigation";
import {RedirectType} from "next/dist/client/components/redirect";
import {IBlogInformation, IInternalBlogPage} from "@interfaces/app/IInternalBlogPage";
import {IWordpressPageData} from "@interfaces/server/common/IGetWordpressPageData";
import {BlogContent} from "@components/app/blog";
import {Contacts} from "@components/contact";


const SingleBlogPage = async({ params }: IInternalBlogPage) => {
    const blogData = await getWordpressPosts<IBlogInformation>({slug:params.slug});
    if(blogData&&blogData?.length===0){
        redirect("/404",RedirectType.replace)
    }

        const {acf} =blogData?blogData[0]: {} as IWordpressPageData<IBlogInformation>
return(<main>
    <Bar />
    <Navbar />
    <Hero title={acf.title} image={blogHeroBanner.src} style={{ height: '55vh', left: '0',textAlign:"center" }} />
    <BlogContent blogContent={acf.blogContent}/>
    <Contacts />
</main>)
}
export default SingleBlogPage
