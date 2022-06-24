import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CreatePage from './pages/CreatePage';
import HomePage from './pages/HomePage';
import ModalPage from './pages/ModalPage';

import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

import './App.css';

const CustomNav = styled(NavLink)`
	&:active {
		color: red;
	}
	color: purple;
	width: 20px;
	height: 10px;
	font-size: 30px;
	text-decoration: none;
`;

function App() {
	const [posts, setPosts] = useState([
		{ title: '1번째글', content: '안녕하세요' },
		{ title: '2번째글', content: '어쩌구' },
		{ title: '3번째글', content: '저쩌구' },
		{ title: '4번째글', content: '렌더링' },
	]);

	// useEffect 3개를 작성하세요

	useEffect(() => {
		console.log('새로고침 후 컴포넌트의 첫 렌더링');
	}, []);
	useEffect(() => {
		console.log('렌더링 될 때 마다 실행');
	});
	useEffect(() => {
		console.log('posts가 수정됨');
	}, [posts]);
	return (
		<BrowserRouter>
			<CustomNav to='/' class='active'>
				Home{' '}
			</CustomNav>
			<CustomNav to='/create'>Create </CustomNav>
			<CustomNav to='/modal'>Modal </CustomNav>

			<Routes>
				<Route path='/' element={<HomePage posts={posts} />} />
				<Route
					path='/create'
					element={<CreatePage posts={posts} setPosts={setPosts} />}
				/>
				<Route path='/modal' element={<ModalPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
