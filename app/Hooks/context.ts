import { createContext } from "react";
export type GlobalContent = {
  modal: boolean;
  setModal: (c: string) => void;
};

export type TypeContextType = {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};
export const Context = createContext<TypeContextType>({
  modal: false,
  setModal() {},
});
