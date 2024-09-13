"use client";
import Link from "next/link";
import { Icons } from "./fragments/Icon";
import usePageTitle from "./hooks";
import Image from "next/image";

type Props = {};

const PageNotFound = (props: Props) => {
    usePageTitle("Going somewhere?");
    return (
        <div className="flex flex-col h-screen w-screen items-center justify-center gap-5">
            <Link href={'/'} className="flex gap-2 items-center justify-center ">
            <span className="h-[120px] w-[120px] items-center justify-center flex bg-zinc-50 rounded-full ">
            <p className="text-2xl  text-muted-foreground">404</p>
            </span>

           <span className="border-r h-8"></span>

             <Image src={'/KC.png'} width={200} height={80} alt="Kitchen and Closet"/>                
            </Link>

            {/* 404 div and seperator */}
            <div className="flex gap-2 h-[4%]">
                <p className="justify-center inset-x-0 text-muted-foreground">Requested route does not exist</p>
            </div>
        </div>
    );
};

export default PageNotFound;
