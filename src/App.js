import Axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";

// Axios resolves promise if data gets successfully fetched
// and rejects promise if data can't get fetched

// When promise is resolved, response object is returned
// When promise is rejected, error object is returned

const App = () => {
  //   Axios.get("https://randomuser.me/api/")
  //     .then((res) => {
  //       let name = res.data.results[0].name;
  //       name = `${name.first} ${name.last}`;
  //       console.log(name);
  //     })
  //     .catch((err) => console.log(err.message));

  const [index, setIndex] = useState(0);

  async function fetchData() {
    const img = document.querySelector("img");
    const h1 = document.querySelector("h1");
    const h2 = document.querySelector("h2");
    const p_email = document.querySelector(".email");
    const p_phone = document.querySelector(".phoneNo");
    const p_address = document.querySelector(".address");

    try {
      const { data } = await Axios.get("https://randomuser.me/api/");
      const userInfo = data.results[0];

      let imgURL = userInfo.picture?.large;
      let name = userInfo.name;
      name = `${name?.first} ${name?.last}`;

      let email = userInfo.email;
      let location = userInfo.location;
      let address = `${location?.street?.number} ${location?.street?.name}, ${location?.city}, ${location?.state}, ${location?.country}`;

      let phoneNo = userInfo.phone;

      h1.textContent = `User ${index + 1}`;
      img.setAttribute("src", imgURL);
      h2.textContent = name;
      p_email.textContent = `Email : ${email}`;
      p_phone.textContent = `Phone No : ${phoneNo}`;
      p_address.textContent = `Address : ${address}`;
    } catch ({ message }) {
      h1.textContent = message;
    }
  }

  useEffect(() => {
    fetchData();
  });

  return (
    <>
      <h1></h1>
      <img src="" alt="" />
      <h2></h2>
      <p className="email"></p>
      <p className="phoneNo"></p>
      <p className="address"></p>

      <div className="btns">
        <button className="reset btn" onClick={() => setIndex(0)}>
          Reset
        </button>
        <button className="next btn" onClick={() => setIndex(index + 1)}>
          Next
        </button>
      </div>
    </>
  );
};

export default App;
