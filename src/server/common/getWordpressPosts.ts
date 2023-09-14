import { IWordpressPageData } from '@interfaces/server/common/IGetWordpressPageData';
import { IGetWordpressPageDataParams } from '@interfaces/server/common/IGetWordpressPosts';

export const getWordpressPosts = async <ACF = object>(
  params?: IGetWordpressPageDataParams,
): Promise<IWordpressPageData<ACF>[] | undefined> => {
  try {
    const { page = 1, perPage = 9, search } = params || {};

    const response = await fetch(
      `${
        process.env.BASE_PATH_WORDPRESS_BACKEND
      }/wp-json/wp/v2/posts?per_page=${perPage}&page=${page}${
        params?.search ? `&search=${search}` : ''
      }`,
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
