import GalleryImage from "./GalleryImage";
import AddButton from "./AddButton";
import { fetchSetups } from "@/app/Utilities/fetch";
import { Suspense } from "react";
import { useQuery } from "@tanstack/react-query";
import { SetupProps } from "@/app/Types/setupProps";
export default function GalleryGrid() {
  const { isLoading, data: setups } = useQuery({
    queryKey: ["setups"],
    queryFn: () => fetchSetups(),
  });

  if (isLoading) return <h1>Loading...</h1>;
  return (
    <div className="">
      <div className="columns-1 sm:columns-2 md:columns-2 lg:columns-3 gap-4 space-y-4 p-3 md:p-0 ">
        <Suspense fallback={"loading..."}>
          {setups.map((setup: SetupProps, index: number) => (
            <GalleryImage setup={setup} key={index} />
          ))}
        </Suspense>
      </div>
      <AddButton />
    </div>
  );
}
