import Head from 'next/head '
import Header from '@includes/Header'
import Footer from '@includes/Footer'


export default function DefaultLayouts(props) {
	return (
	 <main>
	    <Head>
		<title>{props.title}</title>
		<meta name='description' content={props.description}/>
	    </Head>
		<Header />
		{props.children}
		<Footer />
	 </main>
	)
}
