import Button from "./Button";

const list = [
  "All",
  "Music",
  "Computer Programming",
  "Comedy",
  "Web Development",
  "Cricket",
  "Cooking",
  "Gaming",
];

const ButtonList = () => {
  return (
    <div className="flex items-center p-2 mx-3">
      <Button lists={list} />
    </div>
  );
};
export default ButtonList;
