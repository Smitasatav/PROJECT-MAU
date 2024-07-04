import { Link } from "@/i18n";
// import "./style.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <Link href="/about" className="footer-link">
        <i>Powered by Grahan Foundation</i>
      </Link>
    </footer>
  );
}
