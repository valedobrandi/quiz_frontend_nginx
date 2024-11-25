
const validatePassword = (password: string) => {
    const rules = [
      {
        regex: /[A-Z]/,
        message: "A senha deve conter pelo menos uma letra maiúscula.",
      },
      {
        regex: /[!@#$%^&*(),.?":{}|<>]/,
        message: "A senha deve conter pelo menos um símbolo.",
      },
      { regex: /.{8,}/, message: "A senha deve ter pelo menos 8 caracteres." },
      { regex: /[0-9]/, message: "A senha deve conter pelo menos um número." },
    ];

    for (const rule of rules) {
      if (!rule.regex.test(password)) {
        return rule.message
      }
    }
    return ""
  };

  export default validatePassword