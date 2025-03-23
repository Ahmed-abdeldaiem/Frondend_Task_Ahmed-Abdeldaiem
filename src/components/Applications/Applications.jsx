import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';



function Applications() {
  const [selectedCard, setSelectedCard] = React.useState(0);

  const cards = [
    {
      id: 1,
      title: 'Application1',
      description: 'Application1 Details',
    },
    {
      id: 2,
      title: 'Application2',
      description: 'Application2 Details',
    },
    {
      id: 3,
      title: 'Application3',
      description: 'Application3 Details',
    },
  ];


  return (
<>
<Box 
  sx={{
    width: '85%',
    display: 'flex',flexDirection:"column",
padding:3,
    margin:"auto",

    backgroundColor:"green",
    gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
    gap: 2,
  }}
>
<Typography variant="h5" component="div">
           Frontend Task
          </Typography>
          <Typography variant="h5" component="div">
           Ahmed Mohamed Abdeldaiem
          </Typography>
</Box>

<Box
  sx={{
    width: '100%',
    display: 'flex',
    flexDirection:"column" ,
    gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
    gap: 2,
  }}
>
  {cards.map((card, index) => (
    <Card>
      <CardActionArea
        onClick={() => setSelectedCard(index)}
        data-active={selectedCard === index ? '' : undefined}
        sx={{
          height: '100%',
          '&[data-active]': {
            backgroundColor: 'action.selected',
            '&:hover': {
              backgroundColor: 'action.selectedHover',
            },
          },
        }}
      >
        <CardContent sx={{ height: '100%' }}>
          <Typography variant="h5" component="div">
            {card.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {card.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  ))}
</Box>
</>
 
  );
}

export default Applications;
