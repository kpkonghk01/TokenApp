/* eslint-disable no-undef */
import React, {
  useState,
} from 'react';
import logo from './assets/logo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {
  InputGroup,
  FormControl,
  Button,
  Row,
  Image,
} from 'react-bootstrap';
import auth01 from './services/auth01';
import randomString from './utils/random-string';
import { CopyToClipboard } from 'react-copy-to-clipboard';

if (chrome) {
  const { storage } = chrome
  if (storage) {
    storage.local.set(process.env, () => {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError.message);
      }
    });
  }
}

function App() {
  const [accessToken, setAccessToken] = useState("");

  const login = async () => {
    const authUrl = auth01.buildAuthorizeUrl({ nonce: randomString({ length: 32 }) });
    chrome.tabs.create({ url: authUrl });
  }

  if (chrome) {
    const { storage } = chrome
    if (storage) {
      storage.local.get(['access_token'], ({ access_token }) => {
        setAccessToken(access_token);
      });
    }
  }

  return (
    <div className="App">
      <Row className="m-3 d-flex justify-content-center">
        <Image id="logo" src={logo} rounded />
      </Row>
      <Row className="m-3">
        <Button variant="primary" onClick={login} block={true}>Login</Button>
      </Row>
      <Row className="m-3">
        <InputGroup disabled>
          <InputGroup.Prepend>
            <InputGroup.Text>Access Token</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            disabled
            type="text"
            value={accessToken}
            aria-label="Access Token"
            aria-describedby="Access Token"
          />
          <CopyToClipboard text={accessToken} onCopy={() => console.log('coppp')}>
            <Button variant="primary">Copy</Button>
          </CopyToClipboard>
        </InputGroup>
      </Row>
    </div>
  );
}

export default App;
