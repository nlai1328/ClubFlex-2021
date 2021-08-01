import "./App.css";
import { Layout } from "antd";
import Head from "./components/header/header.jsx";
import Menu from "./components/menu/menu.jsx";
import Info from "./components/memberPage/playerInfo.jsx";

const { Footer, Content } = Layout;

function App() {
  return (
    <Layout>
      <Head />
      <Menu />
      <Content>
        <Info />
      </Content>
      
    </Layout>
  );
}

export default App;
