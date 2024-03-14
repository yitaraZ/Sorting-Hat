import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';





export default function OutlineCard({ data }) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            {data.name}
          </Typography>
          <br/>
          <Typography variant="body2">
            ช่องทางอีเมล
            <br />
            {data.email}
          </Typography>
          <br/>
          <Typography variant="h5" component="div">
            {data.house}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}