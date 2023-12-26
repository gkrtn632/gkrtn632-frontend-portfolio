import { http, HttpResponse } from 'msw'
import { faker } from "@faker-js/faker";

export const handlers = [
    http.get('/api/bannerList', ({ request }) => {
        return HttpResponse.json(
            [
                {
                    bannerId: 1,
                    imageSrc: faker.image.urlLoremFlickr(),
                },
                {
                    bannerId: 2,
                    imageSrc: faker.image.urlLoremFlickr(),
                },
                {
                    bannerId: 3,
                    imageSrc: faker.image.urlLoremFlickr(),
                },
                {
                    bannerId: 4,
                    imageSrc: faker.image.urlLoremFlickr(),
                },
                // {
                //     bannerId: 5,
                //     imageSrc: faker.image.urlLoremFlickr(),
                // },
                // {
                //     bannerId: 6,
                //     imageSrc: faker.image.urlLoremFlickr(),
                // },
                // {
                //     bannerId: 7,
                //     imageSrc: faker.image.urlLoremFlickr(),
                // },
                // {
                //     bannerId: 8,
                //     imageSrc: faker.image.urlLoremFlickr(),
                // },
            ]
        )
    }),
    http.get('/api/productList', ({ request }) => {
        const url = new URL(request.url)
        const cursor = parseInt(url.searchParams.get('cursor') as string) || 0
        return HttpResponse.json(
            [
                {
                    productId: cursor + 1,
                    productName: `${cursor + 1}번째 상품`,
                    imageSrc: faker.image.urlLoremFlickr(),
                    price: 100000,
                    isLastPage: cursor + 1 > 200,
                },
                {
                    productId: cursor + 2,
                    productName: `${cursor + 2}번째 상품`,
                    imageSrc: faker.image.urlLoremFlickr(),
                    price: 100000,
                    isLastPage: cursor + 2 > 200,
                },
                {
                    productId: cursor + 3,
                    productName: `${cursor + 3}번째 상품`,
                    imageSrc: faker.image.urlLoremFlickr(),
                    price: 100000,
                    isLastPage: cursor + 3 > 200,
                },
                {
                    productId: cursor + 4,
                    productName: `${cursor + 4}번째 상품`,
                    imageSrc: faker.image.urlLoremFlickr(),
                    price: 100000,
                    isLastPage: cursor + 4 > 200,
                },
                {
                    productId: cursor + 5,
                    productName: `${cursor + 5}번째 상품`,
                    imageSrc: faker.image.urlLoremFlickr(),
                    price: 100000,
                    isLastPage: cursor + 5 > 200,
                },
            ]
        )
    }),
];