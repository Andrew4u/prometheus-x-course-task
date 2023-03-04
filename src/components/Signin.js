import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./signin.css";

import { useNavigate } from "react-router-dom";

function Signin() {
  const [username, setUsername] = useState("");
  const isDisabled = username.length < 4 || username.length > 16;

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isDisabled) {
      localStorage.setItem("username", username);
      navigate("/book-list");
    }
  };

  return (
    <main id="singin">
      <img src="./avatar.png" alt="Avatar" className="singin" />
      <form
        className="form row singin"
        action="/handling-form-page"
        method="post"
      >
        <div className="text-center">
          <label htmlFor="name">
            <b>Username</b>
          </label>
        </div>
        <input
          className="signin form-control"
          placeholder="Username"
          type="text"
          id="name"
          name="user_name"
          value={username}
          onChange={handleUsernameChange}
        />
        <button
          className="signin btn btn-outline-success"
          type="submit"
          disabled={isDisabled}
          onClick={handleSubmit}
        >
          Sign-in
        </button>
      </form>
    </main>
  );
}
// function Signin() {
//   const [username, setUsername] = useState("");

//   const isDisabled = username.length < 4 || username.length > 16;

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//   };

//   return (
//     <main id="signin">
//       <img src="./avatar.png" alt="Avatar" className="signin" />
//       <form
//         className="form row signin"
//         action="/handling-form-page"
//         method="post"
//       >
//         <div className="text-center">
//           <label htmlFor="name">
//             <b>Username</b>
//           </label>
//         </div>
//         <input
//           className="signin form-control"
//           placeholder="Username"
//           type="text"
//           id="name"
//           name="user_name"
//           value={username}
//           onChange={handleUsernameChange}
//         />
//         <Link to="/book-list">
//           <button
//             className="signin btn btn-outline-primary"
//             type="submit"
//             disabled={isDisabled}
//           >
//             Sign-in
//           </button>
//         </Link>
//       </form>
//     </main>
//   );
// }

export default Signin;