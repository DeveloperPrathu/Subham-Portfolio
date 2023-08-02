import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="container pt-8">
      <div className="flex justify-between items-center">
        <div className="text-xl font-medium">Subham</div>

        <ul className={`gap-10 lg:gap-16 ${isMobileMenuOpen ? "" : "hidden"} md:flex`}>
          <li className="menuLink"><a href="#home">Home</a></li>
          <li className="menuLink"><a href="#Project">Projects</a></li>
          <li className="menuLink"><a href="#Skill">Skills</a></li>
          <li className="menuLink"><a href="#Testimonial">Testimonials</a></li>
          <li className="menuLink"><a href="#Contact">Contact</a></li>
        </ul>

        <AiOutlineMenu className="md:hidden" size={30} onClick={toggleMobileMenu} />
      </div>
    </div>
  );
};

export default Navbar;
