export const validations = () => {
  // ========================================
  // 入力値が空になっていないかチェック
  const validateIsNotEmpty = (str: string): boolean => {
    let validator = true;
    const newStr = str.replace(/\s/g, "");
    if (newStr === "") return (validator = false);
    return validator;
  };

  // ========================================
  // メールアドレスの形式をチェック
  const validateEmailFormat = (email: string): boolean => {
    const regex = /^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  // ========================================
  // パスワードが8文字以上の半角英数字であるかチェック
  const validateMoreThan8Characters = (password: string): boolean => {
    const regex = /^([a-zA-Z0-9]{8,})$/;
    return regex.test(password);
  };

  return {
    validateEmailFormat,
    validateIsNotEmpty,
    validateMoreThan8Characters,
  };
};
