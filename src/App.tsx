import { GlobalStyle } from './styles/global';
import { useMediaQuery } from 'react-responsive';

import * as Organisms from './components/Organisms';

import { SelectedPage } from './components/Pages/SelectedPage';
import { PageProvider } from './hooks/selectedPageContext';


export function App() {
  const isMobile = useMediaQuery({ query: '(max-width: 415px)' });

  return (
    <PageProvider>
      <GlobalStyle />
      <div style={{ display: 'flex' }}>
        {
          !isMobile && <Organisms.MenuOptions />
        }
        <SelectedPage />
      </div>
    </PageProvider >

  );
}
