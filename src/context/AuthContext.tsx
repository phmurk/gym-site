"use client";

import {
  createContext,
  useState,
  useEffect,
  useContext,
  type ReactNode,
} from "react";

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  bookings: any[];
  createdAt: string;
  reviews?: any[];
}

interface AuthContextType {
  user: User | null;
  isAuthModalOpen: boolean;
  openAuthModal: () => void;
  closeAuthModal: () => void;
  login: (email: string, pass: string) => string | null;
  register: (
    name: string,
    email: string,
    phone: string,
    pass: string,
  ) => string | null;
  logout: () => void;
  addBooking: (booking: any) => void;
  addReview: (text: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  useEffect(() => {
    const storedUserId = localStorage.getItem("currentUser");
    if (storedUserId) {
      const allUsers: User[] = JSON.parse(
        localStorage.getItem("users") || "[]",
      );
      const foundUser = allUsers.find((u) => u.id === storedUserId);
      if (foundUser) setUser(foundUser);
    }
  }, []);

  const openAuthModal = () => setIsAuthModalOpen(true);
  const closeAuthModal = () => setIsAuthModalOpen(false);

  const register = (
    name: string,
    email: string,
    phone: string,
    pass: string,
  ) => {
    const allUsers: User[] = JSON.parse(localStorage.getItem("users") || "[]");
    if (allUsers.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
      return "Пользователь с таким email уже существует";
    }

    const newUser: User = {
      id: "user_" + Date.now().toString(),
      name,
      email,
      phone,
      password: pass,
      bookings: [],
      reviews: [],
      createdAt: new Date().toLocaleDateString("ru-RU"),
    };

    allUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(allUsers));
    localStorage.setItem("currentUser", newUser.id);
    setUser(newUser);
    closeAuthModal();
    return null;
  };

  const login = (email: string, pass: string) => {
    const allUsers: User[] = JSON.parse(localStorage.getItem("users") || "[]");
    const foundUser = allUsers.find(
      (u) =>
        u.email.toLowerCase() === email.toLowerCase() && u.password === pass,
    );
    if (!foundUser) return "Неверный email или пароль";

    localStorage.setItem("currentUser", foundUser.id);
    setUser(foundUser);
    closeAuthModal();
    return null;
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
  };

  const addBooking = (booking: any) => {
    if (!user) return;
    const updatedUser = { ...user, bookings: [...user.bookings, booking] };
    setUser(updatedUser);
    updateUserInStorage(updatedUser);
  };

  const addReview = (text: string) => {
    if (!user) return;

    const newReview = {
      id: Date.now().toString(),
      name: user.name,
      text,
      date: new Date().toLocaleDateString("ru-RU"),
    };

    const updatedUser = {
      ...user,
      reviews: [...(user.reviews || []), newReview],
    };
    setUser(updatedUser);
    updateUserInStorage(updatedUser);

    const globalReviews = JSON.parse(
      localStorage.getItem("globalReviews") || "[]",
    );
    globalReviews.unshift(newReview);
    localStorage.setItem("globalReviews", JSON.stringify(globalReviews));
  };

  const updateUserInStorage = (updatedUser: User) => {
    const allUsers: User[] = JSON.parse(localStorage.getItem("users") || "[]");
    const userIndex = allUsers.findIndex((u) => u.id === updatedUser.id);
    if (userIndex !== -1) {
      allUsers[userIndex] = updatedUser;
      localStorage.setItem("users", JSON.stringify(allUsers));
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthModalOpen,
        openAuthModal,
        closeAuthModal,
        login,
        register,
        logout,
        addBooking,
        addReview,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("useAuth должен использоваться внутри AuthProvider");
  return context;
};
