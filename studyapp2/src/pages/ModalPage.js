import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

const ModalPage = () => {
	const clickSection = useRef();
	const [isOpen, setIsOpen] = useState(true);

	const modalHandler = ({ target }) => {
		if (isOpen && !clickSection.current.contains(target)) setIsOpen(false);
	};

	useEffect(() => {
		window.addEventListener('click', modalHandler);
		return () => {
			window.removeEventListener('click', modalHandler);
		};
	});

	return (
		<div> {isOpen && <Modal ref={clickSection}> 모달창 입니다. </Modal>}</div>
	);
};

export default ModalPage;

const Modal = styled.div`
	width: 300px;
	height: 300px;
	background-color: pink;
`;
