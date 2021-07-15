import './App.css';
import { Layout } from 'antd';
import Head from './components/header/header.jsx'
import Menu from './components/menu/menu.jsx'
import Search from './components/memberPage/searchBar.jsx'

const { Footer, Content } = Layout;

function App() {
  return (
    <Layout>
      <Head/>
      <Menu/>
      <Content>
        <Search/>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
