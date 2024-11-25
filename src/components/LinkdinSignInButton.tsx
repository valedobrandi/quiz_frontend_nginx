import React from 'react';
import Linkdin_SVG from "../assets/linkedin-color-svgrepo-com.svg"
import { HTTP } from '../endPoints';

const LinkdinSignInButton: React.FC = () => {
    
    const authentication =  async () => {
      const response = await fetch(`${HTTP.QUIZ_BACKEND}/auth/linkdin`)
      const data = await response.json();
      const windowFeatures = "innerWidth=400,innerHeight=700";
      window.open(data,'popup', windowFeatures)
    }
    
  return (
    
      <button
        onClick={() => authentication()}
        className="inline-flex h-10 items-center justify-center gap-2 rounded border border-slate-300
      bg-white p-2 text-sm font-medium text-black outline-none"
      >
        <img className='w-8' src={Linkdin_SVG} alt="company logo" />
        Sign in with Linkdin
      </button>

  );
};

export default LinkdinSignInButton;