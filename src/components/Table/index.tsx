"use client";
import { Link } from "@/i18n";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { requestDef } from "../types";

export default function Table() {
  const [users, setUsers] = useState<requestDef[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
    setCurrentPage(1); // Reset pagination when filtering
  };

  // Filter users based on search input
  const filteredUsers =
    searchInput.length > 0
      ? users.filter((user) =>
          user.name.toLowerCase().includes(searchInput.toLowerCase())
        )
      : users;

  // Logic to calculate pagination
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  // console.log(indexOfFirstUser,indexOfLastUser,currentUsers)

  // Logic to change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <main>
      <div className="container">
        <h5 className="text-center mt-2">Request List</h5>
        <div className="d-flex justify-content-between mb-4">
          <div>
            <Link href="/Add-User">
              <button className="btn btn-primary" type="submit">
                Create
              </button>
            </Link>
          </div>
          <div
            className="input-group justify-content-end"
            style={{ maxWidth: "210px" }}
          >
            <span className="input-group-text">
              <img src="./icons/search.svg" />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search here"
              value={searchInput}
              onChange={handleChange}
            ></input>
          </div>
        </div>
        <table className="table mt-3 table-bordered">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Area</th>
              <th scope="col">Full Name</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Alternate Phone Number</th>
              <th scope="col">Email ID</th>
              <th scope="col">Full Address</th>
              <th scope="col">Number of Cats with Gender</th>
              <th scope="col">Cats Below 1 year</th>
              <th scope="col">Previous Illness</th>
              <th scope="col">Cat's Pictures </th>
              <th scope="col">Vaccination</th>
              <th scope="col">Adhar Card</th>
              <th scope="col">Pan Card</th>
              <th scope="col">Transport</th>
              <th scope="col">GPS Location</th>
              <th scope="col">Traps</th>
              <th scope="col">Post Op</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user, index) => (
              <tr key={index}>
                <td>{indexOfFirstUser + index + 1}</td>
                <td>{user.location}</td>
                <td>{user.name}</td>
                <td>{user.number}</td>
                <td>{user.alt_number}</td>
                <td>{user.email}</td>
                <td>{`${user.full_address.house}, ${user.full_address.area}, ${user.full_address.landmark}, ${user.full_address.pincode}`}</td>
                <td>{`Male: ${user.cats.male}, Female: ${user.cats.female}`}</td>
                <td>{user.number}</td>
                <td>{user.number}</td>
                <td>{user.number}</td>
                <td>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                    ></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination controls */}
        <nav style={{ display: "flex", justifyContent: "center" }}>
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <a
                className="page-link"
                href="#"
                onClick={() => paginate(currentPage - 1)}
                aria-label="Previous"
              >
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            {Array.from({
              length: Math.ceil(filteredUsers.length / usersPerPage),
            }).map((_, index) => (
              <li
                key={index}
                className={`page-item ${
                  currentPage === index + 1 ? "active" : ""
                }`}
              >
                <Link
                  onClick={() => paginate(index + 1)}
                  className="page-link"
                  href="#"
                >
                  {index + 1}
                </Link>
              </li>
            ))}
            <li
              className={`page-item ${
                currentPage === Math.ceil(filteredUsers.length / usersPerPage)
                  ? "disabled"
                  : ""
              }`}
            >
              <a
                className="page-link"
                href="#"
                onClick={() => paginate(currentPage + 1)}
                aria-label="Next"
              >
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
}
