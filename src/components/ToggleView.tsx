function ToggleView({ setToggleView = () => {} }) {
  return (
    <label
      className="flex badge badge-neutral badge-outline h-full p-4 
    cursor-pointer items-end gap-2"
    >
      <span className="md:text-lg label-text text-[#1fb2a6] font-Nunito font-semibold text-center">
        Leaderboard Standings
      </span>
      <input
        type="checkbox"
        value="synthwave"
        className="toggle col-span-2 col-start-1 row-start-1 font-semibold
         border-sky-400 bg-amber-300 [--tglbg:theme(colors.sky.500)] checked:border-blue-800 
         checked:bg-blue-300 checked:[--tglbg:theme(colors.blue.900)]"
        onClick={setToggleView}
      />
      <span className="md:text-lg label-text text-[#1fb2a6] font-Nunito text-center">
        Tech Bubble
      </span>
    </label>
  );
}

export default ToggleView;
