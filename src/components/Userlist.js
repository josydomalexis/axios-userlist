import React, { useState } from "react";
import { GrantWaterFall } from "../config/Utils";
import { useNavigate } from "react-router-dom";
import UserNav from "./UserNav";
import "./Userlist.css";

function Userlist() {
  const { users, isLogsedIn, setLoggedIn } = GrantWaterFall();
  const navigate = useNavigate();

  const [editRowNumber, setEditRowNumber] = useState(0);

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
                          value={user.name}
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
                          value={user.email}
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
                          <span class="input-group-text">
                            <i className="bi bi-signpost-fill"></i>
                          </span>
                          <input
                            className="form-control"
                            id="street"
                            name="street"
                            type="text"
                            value={user.address.street}
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
                          <span class="input-group-text">
                            <i className="bi bi-house-door-fill"> </i>
                          </span>
                          <input
                            className="form-control"
                            id="suite"
                            name="suite"
                            type="text"
                            value={user.address.suite}
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
                          <span class="input-group-text">
                            <i className="bi bi-buildings-fill"> </i>
                          </span>
                          <input
                            className="form-control"
                            id="city"
                            name="city"
                            type="text"
                            value={user.address.city}
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
                          <span class="input-group-text">
                            <i className="bi bi-geo-alt-fill"> </i>
                          </span>

                          <input
                            className="form-control"
                            id="zipcode"
                            name="zipcode"
                            type="text"
                            value={user.address.zipcode}
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
                      <div class="input-group pb-2">
                        {editRowNumber === user.id ? (
                          <div class="input-group pb-2 mb-1">
                            <span class="input-group-text">Lati</span>
                            <input
                              className="form-control"
                              id="lat"
                              name="lat"
                              type="number"
                              value={user.address.geo.lat}
                            />
                          </div>
                        ) : (
                          <>
                            <i className="bi bi-map-fill pe-1"></i>
                            {user.address.geo.lat}
                          </>
                        )}

                        {editRowNumber === user.id ? (
                          <div class="input-group pb-2">
                            <span class="input-group-text">long</span>
                            <input
                              className="form-control"
                              id="lng"
                              name="lng"
                              type="number"
                              value={user.address.geo.lng}
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
                      <div class="input-group">
                        <input
                          className="form-control"
                          id="phone"
                          name="phone"
                          type="text"
                          value={user.phone}
                        />
                      </div>
                    ) : (
                      user.phone
                    )}
                  </td>
                  <td>
                    {editRowNumber === user.id ? (
                      <div class="input-group">
                        <input
                          className="form-control"
                          id="website"
                          name="website"
                          type="text"
                          value={user.website}
                        />
                      </div>
                    ) : (
                      user.website
                    )}
                  </td>
                  <td>
                    <div className="pb-2 mb-1">
                      {editRowNumber === user.id ? (
                        <div class="input-group">
                          <span class="input-group-text">
                            <i className="bi bi-building-fill"></i>
                          </span>
                          <input
                            className="form-control"
                            id="companyName"
                            name="companyName"
                            type="text"
                            value={user.company.name}
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
                              placeholder="Tagline"
                              id="Tagline"
                              value={user.company.catchPhrase}
                              style={{ height: "100px" }}
                            ></textarea>
                            <label for="floatingTextarea2">Tagline</label>
                          </div>
                        </div>
                      ) : (
                        <>
                          <i class="bi bi-chat-right-heart-fill pe-1"></i>
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
                              value={user.company.bs}
                              style={{ height: "100px" }}
                            ></textarea>
                            <label for="floatingTextarea2">
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
                        <button className="btn btn-success ms-2">Update</button>
                      ) : (
                        <button
                          className="btn btn-warning"
                          onClick={() => setEditRowNumber(user.id)}
                        >
                          Edit
                        </button>
                      )}
                      <button className="btn btn-danger ms-2">Delete</button>
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
