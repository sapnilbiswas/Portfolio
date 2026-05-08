import { FiGithub } from 'react-icons/fi'
import { SiLeetcode, SiCodeforces, SiDrupal } from 'react-icons/si'

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        &copy; {new Date().getFullYear()} Sapnil Biswas &mdash; Crafted with passion & code
      </p>
      <div className="footer-links">
        <a className="footer-link" href="https://github.com/sapnilbiswas" target="_blank" rel="noopener noreferrer">
          <FiGithub style={{ marginRight: 4, verticalAlign: 'middle' }} /> GitHub
        </a>
        <a className="footer-link" href="https://leetcode.com/u/Sapnil_Biswas/" target="_blank" rel="noopener noreferrer">
          <SiLeetcode style={{ marginRight: 4, verticalAlign: 'middle' }} /> LeetCode
        </a>
        <a className="footer-link" href="https://codeforces.com/profile/Sap__" target="_blank" rel="noopener noreferrer">
          <SiCodeforces style={{ marginRight: 4, verticalAlign: 'middle' }} /> Codeforces
        </a>
        <a className="footer-link" href="https://www.drupal.org/u/sapnil_biswas" target="_blank" rel="noopener noreferrer">
          <SiDrupal style={{ marginRight: 4, verticalAlign: 'middle' }} /> Drupal
        </a>
      </div>
    </footer>
  )
}
