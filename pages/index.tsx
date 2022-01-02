import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';

const Home: NextPage = () => {
	return <AppDiv>Test test</AppDiv>;
};

const AppDiv = styled.body`
	padding: 0;
	margin: 0;
	box-sizing: border-box;

	font-family: 'Poppins', BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
		Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`;

export default Home;
