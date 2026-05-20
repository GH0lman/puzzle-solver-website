import { useState } from "react"
import { Link }  from "react-router-dom"
import { SITE_NAME } from "../constants";
import { FaPuzzlePiece } from "react-icons/fa6"

interface NavItem {
  label: string;
  link: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about" },
  { label: "Puzzles", link: "/puzzles",
    children: [
      { label: "Sudoku", link: "/puzzles/sudoku" },
      { label: "Crossword", link: "/puzzles/crossword" },
      { label: "Minesweeper", link: "/puzzles/minesweeper" },
      { label: "Nonogram", link: "/puzzles/nonogram" },
      { label: "Wordle", link: "/puzzles/wordle" },
      { label: "Solitaire", link: "/puzzles/solitaire" },
    ],
  },
]

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <header>
      <div className="header-logo">
        <Link to="/" className="header-logo-link">
          <span className="header-logo-icon"><FaPuzzlePiece /></span>
          <span className="header-logo-name">{SITE_NAME}</span>
        </Link>
      </div>
      <nav className="header-nav">
        {navItems.map((item) => (
          <div
            key={item.label}
            className="nav-item"
            onMouseEnter={() => item.children && setOpenDropdown(item.label)}
            onFocus={() => item.children && setOpenDropdown(item.label)}
            onMouseLeave={() => setOpenDropdown(null)}
            onBlur={() => setOpenDropdown(null)}
          >
            <Link to={item.link} className="nav-link">
              {item.label}
              {item.children && <span className="nav-arrow">▾</span>}
            </Link>
            {item.children && openDropdown === item.label && (
              <div className="nav-dropdown">
                {item.children.map((child) => (
                  <Link key={child.label} to={child.link} className="nav-dropdown-link">
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </header>
  )
}