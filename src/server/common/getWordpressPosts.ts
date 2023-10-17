import { IWordpressPageData } from '@interfaces/server/common/IGetWordpressPageData';
import { IGetWordpressPageDataParams } from '@interfaces/server/common/IGetWordpressPosts';

export const getWordpressPosts = async <ACF = object>(
  params?: IGetWordpressPageDataParams,
): Promise<IWordpressPageData<ACF>[] | undefined> => {
  const url=new URL(`${process.env.BASE_PATH_WORDPRESS_BACKEND}/wp-json/wp/v2/posts`)
  const searchParams= new URLSearchParams(Object.entries(params??{}))
  url.search=searchParams.toString()
  try {
    const response = await fetch(
      url,
      {
        method: 'GET',
        headers: {
          Accept: '*/*',
        },
        next: {
          revalidate: 25,
        },
      },
    );

    if (!response.ok) throw new Error(response.statusText);

    const data: any = await response.json();

    return data.map((page: any) => ({
      id: page?.id,
      date: page?.date,
      modified: page?.modified,
      slug: page?.slug,
      status: page?.status,
      type: page?.type,
      link: page?.link,
      title: page?.title,
      acf: page?.acf,
    }));
  } catch (e) {
    console.error('Error in getWordpressPosts: ', e);

    return undefined;
  }
};
