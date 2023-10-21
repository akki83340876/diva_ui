import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import blog_img1 from '../assets/imeges/blog/post-img1.jpg';
import blog_img2 from '../assets/imeges/blog/post-img2.jpg';
import blog_img3 from '../assets/imeges/blog/blog-post-3.jpg';

const BlogItem = ({ imageUrl, title, date, content }) => (
  <Card>
    <CardMedia
      component="img"
      alt="blog image"
      height="200"
      image={imageUrl}
    />
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
        <a href="#">{title}</a>
      </Typography>
      <Typography variant="body2" color="text.secondary">
        <time dateTime={date}>February 12, 2018</time>
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {content}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" variant="outlined">
        Read More
      </Button>
    </CardActions>
  </Card>
);

const BlogSection = () => (
  <div className="latest-blog section">
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div className="section-header text-center">
            <Typography variant="h4" component="h4">
              Fresh From our blog
            </Typography>
            <Typography variant="body1">
              If you like Shopify, you are going to love this amazing theme.
            </Typography>
          </div>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <BlogItem
              imageUrl={blog_img1}
              title="It's all about how you wear"
              date="2018-02-12T09:22:00Z"
              content="Plusieurs variations de Lorem Ipsum peuvent variations  être Plusieurs variations de trouvées peuvent ici ou là..."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <BlogItem
              imageUrl={blog_img2}
              title="27 Days of Spring Fashion Recap"
              date="2018-02-12T09:22:00Z"
              content="On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions..."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <BlogItem
              imageUrl={blog_img3}
              title="Great stores. Great choices."
              date="2018-02-12T09:22:00Z"
              content="On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions..."
            />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  </div>
);

export default BlogSection;