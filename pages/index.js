import React from 'react'
import ReactDOM from 'react-dom'

const Index = () => {
	const classes = useStyles();
	return (
	   <React.fragment>
		<CssBaseline />
		<Header />
		<Container maxWidth="lg" className="{classes.container}">
		    <Box my={4} display={flex} justifyContent="center">
			<Typography variant="h4" component="h1" gutterBottom>
				Featured Blog Posts
			</Typography>
		    </Box>
			<Grid spacing={4}>
				{blogPosts.map(post => (
					<PostCard key={post.title} post={post} />
				))}
			</Grid>
		   </Container>
	   </React.Fragment>
	)

}
