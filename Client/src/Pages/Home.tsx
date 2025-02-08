import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "../Components/Navbar";
import ProjectList from "../Components/ProjectList.tsx";
import TimerButton from "../Components/TimerButton";

const queryClient = new QueryClient();

const Home: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex bg-zinc-800">
        <Navbar />
        <div className="flex-1 p-4">
          <header className="flex justify-end items-center mb-4">
            <div className="flex items-center">
              <button className="bg-blue-500 text-white rounded px-4 py-2 mr-2">
                로그인
              </button>
              <TimerButton />
            </div>
          </header>
          <ProjectList />
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default Home;
