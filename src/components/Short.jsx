export function Short(props) {
  console.log(props.background);
  return (
    <div className=" bg-linear-500  p-2 w-min">
      <div className=" w-[250px] min-h-[400px ] rounded-sm  ">
        <img src={props.img} alt="" className="min-h-[340px]" />
      </div>
      <div className="size 80 flex   text-2xl ">
        <p>Taylor Swift Top Hits 2025 - music</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-three-dots-vertical"
          viewBox="0 0 16 16"
        >
          <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
        </svg>
      </div>
      <div className="text-gray-600">80k views</div>
    </div>
  );
}
