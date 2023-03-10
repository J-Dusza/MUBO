import XIcon from "../icons/XIcon";
import NavLink from "./NavLink";

type Props = {
  onClick: React.Dispatch<React.SetStateAction<any>>;
  navLinks: Array<string>;
};

const MobileMenu = ({ onClick, navLinks }: Props) => (
  <div
    className=" w-full h-full fixed left-0 top-0 bg-black z-40 flex flex-col text-highlight2
   font-bold"
  >
    <button onClick={onClick} className="m-7 self-end text-white">
      <XIcon />
    </button>
    <div className=" flex flex-col px-10 items-start text-2xl space-y-2">
      {navLinks.map((link, index) => (
        <NavLink key={index} link={link} mobile={true} />
      ))}
    </div>
  </div>
);

export default MobileMenu;
