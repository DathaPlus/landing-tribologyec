import {BlogSection, ContentPage} from "@components/app/blog";
import {FC} from "react";
import { IBlogInformation} from "@interfaces/app/IInternalBlogPage";
import {RecentArticles} from "@components/app/blog/internal/recentArticles";
import {getWordpressPosts} from "@server/common/getWordpressPosts";

export const BlogContent:FC<Pick<IBlogInformation, "blogContent">> = async ({blogContent}) => {
    const blogData = await getWordpressPosts<IBlogInformation>({order:"desc","per_page":3})
    let count=0;
    return(
      <div className="internal_blog__container">
        <div className="internal_blog__container__content">
          <ContentPage blogContent={blogContent}/>
            {blogContent.map((data,index)=>(<BlogSection key={index} index={data.title?++count:count} {...data} />))}
        </div>

          <div className="internal_blog__container__articles">
              <RecentArticles content={blogData}/>
        </div>

  </div>
  )
}
