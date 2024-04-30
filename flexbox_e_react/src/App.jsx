import React from 'react';
// para uso no src de uma image, vem da pasta src/assets
// import reactLogo from './assets/react.svg';

// para uso no src de uma image, vem da raiz da pasta public
// import viteLogo from '/vite.svg';

// para estilizar esse componente, da raiz desse arquivo
// import './App.css';

import { SuperInfo } from './components/SuperInfo';

function App() {
  return (
    <React.Fragment>
      <SuperInfo />
    </React.Fragment>
  );
}

export { App };
