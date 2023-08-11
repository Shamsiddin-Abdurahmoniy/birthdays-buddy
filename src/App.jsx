// hooks
import { useState } from "react";
// data
import data from "./data/db";
// components
import List from "./components/List";
function App() {
  const [people, setPeople] = useState(data);
  function deletePerson(id) {
    const filtered_person = people.filter((person) => {
      return person.id !== id;
    });
    setPeople(filtered_person);
  }
  return (
    <div className="container">
      <h1>{people ? people.length : 0} Birthdays today</h1>
      <List people={people} deletePerson={deletePerson} />
      {people.length == 0 && (
        <button
          className="refresh-btn"
          onClick={() => {
            setPeople(data);
          }}
        >
          Refresh
        </button>
      )}
      {people.length != 0 && (
        <button
          className="clear-btn"
          onClick={() => {
            setPeople([]);
          }}
        >
          Clear All
        </button>
      )}
    </div>
  );
}

export default App;
