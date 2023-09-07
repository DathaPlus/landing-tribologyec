import {
  IGetWordpressPageDataParams,
  IWordpressPageData,
} from '@interfaces/server/common/IGetWordpressPageData';

export const getWordpressPageData = async <ACF = object>(
  params: IGetWordpressPageDataParams,
): Promise<IWordpressPageData<ACF> | undefined> => {
  try {
    const { searchParams } = params;

    const response = await fetch(
      `${process.env.BASE_PATH_WORDPRESS_BACKEND}/wp-json/wp/v2/pages?status=private${
        searchParams?.namePage ? `&search=${searchParams?.namePage}` : ''
      }`,
      {
        method: 'GET',
        headers: {
          Authorization: `${process.env.TOKEN_WORDPRESS_BACKEND}`,
          Accept: '*/*',
        },
        next: {
          revalidate: 25,
        },
      },
    );

    if (!response.ok) throw new Error(response.statusText);

    const data: any = await response.json();

    const page = data[0];

    if (!page) return undefined;

    return {
      id: page?.id,
      date: page?.date,
      modified: page?.modified,
      slug: page?.slug,
      status: page?.status,
      type: page?.type,
      link: page?.link,
      title: page?.title,
      acf: page?.acf,
    };
  } catch (e) {
    console.error('Error in getWordpressPageData: ', e);

    return undefined;
  }
};
