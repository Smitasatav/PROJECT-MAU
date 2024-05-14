import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer bg-body-secondary mt-auto py-3">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-8">
            <ul className="list-unstyled d-flex justify-content-end">
              <li className="me-3">
                <Link href="/about">
                  <i>Powered by Grahan Foundation</i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
