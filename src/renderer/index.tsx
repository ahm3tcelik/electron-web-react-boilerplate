import isElectron from 'is-electron';
import { render } from 'react-dom';
import App from './App';

render(<App />, document.getElementById('root'));

if (isElectron()) {
  // calling IPC exposed from preload script
  window.electron.ipcRenderer.once('ipc-example', (arg) => {
    // eslint-disable-next-line no-console
    console.log(arg);
  });
  window.electron.ipcRenderer.myPing();
}
