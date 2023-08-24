import {IHomeData} from "@interfaces/home";

export const getHomePage = async ():  Promise<IHomeData  | undefined> => {
    try {

        const response = await fetch(`${process.env.TRIBOLOGY_BACKEND}/wp-json/wp/v2/pages?status=private`, {
            method: 'GET',
            headers: {
                'Authorization': "Basic YmFja2VuZE1hbmFnZXI6MExXQiBybWU4IFgyTWcgYktRbyB6dU5FIHB1SjQ=",
                'Accept': '*/*',
            },
            next: {
                revalidate: 25
            }
        });

        if (!response.ok) throw new Error(response.statusText);

        const data: any = await response.json();

        let jsonHome = data[0]?.content?.rendered?.replace("</code>", "<code>");

        jsonHome = jsonHome.split("<code>");

        jsonHome = JSON.parse(jsonHome[1]);

        return {
            ...jsonHome,
            ourServices: {
                ...jsonHome.ourServices,
                carrousel: jsonHome.ourServices.carrousel.map((service: any) => ({
                    ...service,
                    icon: {
                        name: service.icon,
                        size: 30,
                        svg: {
                            stroke: '#fff',
                        },
                    }
                })),
            },
        } as IHomeData;
    } catch (e) {
        console.error("Error in getHomePage: ", e);

        return undefined;
    }
}