/*
 * Author:          Rudy Lucas
 * filename:        Header.tsx
 * Date:            06.05.2023
 * Description:     This component represents the website's header and its
 *                  functionality.
 */

import "../css/Header.css";
import { MdPermIdentity } from "react-icons/md";

export const Header = () => {
  return (
    <>
      <div className="w-screen bg-slate-300 flex flex-row-reverse">
        <div className="m-4 flex justify-evenly items-center gap-1">
          <button className="flex items-center space-x-2 border-solid border-2 border-sky-500 rounded-lg p-2">
            <MdPermIdentity size={20} />
            <span>Login</span>
          </button>
          <button className="flex items-center space-x-2 border-solid border-2 border-sky-500 rounded-lg p-2">
            <span>Try it free</span>
          </button>
        </div>
      </div>
    </>
  );
};
