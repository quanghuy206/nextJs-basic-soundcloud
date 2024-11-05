'use client'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Fab from '@mui/material/Fab';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useHasMounted } from '@/utils/customHook';
import { Container } from '@mui/material';

const AppFooter = () => {
    const hasMounted = useHasMounted()
    if (!hasMounted) return (<></>)

    return (
        <AppBar position="fixed" sx={{ top: 'auto', bottom: 0, background: 'white', }}>
            <Container sx={{ display: "flex", gap: 10 }}>
                <AudioPlayer
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/tracks/hoidanit.mp3`}
                    volume={0.5}
                    style={{ boxShadow: "unset" }}
                />
                <div style={{ display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "center", minWidth: 100 }}>
                    <div style={{ color: "black" }}>Eric</div>
                    <div style={{ color: "black" }}>Who Am I ?</div>
                </div>
            </Container>

        </AppBar >
    )
}

export default AppFooter