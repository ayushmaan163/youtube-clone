const Button = ({ lists }) => {
  return (
    <div>
      {lists.map((item, index) => (
        <button
          className="bg-gray-300 py-1 px-2.5 m-1 rounded-lg font-semibold my-3"
          key={index}
        >
          {item}
        </button>
      ))}
    </div>
  );
};
export default Button;
