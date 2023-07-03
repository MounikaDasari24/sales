export function handleLogin(accessToken) {
    const jwtParts = accessToken.split('.');
    const payload = JSON.parse(window.atob(jwtParts[1]));
  
    // Save user and token to localStorage
    localStorage.setItem('user', JSON.stringify(payload));
    localStorage.setItem('token', accessToken);
  }
  
  export const getGoogleUrl = () => {
    const rootUrl = `https://accounts.google.com/o/oauth2/v2/auth`;
  
    const options = {
      redirect_uri: "https://app.metaphy.ai/salescopilot/auth/google/callback",
      client_id: "386708635830-ne1nig0hf9r3lmadk9uknto0hh9qkgrj.apps.googleusercontent.com",
      access_type: "offline",
      response_type: "code",
      prompt: "consent",
      scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
        "https://www.googleapis.com/auth/calendar"
      ].join(" "),
      state: "/scpState=123",
    };
    const qs = new URLSearchParams(options);
  
    return `${rootUrl}?${qs.toString()}`;
  };