import GalleryImage from "./GalleryImage";
import AddButton from "./AddButton";
import { fetchSetups } from "@/app/Utilities/fetch";
import { Suspense, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { SetupProps } from "../../Types/SetupProps";
import { useSetupStore } from "../../Hooks/setupHook";
import { useEffect } from "react";
import Loading from "../Loading";
export default function GalleryGrid() {
  const setups = useSetupStore((state) => state.setups);
  const loadData = useSetupStore((state) => state.loadData);
  // const [isLoading, setIsLoading] = useState(true);

  const { isLoading, data } = useQuery({
    queryKey: ["setups"],
    queryFn: async () => {
      const data = await fetchSetups();
      loadData(data);
      return data;
    },
  });

  if (isLoading) return <Loading />;
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
