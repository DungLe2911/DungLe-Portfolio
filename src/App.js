import React, { useEffect } from 'react';
import { Flex, Layout} from 'antd';
import NavBar from './Components/NavBar';
import 'antd/dist/reset.css';
import { Content } from 'antd/es/layout/layout';
import Home from './Pages/Home';
import About from './Pages/About';
import useWindowDimensions from './CustomHooks/useWindowDimensions';

const {Sider} = Layout;
const layoutStyle = {
	// width: '100vw',
	// height:'100vh'
}
export default function App(){
	const {width } = useWindowDimensions();
	useEffect(()=>{
		const sider = document.getElementById('Sider');
		const content = document.getElementById('ContentArea');
		content.style.marginLeft =`calc(${sider.clientWidth}px)`;
	},[width])
	return(
		<Flex>
			<Layout style={layoutStyle}>
				<Sider collapsible collapsed={false} collapsedWidth={0} id ='Sider' width="20%"  style={{ overflowX: 'hidden', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }}>
					<NavBar />
				</Sider>
				<Content id='ContentArea' style={{overflowX:'hidden'}}>
					<Home />
					<About />
				</Content>
			</Layout>
		</Flex>
	);
};