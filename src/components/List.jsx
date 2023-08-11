// css
import "./List.css";
// icons
import { FaTrash } from "react-icons/fa6";
function List({ people, deletePerson }) {
  return (
    <ul>
      {people &&
        people.map((person) => {
          const { name, image, id, age } = person;
          return (
            <li key={id}>
              <img src={image} alt="Peson image" width={75} height={75} />
              <div>
                <h3>{name}</h3>
                <p>{age} years</p>
              </div>
              <FaTrash
                onClick={() => {
                  deletePerson(id);
                }}
                className="trash-icon"
              />
            </li>
          );
        })}
    </ul>
  );
}

export default List;
