"use client";

import {useState} from "react";
import {CamperFilters} from "@/types/camper";
import {useInfiniteQuery} from "@tanstack/react-query";
import {getCampers} from "@/lib/api/api";
import css from "./Catalog.client.module.css";
import Loading from "@/app/loading";
import Button from "@/components/ui/Button/Button";

const PER_PAGE = 4;

export const CatalogClient = () => {
    const [filters, setFilters] = useState<CamperFilters>({});

    const {
        data,
        isLoading,
        isError,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
    } = useInfiniteQuery({
        queryKey: ["campers", filters],
        queryFn: ({pageParam}) =>
            getCampers({...filters, page: pageParam, perPage: PER_PAGE}),
        initialPageParam: 1,
        getNextPageParam: (lastPage) =>
            lastPage.page < lastPage.totalPages
                ? lastPage.page + 1
                : undefined
    });

    const campers = data?.pages.flatMap((page) => page.campers) ?? [];
    const handleClick = () => {
        fetchNextPage();
    }

    return (
        <div className={css.page}>
            <div className={css.layout}>
                <h1 className="visually-hidden">Campers catalog</h1>

                <section className={css.results}>
                    {isLoading && <Loading/>}
                    {isError && <p className={css.message}>Something went wrong. Please try again later.</p>}

                    {!isLoading && !isError && campers.length === 0 && (
                        <p className={css.message}>No campers found for your request.</p>
                    )}

                    {campers.length > 0 && (
                        <ul className={css.list}>
                            {campers.map((camper) => (
                                <li key={camper.id}>
                                    {/*<CamperCard camper={camper} />*/}
                                </li>
                            ))}
                        </ul>
                    )}

                    {isFetchingNextPage && <Loading/>}
                    {hasNextPage && !isFetchingNextPage && (
                        <Button
                            variant="secondary"
                            className={css.loadMore}
                            onClick={handleClick}>
                            Load more
                        </Button>
                    )}
                </section>
            </div>
        </div>
    )
}