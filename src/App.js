import './App.css';
import { Layout } from 'antd';
import Head from './components/header/header.jsx'
import Menu from './components/menu/menu.jsx'
import Search from './components/memberPage/searchBar.jsx'
import Info from './components/memberPage/playerInfo.jsx'
import Details from './components/memberPage/playerDetails.jsx'
const { Footer, Content } = Layout;

function App() {
  return (
    <Layout>
      <Head/>
      <Menu/>
      <Content>
        <Search/>
        <Info/>
        <Details/>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
