import { GentlemanInfo } from "../../types/GentlemanInfo/GentlemanInfo";
import { Button } from "../Button/Button";
import { Gentleman } from "../Gentleman/Gentleman";
import { Info } from "../Info/Info";

export function App() {
  const gentlemen: GentlemanInfo[] = [
    {
      id: 1,
      name: "Bertin Osborne",
      status: "Alive",
      profession: "Youtuber",
      twitter: "@osbourne",
      picture: "bertin.jpg",
      alternativeText: "Osbourne pointing at you",
      selected: true,
    },
    {
      id: 2,
      name: "The Farytale",
      status: "RIP",
      profession: "Influencer",
      twitter: "pending",
      picture: "fary.jpg",
      alternativeText: "The Fary pointing at you",
      selected: false,
    },
    {
      id: 3,
      name: "Julius Churchs",
      status: "Alive",
      profession: "Java developer",
      twitter: "@julius_churchs",
      picture: "julio.jpg",
      alternativeText: "Churchs pointing at you",
      selected: true,
    },
  ];

  let count = 0;
  gentlemen.forEach((element) => {
    if (element.selected) {
      count++;
    }
  });

  return (
    <div>
      <Info></Info>
      <section className="controls">
        <p className="info">{count} gentlemen pointing at you</p>
        <Button gentlemen={gentlemen}></Button>
      </section>
      <Gentleman gentlemen={gentlemen}></Gentleman>
    </div>
  );
}
