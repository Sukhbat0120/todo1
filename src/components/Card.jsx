export function Card() {
  return (
    <div className="flex">
      <div className="bg-[url(https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg)] w-[600px] h-[350px] bg-contain relative rounded-[6px] bg-no-repeat">
        <div>
          <p className="absolute bottom-0.5 right-10  bg-gray-500 ">10:36</p>
        </div>
      </div>
      <div className="p-10 gap-2">
        <h2 className="text-2xl font-semibold">Cappuccino routine</h2>
        <div className="flex">
          <p>10M views </p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-dot"
            viewBox="0 0 16 16"
          >
            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
          </svg>

          <p>5 years ago</p>
        </div>

        <div className="flex gap-1">
          <a className="font-bold hover:text-gray-400 ">Coffee Shop Vibes</a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-check-square"
            viewBox="0 0 16 16"
          >
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
            <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
          </svg>
        </div>

        <p className="mt-10">
          About Coffee Shop Vibes channel Enjoy the most original and coziest
          coffee shop ambiences with jazz music. Sit back, relax and appreciate
          our cafe ambience
        </p>
      </div>
    </div>
  );
}
