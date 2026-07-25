import { Outlet, Link, NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";

const routeNames: Record<string, string> = {
  "/maths": "Maths",
  "/english": "English",
  "/before-number": "Before Number",
  "/after-number": "After Number",
  "/between-number": "Between Number",
  "/ascending-order": "Ascending Order",
  "/descending-order": "Descending Order",
  "/missing-number": "Missing Number",
  "/number-comparison": "Number Comparison",
  "/skip-counting": "Skip Counting",
  "/number-names": "Number Names",
  "/addition-single": "Single-Digit Addition",
  "/subtraction-single": "Single-Digit Subtraction",
  "/addition-double": "Double-Digit Addition",
  "/subtraction-double": "Double-Digit Subtraction",
  "/place-value": "Place Value (Tens & Ones)",
  "/time": "Time (Clocks)",
  "/multiplication": "Multiplication",
  "/shapes": "Count the Shapes",
  "/patterns": "Complete the Pattern"
};

export default function Layout() {
  const location = useLocation();
  const pageName = routeNames[location.pathname] || "";

  useEffect(() => {
    document.title = pageName ? `${pageName} - Examiner` : "Examiner";
  }, [pageName]);

  const isMathRoute = location.pathname !== "/" && location.pathname !== "/english";

  return (
    <>
      <nav className="navbar no-print">
        <div className="nav-container">
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <img src={`${import.meta.env.BASE_URL}favicon.svg`} alt="Examiner Logo" style={{ width: '28px', height: '28px', display: 'block' }} />
            <span className="nav-brand">Examiner</span>
            {pageName && <span style={{color: '#94a3b8', fontWeight: 400, marginLeft: '4px'}}>/ {pageName}</span>}
          </Link>
          <div className="nav-links">
            <NavLink to="/maths" className={isMathRoute ? "nav-link active" : "nav-link"}>Maths</NavLink>
            <NavLink to="/english" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>English</NavLink>
          </div>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}
