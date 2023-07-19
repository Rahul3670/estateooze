import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
export default function Header() {
  const [pageState, setPageState] = useState("Sign in");
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile");
      } else {
        setPageState("Sign in");
      }
    });
  }, [auth]);
  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-40">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img
            src="data:image/png;base64,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"
            
            alt="logo"
            className="h-6 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/offers") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/offers")}
            >
              Offers
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                (pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) &&
                "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/profile")}
            >
              {pageState}
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
