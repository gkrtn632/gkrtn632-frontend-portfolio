import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { InfiniteQueryObserverResult } from "@tanstack/react-query";

interface IUseObserver {
    fetchNextPage: () => Promise<InfiniteQueryObserverResult>;
    hasNextPage: boolean;
    isFetching: boolean;
    threshold?: number;
    delay?: number;
}

const useObserver = (props: IUseObserver) => {
    const { fetchNextPage, hasNextPage, isFetching, threshold = 0, delay = 0 } = props;
    const { ref, inView } = useInView({
        threshold,
        delay,
    });

    useEffect(() => {
        if (inView && !isFetching && hasNextPage) {
            fetchNextPage();
        }
    }, [inView, isFetching, hasNextPage, fetchNextPage]);

    return ref;
}

export default useObserver;