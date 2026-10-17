"use client";

import {useState} from "react";
import {CamperFilters} from "@/types/camper";
import {useInfiniteQuery} from "@tanstack/react-query";
import {getCampers} from "@/lib/api/api";
import css from "./CatalogСlient.module.css";
import Button from "@/components/ui/Button/Button";
import CamperCard from "@/components/catalog/CamperCard/CamperCard";
import Filters from "@/components/catalog/Filters/Filters";
import Loader from "@/components/ui/Loader/Loader";
import NoCampers from "@/components/catalog/NoCampers/NoCampers";

const PER_PAGE = 4;

export default function CatalogClient () {
    const [filters, setFilters] = useState<CamperFilters>({});
    const [resetKey, setResetKey] = useState(0);

    const {
        data,
        isFetching,
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
    const handleReset = ()=> {
        setFilters({});
        setResetKey((key) => key + 1);
    }

    return (
        <div className={css.page}>
            <div className={css.layout}>
                <h1 className="visually-hidden">Campers catalog</h1>
                <Filters key={resetKey} onSearch={setFilters} />
                <section className={css.results}>
                    {isError && <p className={css.message}>Something went wrong. Please try again later.</p>}
                    {!isFetching && !isError && campers.length === 0 && (
                        <NoCampers onReset={handleReset}/>
                    )}

                    {campers.length > 0 && (
                        <ul className={css.list}>
                            {campers.map((camper) => (
                                <li key={camper.id}>
                                    <CamperCard camper={camper} />
                                </li>
                            ))}
                        </ul>
                    )}

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
            {isFetching && <Loader />}
        </div>
    );
};