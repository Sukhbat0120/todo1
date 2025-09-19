export const Button = ({
  handleAcive,
  handleComplete,
  children,
  btnColor,
  handleOnClick,
}) => {
  const color = {
    blue: "bg-[#3C82F6] font-semibold hover:opacity-70 ",
    white: " hover:bg-sky-400",
    changed: "bg-sky-400 ",
  };
  return (
    <>
      <div>
        <button
          className={`text-black w-fit p-2 rounded-[6px] ${color[btnColor]}`}
          onClick={handleOnClick}
        >
          {children}
        </button>
      </div>
    </>
  );
};
