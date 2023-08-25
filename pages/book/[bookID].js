import { useRouter } from 'next/router'
import { useEffect, useState} from 'react';
import Navbar from '../../components/Navbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import { getBooks, fetchImage } from '../../utils/api/authors';


const Book = () => {
    const router = useRouter();
    const [coversid, setCoversid] = useState(null);
    const [image, setImage] = useState(null);

    useEffect(() => {
        const { bookID } = router.query;
        getBooks(bookID).then(async (data) => {
          console.log(data);
          setCoversid(data);
          if(data.covers){
            const imgUrls = data.covers.map((cover) => `https://covers.openlibrary.org/b/id/${cover}-M.jpg`);
          const images = await Promise.all(imgUrls.map(fetchImage));
          console.log(images)
          setImage(images)
          }
          
        });
      }, [router.query.bookID]);

    return <div>
        <Navbar/>
        <Container maxWidth="sm">
          <Grid container spacing={1} justifyContent='center' alignItems='center'>
            <Grid item xs={12}>
            <Typography  align="center" variant='h3' color="text.primary" paragraph>
            {coversid?.title} 
        </Typography>
            </Grid>
            <Grid item xs={12}>
            <Typography  align="center" variant='h6' color="text.primary" paragraph>
             Covers
        </Typography>
            </Grid>
            
  {image && (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {image.map((item) => (
        <Grid item xs={10}>
        <ImageListItem key={item}>
          <img
            src={`${item.currentSrc}`}
            srcSet={`${item.currentSrc}`}
            alt={item.alt}
            loading="lazy"
          />
        </ImageListItem>
        </Grid>
      ))}
    </ImageList>
  )}

            
            
          </Grid>
        </Container>
    </div>
}
export default Book;