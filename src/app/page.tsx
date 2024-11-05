import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import MediaCard from '@/components/MediaCard';
import AppHeader from '@/components/header/app.header';
import MainSlider from '@/components/main/main.slider';
import { Container } from '@mui/material';
import { sendRequest } from '@/utils/api'

export default async function HomePage() {
  const chills = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: "http://localhost:8000/api/v1/tracks/top",
    method: "POST",
    body: { category: "CHILL", limit: 10 },
  })

  const workouts = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: "http://localhost:8000/api/v1/tracks/top",
    method: "POST",
    body: { category: "WORKOUT", limit: 10 },
  })

  const party = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: "http://localhost:8000/api/v1/tracks/top",
    method: "POST",
    body: { category: "PARTY", limit: 10 },
  })

  return (
    <Container>
      <MainSlider
        data={chills?.data ?? []}
        title='CHILLS'
      />
      <MainSlider data={workouts?.data ?? []} title='WORKOUT' />
      <MainSlider data={party?.data ?? []} title='PARTY' />
    </Container>
  );
}
