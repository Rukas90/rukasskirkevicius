import clsx from "clsx"
import { NavLink } from "react-router-dom"

interface NavItemProps extends Pick<React.ComponentProps<"div">, "children"> {
  to: string
}
const NavItem = ({ to, children }: NavItemProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        clsx(
          "relative",
          isActive
            ? `
            text-stone-800 
            after:bg-stone-500
            after:-bottom-2
            `
            : `
            text-stone-400 
            hover:text-stone-800 
              after:bg-transparent 
            hover:after:bg-stone-400
            after:bottom-0
            hover:after:-bottom-2
            `,
          `
          after:content-['']
          after:absolute
          after:left-1/2
          after:-translate-x-1/2
          after:size-1
          after:rounded-full
          after:origin-left
          after:transition-all
          after:will-change-transform
          `,
        )
      }
    >
      <li>{children}</li>
    </NavLink>
  )
}
export default NavItem
