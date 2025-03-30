"use client";
import { BaseStude } from "@/components/base";
import { Students } from "@/data/people";
const Page = () => {
    return (
     <div className="container mx-auto">

     <BaseStude people = {Students}/>

     </div>
    );
}

export default Page;
