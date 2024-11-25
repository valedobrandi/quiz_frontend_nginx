import quizLogo from "../assets/logo512.png";

function Footer() {
  return (
    <footer className="py-10">
      <hr className="border-gray-600" />
      <img className="h-36 w-36 m-auto -mb-10" src={quizLogo} alt="quiz time" />
      <p className="text-center font-semibold">
        Quiz Game - App by{" "}
        <a
          className="hover:text-red-600 text-red-300 cedarville-cursive tracking-wider"
          href="https://www.stoicsoftwares.net/"
          target="_blank"
        >
          bernardo albuquerque
        </a>
      </p>
      <p className="text-center pt-2">Copyright © 2024 - All right reserved</p>
    </footer>
  );
}

export default Footer;
