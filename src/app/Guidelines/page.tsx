export default function Guidelines() {
  return (
    <div className="container">
      <h5 className="fw-bold text-center my-3">Terms and Conditions</h5>
      <ol className="list-group list-group-numbered my-2">
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            Surgeries would happen at ART Manjari.
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            You are sending your cats without any blood test or Tri cat vaccine
            is at your risk.
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            Surgeries for Female cat would be free but for male cat, they would
            be chargeable at a subsidized cost of 700.
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            . Form will not be accepted without id proof and GPS location.
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            If the form is not filled out within 3 days you get it, you will be
            blocked and banned.
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            We have limited free slots across Pune and PCMC and we do it on a
            first come first serve basis.
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            Don't constantly call us and pressure us for urgent dates.
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            If your cat is pregnant and if there is an emergency reach out to
            other private vets or NGOs.
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            We give anti-rabies to all cats for free and is mandatory.
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            All Cats will be ear clipped and mandatory. If you wish not to ear
            clip you have to send a letter to us.
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
          If you wish to do post-op yourself, you have to bring an e-collar during surgery.
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
          Please send photos of all cats.
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
          Please ensure to take photos during admissions, picking up the cat after surgery, and after release.
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
          Please fill up the below form and we will get back to you with your slot dates.
          </div>
        </li>
      </ol>
      <div className="form-check mt-2">
        <input
          className="form-check-input"
          type="checkbox"
          defaultValue=""
          id="flexCheckChecked"
          defaultChecked=""
        />
        <label className="form-check-label fw-bold" htmlFor="flexCheckChecked">
          I Agree
        </label>
      </div>
      <div className="d-flex justify-content-end my-2">
        <input className="btn btn-primary" type="button" value="Next"></input>
      </div>
    </div>
  );
}
