import { create } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";

// types
interface User {
  userId: number;
  userName: string;
  name: string;
}

interface LoginProps {
  userName: string;
  password: string;
}

// Store Interface
interface SessionState {
  user: undefined | User;
  login: (values: LoginProps) => void;
}
export const useSessionStore = create<SessionState>()(
  persist<SessionState>(
    (set) => ({
      // Values
      user: undefined,

      // Actions
      login: async (values: LoginProps) => {
        console.log("login: ", values);

        // Call api for login
        const response = await {
          userId: 1,
          userName: "test",
          name: "test name",
          token: "dasdas",
        };

        // Set Session Token on local storage
        localStorage.setItem(
          import.meta.env.VITE_NEUROPHXZE_NEXUS_ACCESS_TOKEN,
          response?.token
        );

        // Set User
        set((state) => ({
          ...state,
          user: {
            name: response.name,
            userName: response.userName,
            userId: response.userId,
          },
        }));
      },
    }),
    {
      name: "session-storage",
      getStorage: () => localStorage,
    } as PersistOptions<SessionState>
  )
);
