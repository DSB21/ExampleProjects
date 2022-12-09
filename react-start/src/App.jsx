import Header from './components/header/Header';
import Main from './components/main/Main';

function App() {
  return (
    <>
      <Header headline='Header Dynamisch' text='Text' />
      <Main headline='Main Dynamisch aus Header' text='Text' />
    </>
  );
}
export default App;
