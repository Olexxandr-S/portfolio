import { FunctionComponent } from "react";
import { Category } from "../types";

export const NavItem: FunctionComponent<{
  value: Category | "all";
  handlerFilterCategory: Function;
  active: string;
}> = ({ value, handlerFilterCategory, active }) => {
  let className = "cursor-pointer hover:text-green capitalize";
  if (active === value) className += " text-green";

  return (
    <li className={className} onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  );
};

const ProjectsNavbar: FunctionComponent<{
  handlerFilterCategory: Function;
  active: string;
}> = (props) => {
  return (
    <div className="flex space-x-3 px-3 py-2 list-none overflow-x-auto">
      <NavItem value="all" {...props} />
      <NavItem value="react" {...props} />
      <NavItem value="django" {...props} />
      <NavItem value="express" {...props} />
      <NavItem value="mongo" {...props} />
      <NavItem value="node" {...props} />
    </div>
  );
};

export default ProjectsNavbar;
function handlerFilterCategory(value: string): void {
  throw new Error("Function not implemented.");
}
