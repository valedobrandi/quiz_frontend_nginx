
const validateUsername = (password: string) => {
    const rules = [
      {
        regex: /[A-Za-z]/,
        message: "Enter a username.",
      },
    ];

    for (const rule of rules) {
      if (!rule.regex.test(password)) {
        return rule.message
      }
    }
    return ""
  };

  export default validateUsername