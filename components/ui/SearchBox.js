import { useRouter } from "next/router";
import { useState } from "react";
import { SearchIcon } from "@heroicons/react/solid";


export default function SearchBox(){
    const [keyword,setKeyword] = useState("");
    const router = useRouter();
    return (
        <div className="form-control">
            <div className="flex space-x-2 justify-center">
                <input type="text" placeholder="Search" className="w-1/5 input input-accent text-gray-900 input-bordered bg-inherit" maxLength={50} onChange={(e) => {
                    if(e.target.value.length > 1){
                       setKeyword(e.target.value)
                    }else{
                        setKeyword("");
                    }
                }}  /> 
                <button title="Search articles" className="btn btn-info" disabled={keyword.length === 0} onClick={() => router.push(`/post/search?q=${keyword}`)}>
                    <SearchIcon className="h5 w-5 text-white" />
                </button>
            </div>
        </div> 
    );
}