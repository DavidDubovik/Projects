const getToken = async (newLogin, newPass) => {
    try {
      const token = await fetch(
        "https://ajax.test-danit.com/api/v2/cards/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: `${email}`,
            password: `${password}`,
          }),
        }
      )
        .then((response) => response.text())
        .then((token) => {
          if (token !== "Incorrect username or password") {
            localStorage.setItem("token", token);
            localStorage.setItem("email", newLogin);
            localStorage.setItem("password", newPass);
          }
        });
      return token;
    } catch (err) {
      // console.error(err);
    }
  };
  
  export default getToken;
  