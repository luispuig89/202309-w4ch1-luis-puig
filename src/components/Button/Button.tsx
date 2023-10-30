import { GentlemanInfo } from "../../types/GentlemanInfo/GentlemanInfo";

type Props = {
  gentlemen: GentlemanInfo[];
};

export function Button({ gentlemen }: Props) {
  const handleClick = () => {
    gentlemen.forEach((element) => {
      element.selected = true;
    });
  };
  return (
    <button onClick={handleClick} className="button button--select">
      Select all
    </button>
  );
}
