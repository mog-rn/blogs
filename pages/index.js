import React from 'react'
import ReactDOM from 'react-dom'
import {Container, Box, Grid, Typography, CssBaseline, makeStyles } from '@material-ui/core'
import Header from '../components/Header'
import blogPost from '../components/blogPost'

const useStyles = makeStyles({
	root: {},  //a style rule
	label: {} //a nested style rule

})
const Index = () => {
	const classes = useStyles()
	return (
	   <React.Fragment>
		<CssBaseline />
		<Header />
		<Container maxWidth="lg" className="{classes.container}">
		    <Box my={4} display="flex" justifyContent="center">
			<Typography variant="h4" component="h1" gutterBottom>
				Featured Blog Posts
			</Typography>
		    </Box>
			<Grid container spacing={4}>
		           {/*{blogPosts.map(post => (
					<PostCard key={post.title} post={post} />
				))}*/}
			</Grid>
		   </Container>
	   </React.Fragment>
	)

}

export default Index;
