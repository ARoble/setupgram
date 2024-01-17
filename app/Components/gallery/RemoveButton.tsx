import { useSession } from "next-auth/react";
import { IoTrashOutline } from "react-icons/io5";
import { SetupProps } from "@/app/Types/SetupProps";

interface RemoveProps {
  handleOnDelete: (id: string) => void;
  setup: SetupProps;
}

export default function RemoveButton({ handleOnDelete, setup }: RemoveProps) {
  const { data: session, status } = useSession();
  if (session?.user?.id != setup.user.id) return;
  return (
    <button
      className="absolute top-1 right-1 bg-white text-primary p-1 rounded-sm z-40"
      onClick={() => handleOnDelete(setup.id)}
    >
      <IoTrashOutline size={16} color="red" />
    </button>
  );
}
