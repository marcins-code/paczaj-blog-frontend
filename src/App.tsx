import React, { useRef, useCallback, useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import {
  LoginSocialGoogle,
  LoginSocialFacebook,
  LoginSocialGithub,
  IResolveParams,
  TypeCrossFunction,
} from 'reactjs-social-login';
import {
  FacebookLoginButton,
  GoogleLoginButton,
  GithubLoginButton,
  // AmazonLoginButton,
  // InstagramLoginButton,
  // LinkedInLoginButton,
  // MicrosoftLoginButton,
  // TwitterLoginButton
} from 'react-social-login-buttons';
import './App.css';

const responseGoogle = (response: unknown) => {
  console.log(response);
};

const App = () => {
  const [provider, setProvider] = useState('');
  const [profile, setProfile] = useState<any>();
  const googleRef = useRef<TypeCrossFunction>(null);
  const facebookRef = useRef<TypeCrossFunction>(null);
  // const microsoftRef = useRef<TypeCrossFunction>(null!)
  // const linkedinRef = useRef<TypeCrossFunction>(null!)
  const githubRef = useRef<TypeCrossFunction>(null);
  const onLoginStart = useCallback(() => {
    console.log('login start');
  }, []);

  // const onLogoutFailure = useCallback(() => {
  //   alert('logout fail');
  // }, []);
  const REDIRECT_URI = 'http://localhost:3000/login';
  const onLogoutSuccess = useCallback(() => {
    setProfile(null);
    setProvider('');
    console.log('logout success');
  }, []);

  const onLogout = useCallback(() => {
    switch (provider) {
      case 'amazon':
        // amazonRef.current?.onLogout();
        break;
      case 'facebook':
        facebookRef.current?.onLogout();
        break;
      case 'google':
        googleRef.current?.onLogout();
        break;
      case 'instagram':
        // instagramRef.current?.onLogout();
        break;
      case 'microsoft':
        // microsoftRef.current?.onLogout();
        break;
      case 'github':
        githubRef.current?.onLogout();
        break;
      case 'pinterest':
        // pinterestRef.current?.onLogout();
        break;
      case 'twitter':
        // twitterRef.current?.onLogout();
        break;
      case 'linkedin':
        // linkedinRef.current?.onLogout();
        break;
      default:
        break;
    }
  }, [provider]);

  console.log(provider);
  console.log(profile);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={onLogout} type="button">LO</button>
      <GoogleLogin
        clientId="600904631341-7q2v9sp8ff6ss6hpq76rnqfvnrjftf0i.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
      <LoginSocialFacebook
        ref={facebookRef}
        appId={process.env.REACT_APP_FB_APP_ID || ''}
        onLoginStart={onLoginStart}
        onLogoutSuccess={onLogoutSuccess}
        // eslint-disable-next-line no-shadow
        onResolve={({ provider, data }: IResolveParams) => {
          setProvider(provider);
          setProfile(data);
        }}
        onReject={(err) => {
          console.log(err);
        }}
      >
        <FacebookLoginButton />
      </LoginSocialFacebook>
      <LoginSocialGoogle
        ref={googleRef}
        client_id={process.env.REACT_APP_GG_APP_ID || ''}
        // onLogoutFailure={onLogoutFailure}
        onLoginStart={onLoginStart}
        onLogoutSuccess={onLogoutSuccess}
        // eslint-disable-next-line no-shadow
        onResolve={({ provider, data }: IResolveParams) => {
          setProvider(provider);
          setProfile(data);
        }}
        onReject={(err) => {
          console.log(err);
        }}
      >
        <GoogleLoginButton />
      </LoginSocialGoogle>
      <LoginSocialGithub
        ref={githubRef}
        client_id={process.env.REACT_APP_GITHUB_APP_ID || ''}
        client_secret={process.env.REACT_APP_GITHUB_APP_SECRET || ''}
        redirect_uri={REDIRECT_URI}
        onLoginStart={onLoginStart}
        onLogoutSuccess={onLogoutSuccess}
        // eslint-disable-next-line no-shadow
        onResolve={({ provider, data }: IResolveParams) => {
          setProvider(provider);
          setProfile(data);
        }}
        onReject={(err: any) => {
          console.log(err);
        }}
      >
        <GithubLoginButton />
      </LoginSocialGithub>
    </div>
  );
};

export default App;
