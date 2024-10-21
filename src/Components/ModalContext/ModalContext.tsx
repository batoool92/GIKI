import { createContext, useState } from "react";



interface userInfo {
    name: string,
    email: string,
    language: string,
    country: string,
    interests: string[]
}

const defaultUserData: userInfo = {
    name: '',
    email: '',
    language: '',
    country: '',
    interests: [],
  };


  export const ModalContext = createContext<{
    user: userInfo;
    setUserInfo: React.Dispatch<React.SetStateAction<userInfo>>;
  }>({
    user: defaultUserData,
    setUserInfo: () => {},
  });

  export const ModalUserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUserInfo] = useState<userInfo>(defaultUserData);

    return <ModalContext.Provider value={{ user, setUserInfo }}>
        {children}
    </ModalContext.Provider>
}

