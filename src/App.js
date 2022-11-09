import Axios from "axios";

// Axios resolves promise if data gets successfully fetched
// and rejects promise if data can't get fetched

const App = async () => {
  //   Axios.get("https://randomuser.me/api/")
  //     .then((res) => {
  //       let name = res.data.results[0].name;
  //       name = `${name.first} ${name.last}`;
  //       console.log(name);
  //     })
  //     .catch((err) => console.log(err.message));

  try {
    const { data } = await Axios.get("https://randomuser.me/api/");
    let name = data.results[0].name;
    name = `${name.first} ${name.last}`;
    console.log(name);
  } catch ({ message }) {
    console.log(message);
  }

  return <h1>API Call</h1>;
};

export default App;
