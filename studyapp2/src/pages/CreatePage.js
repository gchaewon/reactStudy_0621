import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePage = ({ posts, setPosts }) => {
	const navigate = useNavigate();

	const [newTitle, setNewTitle] = useState('');
	const [newContent, setNewContent] = useState('');

	const onSubmit = e => {
		e.preventDefault();
		setPosts([
			...posts,
			{
				title: newTitle,
				content: newContent,
			},
		]);

		navigate('/');
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input
					placeholder='제목'
					name='title'
					value={newTitle}
					onChange={e => setNewTitle(e.target.value)}
				/>
				<input
					placeholder='내용'
					name='content'
					value={newContent}
					onChange={e => setNewContent(e.target.value)}
				/>

				<button type='submit'>제출</button>
			</form>
		</div>
	);
};

export default CreatePage;
