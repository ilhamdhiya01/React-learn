export interface PeopleInterface {
  name: string;
  age: string;
  image: string;
  note?: sring;
}
interface PeoplePropsInterface {
  people: PeopleInterface[];
}
interface AddListProps {
  setPeople: React.Dispatch<React.SetStateAction<PeopleInterface[]>>;
}
