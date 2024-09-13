"use client";
import { useEffect } from "react";

const usePageTitle = (title: string) => {
    useEffect(() => {
        const currentTitle = document.title;
        const newTitle = ` ${title} · Collections`;
        document.title = newTitle;
        return () => {
            document.title = currentTitle;
        };
    }, [title]);
};

export default usePageTitle;
