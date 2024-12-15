import React from "react";
import { HeroSection } from "../components/core/HeroSection";
import { SkillSection } from "../components/core/SkillSection";
import { ProjectSecion } from "../components/core/ProjectSecion";
import { ContactSection } from "../components/core/ContactSection";
import { Footer } from "../components/common/Footer";

export const Home = () => {
  return (
    <>
      <div className="bg-white">
        {/* Hero Section */}
        <HeroSection />

        {/* Skills Section */}
        <SkillSection />

        {/* Projects Section */}
        <ProjectSecion />

        {/* Contact Section */}
        <ContactSection />
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};
