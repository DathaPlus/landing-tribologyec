import {FC} from "react";
import {IBlogInformation} from "@interfaces/app/IInternalBlogPage";

export const ContentPage:FC<Pick<IBlogInformation, "blogContent">> = ({blogContent}) => {
  const filteredEmptyTitle=blogContent.filter(section=>!!section.title)
  return(
<div className="content_page__container">
<div className="content_page__title">
  Tabla de contenidos
</div>
  {
    filteredEmptyTitle.map((section,index)=>(
        <div key={index} className="content_page__subtitle">
          {index+1}. {section.title}
        </div>
    ))
  }
</div>
  )
}

