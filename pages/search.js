import Module from 'app-modules/search';
import Head from 'next/head';

const HomePage = () => {
	return (
		<>
			<Head>
				<meta name="description" content="Trading Card Game Exchange" />
				<meta property="og:site_name" content="TCG0X - Trade cards for Bitcoin." />
				<meta property="og:title" content="TCG0X Search - Trade cards for Bitcoin." />
				<meta property="og:type" content="website" />
				<meta property="og:description" content="Trading Card Game Exchange" />
				<meta property="og:image" content="https://tcgox.app/assets/images/twinning-blade.png" />
				<meta property="og:image:type" content="image/jpeg" />
				<meta property="og:image:width" content="1280" />
				<meta property="og:image:height" content="800" />
				<meta property="og:url" content="https://tcgox.app" />
				<meta property="twitter:card" content="summary_large_image" />
				<link rel="icon" href="https://tcgox.app/favicon.ico" />
			</Head>
			<Module />
		</>
	);
};

export default HomePage;

export async function getStaticProps(context) {
	return {
		props: {},
	};
}
