import { Paper, Grid, ButtonBase, Typography, styled, Card, CardMedia, CardContent, Box, CardHeader } from '@mui/material'
import { catalogItems, subCategories } from '../../consts/catalog'
import classes from './Catalogue.module.css'
export const Catalogue = () => {
  return (
    <div style={{ maxWidth: '1200px', margin: '10px auto' }}>
      <div>
        <p>Kataloq</p>
      </div>
      <Paper>
        <Box sx={{ display: 'flex', gap: '40px', flexWrap: 'wrap', padding: '20px' }}>
          {catalogItems.map((item, index) => (
            <Card className={classes.catalogue_wrapper} key={index}>
              <Box sx={{ display: 'flex' }}>
                <CardMedia
                  component='img'
                  height='150'
                  // width='100'px
                  sx={{ padding: '0', margin: '0', maxWidth: '40%' }}
                  image='C:\Users\AmilRustamov\Desktop\shopping-app\public\assests\newproducts6.png'
                />
                <CardContent sx={{ padding: '0', marginLeft: '5px' }}>
                  <h4 style={{ margin: '0', marginTop: '5px' }}>{item.description}</h4>
                  {subCategories[item.name]?.map((sub, index) => (
                    <Typography key={index}>{sub.description}</Typography>
                  ))}
                </CardContent>
              </Box>
            </Card>
          ))}
        </Box>
      </Paper>
    </div>
  )
}
