import React from "react";
import { api } from "~/utils/api";

export default function index() {
  const data = api.category.getAll.useQuery().data;
  console.log(data);
  return (
    <div>
      <div>
        <div className="mx-auto grid w-10/12 grid-cols-2 gap-1 py-10  lg:grid-cols-4  2xl:grid-cols-6">
          {data
            ? data?.map((item) => {
                return (
                  <div key={item.id}>
                    <div className="py-5">
                      <div className="relative mx-auto max-h-[550px] max-w-[350px] cursor-pointer bg-slate-400 xl:max-h-full xl:max-w-full">
                        <div className="pb-4 pt-1">
                          <p className=" text-sm font-thin">{item.name}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            : "Loading..."}
        </div>
      </div>
    </div>
  );
}
