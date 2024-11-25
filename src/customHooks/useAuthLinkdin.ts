const useAuthLinkdin = async () => {
  const response = await fetch('https://www.linkedin.com/oauth/v2/accessToken', {
    method: 'POST',
    headers: {
      'Content-Type': " application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: process.env.VITE_LINKDIN_ID || '',
      client_secret: process.env.VITE_LINKDIN_TOKEN || '',
    })
    .toString()
  })
  const data = await response.json();
  
  console.log(data);
  }



export default useAuthLinkdin;