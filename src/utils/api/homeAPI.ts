export const getBannerList = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bannerList`, {
        next: {
            tags: ['banner'],
        },
    });

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export const getProductList = async ({ pageParam }: { pageParam: number }) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/productList?cursor=${pageParam}`, {
        next: {
            tags: ['product'],
        },
    });

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}