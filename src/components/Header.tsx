import useFetch from "../customHooks/useFetch";
import { HTTP } from "../endPoints";

type HeaderProps = {
  username: string | null;
};

function Header({ username }: HeaderProps) {
  const { data } = useFetch(`${HTTP.QUIZ_BACKEND}/ranking/count`);
  const render = (isRender: boolean | string | null) => isRender;

  return (
    <header
      className="p-4 flex flex-wrap items-center 
      md:justify-start justify-center font-bold uppercase tracking-wide mb-4">
      <div
        className="flex items-center justify-center md:m-0">
        <img
          className="w-12 h-12"
          src="icons8-quiz-100.png"
          alt="quiz icon"
        />
        <p
          className="ml-4 text-sm text-center 
          tracking-wide md:text-lg md:text-right">
          Challenge Your self and Rise to the Top!
        </p>
      </div>
      {render(username) ? (
        <p
          className="
          [text-shadow:_0_4px_4px_rgb(0_0_0_/_0.8)]
          pressStart text-[#a6adba]
          mx-auto lg:ml-6">
          Welcome,
          <span className="text-yellow-500"> {username}</span>
        </p>
      )
        : (
          <p
            className="
            [text-shadow:_0_4px_4px_rgb(0_0_0_/_0.8)]
            pressStart text-[#a6adba]
            mx-auto">
            Player
            <span className="text-yellow-500">{" "}{data}</span>
          </p>
        )}
    </header>
  );
}

export default Header;
