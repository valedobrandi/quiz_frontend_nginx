import { useGoogleLogin } from "@react-oauth/google";
import { HTTP } from "../endPoints";


const useAuthGoogle = () => {
  const googleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log(tokenResponse);

      fetch(`${HTTP.QUIZ_BACKEND}/login`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(tokenResponse)
      })
    },
    onError: () => console.log('Error'),
    flow: 'auth-code',
  });

  return googleLogin;
};

export default useAuthGoogle;