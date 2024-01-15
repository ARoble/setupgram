import { create } from "zustand";
import { SetupProps } from "../Types/SetupProps";
interface SetupState {
  setups: SetupProps[];
  loadData: (setups: []) => void;
  addSetup: (setup: SetupProps) => void;
  addLike: (like: {}, setupId: string) => void;
  removeLike: (likeId: string, userId: string, setupId: string) => void;
  deleteSetupp: (id: string) => void;
}

export const useSetupStore = create<SetupState>((set, get) => ({
  setups: [],
  loadData: (setups) => set(() => ({ setups: setups })),
  addSetup: (setup) => {
    const newsetups = [setup].concat(get().setups);
    set(() => ({ setups: newsetups }));
  },
  addLike: (like: {}, setupId) => {
    const newSetup = get().setups;
    const foundSetup = newSetup.find((setup) => setup.id == setupId);

    foundSetup.likes.push(like);
    set(() => ({ setups: newSetup }));
  },
  removeLike: (likeId, userId, setupId) => {
    const newSetups = get().setups;
    const findSetup = newSetups.find((setup) => setup.id === setupId);
    const newLikes = findSetup.likes.filter((like) => like.userId != userId);
    findSetup.likes = newLikes;
    set(() => ({ setups: newSetups }));
  },
  deleteSetupp: (id) => {
    const remove = get().setups.filter((setup) => setup.id !== id);
    set({ setups: remove });
  },
}));
