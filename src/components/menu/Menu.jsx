import React from "react";
import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen })
 {
    console.log(menuOpen);
  return (
    <div className={menuOpen ? "menuactive" : "menu"}>
      <ul> 
        <li>
          <a href="#intro" onClick={()=>{
              setMenuOpen(false)
          }}>Home</a>
        </li>
        <li>
          <a href="#portfolio" onClick={()=>{
              setMenuOpen(false)
          }}>Portfolio</a>
        </li>
        <li>
          <a href="#work" onClick={()=>{
              setMenuOpen(false)
          }}>Work</a>
        </li>
        <li>
          <a href="#testinomial" onClick={()=>{
              setMenuOpen(false)
          }}>Testinomials</a>
        </li>
        <li>
          <a href="#contact" onClick={()=>{
              setMenuOpen(false)
          }}>Contact</a>
        </li>
      </ul>
    </div>
  );
}