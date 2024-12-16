import React from "react";
import Hero from "../components/Hero";
import { FloatingNav } from "../components/ui/FlaotingNav";
import { FaHome } from "react-icons/fa";
import Gridex from "../components/Grid";
import RecentProjects from "src/components/RecentProjects";

export default function Home() {
  return (
    <main className=" relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className=" max-w-7xl w-full">
        <FloatingNav navItems={[
          {name: 'Home', link: '/', icon: <FaHome/>}
        ]}/>
        <Hero /> 
        <Gridex /> 
        <RecentProjects />      
      </div>
    </main>
  );
}
