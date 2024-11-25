import React from 'react';
import Google_SVG from "../assets/google-svgrepo-com.svg"
import useAuthGoogle from '../customHooks/useAuthGoogle';


const GoogleSignInButton: React.FC = () => {
  const authGoogle = useAuthGoogle()

  return (
    <button
      className=" border-slate-300 bg-white  text-black btn btn-primary btn-sm"
      onClick={() => authGoogle()}>
      <img className='w-6' src={Google_SVG} alt="company logo" />
      Sign in with Google
    </button>
  );
};

export default GoogleSignInButton;