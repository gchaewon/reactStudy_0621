import React from 'react';
import styled from 'styled-components';

const HomePage = ({ posts }) => {
	return (
		<div>
			{posts.map(post => (
				<Text key={post.id}>
					{post.title} : {post.content}
				</Text>
			))}
		</div>
	);
};

export default HomePage;

const Text = styled.p`
	border: solid 1px black;
	padding: 5px;
`;
