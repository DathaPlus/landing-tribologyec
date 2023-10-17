export interface IInternalBlogPage {
    params:{
        slug:string
    }
}

export interface IBlogInformation {
    title:string;
    shortDescription:string;
    author:string;
    images:{
        desktop:string;
        mobile:string;
    },
    blogContent:IBlogContent[]
}
export interface IBlogContent{
    title:string;
    sectionElement:('imagen'|'parrafo')[];
    imageProps:IImageProps;
    paragraphProps:IParagraphProps;
}
export interface IImageProps{
    imageUrl:string;
    imagePosition:'right'|'left';

}
export interface IParagraphProps {
    textContent?:string;
    listContent?: { texto:string }[];
    isList:boolean;
}
