import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';
import Header from '../HeaderTamplets/Header';
import Contents from '../Contents/Contents';
import './Main.css';
const Main = () => {
  const {DarkTheme} = useContext(ThemeContext);
  return (
    <div className={`main ${DarkTheme && "dark"}`}>
      <Header />
      <Contents />
    </div>
  )
}

export default Main
