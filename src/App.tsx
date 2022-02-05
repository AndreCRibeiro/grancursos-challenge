import { GlobalStyle } from './styles/global';

import * as Organisms from './components/Organisms';

export function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <div style={{ display: 'flex' }}>
        <Organisms.MenuOptions />
        <Organisms.SelectedPage />
      </div>

    </div>
  );
}
