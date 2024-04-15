import Image from 'next/image'

export default function Nav() {
  return (
    <ul className="nav bg-dark justify-content-center">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">
          <Image
            src="/icons/logo.png"
            width={70}
            height={40}
            alt=""
          />
        </a>
      </li>
    </ul>
  );
}
