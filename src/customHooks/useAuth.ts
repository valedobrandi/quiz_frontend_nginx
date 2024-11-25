import { useState } from 'react';

export const useAuth = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [warning, setWarning] = useState('');

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const validatePassword = (password: string) => {
    const rules = [
      {
        regex: /[A-Z]/,
        message: 'A senha deve conter pelo menos uma letra maiúscula.',
      },
      {
        regex: /[!@#$%^&*(),.?":{}|<>]/,
        message: 'A senha deve conter pelo menos um símbolo.',
      },
      { regex: /.{8,}/, message: 'A senha deve ter pelo menos 8 caracteres.' },
      { regex: /[0-9]/, message: 'A senha deve conter pelo menos um número.' },
    ];

    for (const rule of rules) {
      if (!rule.regex.test(password)) {
        setWarning(rule.message);
        return false;
      }
    }
    setWarning('');
    return true;
  };

  return {
    username,
    password,
    warning,
    handleUsernameChange,
    handlePasswordChange,
    validatePassword,
  };
};