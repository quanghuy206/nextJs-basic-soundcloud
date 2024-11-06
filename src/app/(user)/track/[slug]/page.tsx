'use client'
import WaveTrack from '@/components/track/wave.track'
import { useSearchParams } from 'next/navigation'
import React from 'react'
import Container from '@mui/material/Container'
const DetailTrackPage = (props: any) => {
    const { params } = props

    const searchParams = useSearchParams();
    const search = searchParams.get("audio")
    return (
        <Container>
            <div>
                <WaveTrack />
                DetailTrackPage
            </div>
        </Container>

    )
}

export default DetailTrackPage