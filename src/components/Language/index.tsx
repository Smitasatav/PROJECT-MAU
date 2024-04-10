import Link from "next/link";

export default function Lang() {
  return (
    <>
      <div className="background-container">
        <h4 className="fw-bold text-center my-3">
          Please select your language
        </h4>
        <div className="d-flex justify-content-around">
          <div>
            <Link href="/Guidelines">
              <button type="button" className="btn btn-primary btn-lg">
                ENGLISH
              </button>
            </Link>
          </div>
          <div>
            <Link href="/Guidelines">
              <button type="button" className="btn btn-primary btn-lg">
                HINDI
              </button>
            </Link>
          </div>
          <div>
            <Link href="/Guidelines">
              <button type="button" className="btn btn-primary btn-lg">
                MARATHI
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
