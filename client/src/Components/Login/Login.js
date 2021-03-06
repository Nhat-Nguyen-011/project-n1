import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import checkLogin from '../../Controllers/checkLogin';
import postRequest from '../../Controllers/postRequest';

export default () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    // window.localStorage.setItem('chatAppRefreshToken', 'somethingss');
    checkLogin(setIsLogin);
  }, []);

  if (isLogin) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      Email or Handle: <input type="text" id="email" />
      <br />
      Password: <input type="password" id="password" />
      <br />
      <input type="button" value="login" />
    </div>
  );
};
