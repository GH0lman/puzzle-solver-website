import { FaGithub, FaLinkedin } from "react-icons/fa6"
import { SITE_NAME } from "../constants";

export default function Footer() {
  const currentYear = new Date().getUTCFullYear()
  return (
    <footer>
      <p>&copy; {currentYear} {SITE_NAME}. All rights reserved.</p>
      <nav className="footer-links">
        <a href="https://github.com/GH0lman" target="_blank" rel="noopener noreferrer">
          <FaGithub />
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/george-holman-366a7b350" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
          LinkedIn
        </a>
      </nav>
    </footer>
  )
}