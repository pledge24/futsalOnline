export function validateID(req, res, next) {
    const { username } = req.body;
  
    const minLength = 2;
    const maxLength = 20;
    const pattern = /^[a-z0-9]+$/;
  
    if (
      !username ||
      username.length < minLength ||
      username.length > maxLength ||
      !pattern.test(username)
    ) {
      return res.status(400).json({ message: "유효하지 않은 ID 입니다." });
    }
    next();
  }
  
  export function validatePassword(req, res, next) {
    const { password } = req.body;
  
    const minLength = 6;
  
    if (!password || password.length < minLength) {
      return res
        .status(400)
        .json({ message: "password는 최소 8자 이상이어야 합니다." });
    }
    next();
  }
  