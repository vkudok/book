export type DataType = {
    id: number;
    name: string;
    description: {
        text: string;
        images: ImagesType[]
    };
    links: string;
};

type ImagesType = {
    id: number;
    link: string;
};