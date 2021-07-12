import { BrowserRouter } from 'react-router-dom';
import { Router } from 'src/components/router';

const App: React.VFC = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default App;
