"use client";
import { Button } from "@heroui/react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#020617]/70 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-6xl mx-auto flex justify-between items-center h-[72px] px-6">
        
        <h1 className="text-xl font-bold text-white">
          Gazi Md Salauddin<span className="text-blue-500">.</span>
        </h1>

        <div className="hidden md:flex gap-6 text-sm text-gray-400">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#skills" className="hover:text-white">Skills</a>
        </div>

        <Button color="primary" radius="sm">
          Hire Me
        </Button>

      </div>
    </nav>
  );
}