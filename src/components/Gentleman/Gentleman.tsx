import { useState } from "react";
import { GentlemanInfo } from "../../types/GentlemanInfo/GentlemanInfo";

type Props = {
  gentlemen: GentlemanInfo[];
};

export function Gentleman({ gentlemen }: Props) {
  const [selected, setSelect] = useState(Boolean);

  const handleClick = (item: GentlemanInfo) => {
    item.selected = !item.selected;
    console.log(item.selected, selected);
    setSelect(item.selected);
  };

  return (
    <main className="main">
      <ul className="gentlemen">
        {gentlemen.map((item) => (
          <li key={item.id} className="gentleman">
            <div className="gentleman__avatar-container">
              <img
                className="gentleman__avatar"
                src={item.picture}
                alt={item.alternativeText}
              />
              <span className="gentleman__initial">{item.name[0]}</span>
            </div>
            <div className="gentleman__data-container">
              <h2 className="gentleman__name">{item.name}</h2>
              <ul className="gentleman__data-list">
                <li className="gentleman__data">
                  <span className="gentleman__data-label">Profession:</span>
                  {item.profession}
                </li>
                <li className="gentleman__data">
                  <span className="gentleman__data-label">Status:</span>{" "}
                  {item.status}
                </li>
                <li className="gentleman__data">
                  <span className="gentleman__data-label">Twitter:</span>{" "}
                  {item.twitter}
                </li>
              </ul>
            </div>

            <i
              onClick={() => handleClick(item)}
              className={
                item.selected
                  ? "selected icon gentleman__icon fas fa-check"
                  : "icon gentleman__icon fas fa-check"
              }
            ></i>

            <i className="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
          </li>
        ))}
      </ul>
    </main>
  );
}
