export default function Nav() {
  return (
    <ul className="nav bg-dark justify-content-center mb-2">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">
          <img
            src="./icons/Logo.jpg"
            style={{
              height: "50px",
              width: "90px",
            }}
          />
        </a>
      </li>
    </ul>
  );
}
