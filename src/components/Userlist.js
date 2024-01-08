import React, { useState, useEffect } from "react";
import { GrantWaterFall } from "../config/Utils";
import { useNavigate } from "react-router-dom";
import UserNav from "./UserNav";
import "./Userlist.css";

function Userlist() {
  const {
    users,
    setUsers,
    isLogsedIn,
    setLoggedIn,
    editRowNumber,
    setEditRowNumber,
    getData,
  } = GrantWaterFall();
  const navigate = useNavigate();

  const [currentUserData, setCurrentUserData] = useState({
    id: "",
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    city: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentUserData((user) => {
      let personData = { ...user };
      if (
        name === "street" ||
        name === "suite" ||
        name === "city" ||
        name === "zipcode"
      ) {
        personData.address[name] = value;
      } else if (name === "lat" || name === "lng") {
        personData.address.geo[name] = value;
      } else if (name === "companyName") {
        personData.company.name = value;
      } else if (name === "catchPhrase" || name === "bs") {
        personData.company[name] = value;
      } else {
        personData = { ...user, [name]: value };
      }
      return personData;
    });
  };

  const editRow = (id, userData) => {
    setEditRowNumber(id);
    setCurrentUserData(userData);
  };

  const handleUpdate = async (id) => {
    console.log(id);
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "PUT",
      body: JSON.stringify(currentUserData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then(getData(setUsers))
      .catch((err) => {
        console.log(err);
      });
    // setUsers(json);
  };

  const handleDelete = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(console.log("deleted"));
  };

  useEffect(() => {
    getData(setUsers);
  }, []);

  return (
    <>
      <UserNav />
      <div className="container-fluid mt-0 p-0">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Phone</th>
              <th scope="col">Website</th>
              <th scope="col">Company</th>
              {isLogsedIn ? <th scope="col">Actions</th> : ""}
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr
                  key={index}
                  className={editRowNumber === user.id ? "active" : ""}
                >
                  <th
                    scope="row"
                    className={editRowNumber === user.id ? "fs-4" : ""}
                  >
                    {user.id}
                  </th>
                  <td>
                    {editRowNumber === user.id ? (
                      <div className="input-group">
                        <input
                          className="form-control"
                          id="name"
                          name="name"
                          type="text"
                          value={currentUserData.name}
                          onChange={handleChange}
                        />
                      </div>
                    ) : (
                      user.name
                    )}
                  </td>
                  <td>{user.username}</td>
                  <td>
                    {editRowNumber === user.id ? (
                      <div className="input-group">
                        <input
                          className="form-control"
                          id="email"
                          name="email"
                          type="email"
                          value={currentUserData.email}
                          onChange={handleChange}
                        />
                      </div>
                    ) : (
                      user.email
                    )}
                  </td>
                  <td className="address-col">
                    <div>
                      {editRowNumber === user.id ? (
                        <div className="input-group pb-2">
                          <span className="input-group-text">
                            <i className="bi bi-signpost-fill"></i>
                          </span>
                          <input
                            className="form-control"
                            id="street"
                            name="street"
                            type="text"
                            value={currentUserData.address.street}
                            onChange={handleChange}
                          />
                        </div>
                      ) : (
                        <>
                          <i className="bi bi-signpost-fill pe-1"></i>
                          {user.address.street}
                        </>
                      )}
                    </div>
                    <div className="mt-1">
                      {editRowNumber === user.id ? (
                        <div className="input-group pb-2">
                          <span className="input-group-text">
                            <i className="bi bi-house-door-fill"> </i>
                          </span>
                          <input
                            className="form-control"
                            id="suite"
                            name="suite"
                            type="text"
                            value={currentUserData.address.suite}
                            onChange={handleChange}
                          />
                        </div>
                      ) : (
                        <>
                          <i className="bi bi-house-door-fill pe-1"></i>
                          {user.address.suite}
                        </>
                      )}
                    </div>
                    <div className="mt-1">
                      {editRowNumber === user.id ? (
                        <div className="input-group pb-2">
                          <span className="input-group-text">
                            <i className="bi bi-buildings-fill"> </i>
                          </span>
                          <input
                            className="form-control"
                            id="city"
                            name="city"
                            type="text"
                            value={currentUserData.address.city}
                            onChange={handleChange}
                          />
                        </div>
                      ) : (
                        <>
                          <i className="bi bi-buildings-fill pe-1"></i>
                          {user.address.city}
                        </>
                      )}
                    </div>
                    <div className="mt-1">
                      {editRowNumber === user.id ? (
                        <div className="input-group pb-2">
                          <span className="input-group-text">
                            <i className="bi bi-geo-alt-fill"> </i>
                          </span>

                          <input
                            className="form-control"
                            id="zipcode"
                            name="zipcode"
                            type="text"
                            value={currentUserData.address.zipcode}
                            onChange={handleChange}
                          />
                        </div>
                      ) : (
                        <>
                          <i className="bi bi-geo-alt-fill pe-1"></i>
                          {user.address.zipcode}
                        </>
                      )}
                    </div>
                    <div className="mt-1">
                      <div className="input-group pb-2">
                        {editRowNumber === user.id ? (
                          <div className="input-group pb-2 mb-1">
                            <span className="input-group-text">Lati</span>
                            <input
                              className="form-control"
                              id="lat"
                              name="lat"
                              type="number"
                              value={currentUserData.address.geo.lat}
                              onChange={handleChange}
                            />
                          </div>
                        ) : (
                          <>
                            <i className="bi bi-map-fill pe-1"></i>
                            {user.address.geo.lat}
                          </>
                        )}

                        {editRowNumber === user.id ? (
                          <div className="input-group pb-2">
                            <span className="input-group-text">long</span>
                            <input
                              className="form-control"
                              id="lng"
                              name="lng"
                              type="number"
                              value={currentUserData.address.geo.lng}
                              onChange={handleChange}
                            />
                          </div>
                        ) : (
                          user.address.geo.lng
                        )}
                      </div>
                    </div>
                  </td>
                  <td>
                    {editRowNumber === user.id ? (
                      <div className="input-group">
                        <input
                          className="form-control"
                          id="phone"
                          name="phone"
                          type="text"
                          value={currentUserData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    ) : (
                      user.phone
                    )}
                  </td>
                  <td>
                    {editRowNumber === user.id ? (
                      <div className="input-group">
                        <input
                          className="form-control"
                          id="website"
                          name="website"
                          type="text"
                          value={currentUserData.website}
                          onChange={handleChange}
                        />
                      </div>
                    ) : (
                      user.website
                    )}
                  </td>
                  <td>
                    <div className="pb-2 mb-1">
                      {editRowNumber === user.id ? (
                        <div className="input-group">
                          <span className="input-group-text">
                            <i className="bi bi-building-fill"></i>
                          </span>
                          <input
                            className="form-control"
                            id="companyName"
                            name="companyName"
                            type="text"
                            value={currentUserData.company.name}
                            onChange={handleChange}
                          />
                        </div>
                      ) : (
                        <>
                          <i className="bi bi-building-fill pe-1"></i>
                          {user.company.name}
                        </>
                      )}
                    </div>
                    <div className="pb-2 mb-1">
                      {editRowNumber === user.id ? (
                        <div className="input-group">
                          <div className="form-floating">
                            <textarea
                              className="form-control"
                              placeholder="catchPhrase"
                              id="catchPhrase"
                              name="catchPhrase"
                              value={currentUserData.company.catchPhrase}
                              onChange={handleChange}
                              style={{ height: "100px" }}
                            ></textarea>
                            <label htmlFor="floatingTextarea2">
                              catchPhrase
                            </label>
                          </div>
                        </div>
                      ) : (
                        <>
                          <i className="bi bi-chat-right-heart-fill pe-1"></i>
                          Tagline
                          {user.company.catchPhrase}
                        </>
                      )}
                    </div>

                    <div>
                      {editRowNumber === user.id ? (
                        <div className="input-group">
                          <div className="form-floating">
                            <textarea
                              className="form-control"
                              placeholder="bs"
                              id="bs"
                              name="bs"
                              value={currentUserData.company.bs}
                              onChange={handleChange}
                              style={{ height: "100px" }}
                            ></textarea>
                            <label htmlFor="floatingTextarea2">
                              Business Slogan
                            </label>
                          </div>
                        </div>
                      ) : (
                        <>
                          <i className="bi bi-tag-fill pe1"></i> BS
                          {user.company.bs}
                        </>
                      )}
                    </div>
                  </td>
                  {isLogsedIn ? (
                    <td>
                      {editRowNumber === user.id ? (
                        <button
                          className="btn btn-success ms-2"
                          onClick={() => handleUpdate(user.id)}
                        >
                          Update
                        </button>
                      ) : (
                        <button
                          className="btn btn-warning"
                          onClick={() => editRow(user.id, user)}
                        >
                          Edit
                        </button>
                      )}
                      <button
                        className="btn btn-danger ms-2"
                        onClick={() => handleDelete(user.id)}
                      >
                        Delete
                      </button>
                    </td>
                  ) : (
                    ""
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Userlist;
