import { NavLink } from "react-router-dom";
export default function Nav() {
  return (
      <nav> 
      <div>
        <NavLink to="/lamps">
        <h3>Lamps</h3>
        </NavLink>
        <NavLink to="/lamps/floor">
        <li>Floor</li>
        </NavLink>
        <NavLink to="/lamps/ceiling">
        <li>Ceiling</li>
        </NavLink>
        <NavLink to="/lamps/table">
        <li>Table</li>
        </NavLink>
        
  
        <NavLink to="/candles">
        <h3>Candles</h3>
        </NavLink>
        <NavLink to="/candles/decorative">
        <li>Decorative</li>
        </NavLink>
        <NavLink to="/candles/flameless">
        <li>Flameless</li>
        </NavLink>
        <NavLink to="/candles/celebratory">
        <li>Celebratory</li>
        </NavLink>
 
      </div>
    </nav>
  );
};