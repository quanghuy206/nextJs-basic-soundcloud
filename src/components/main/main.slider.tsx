'use client'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Settings } from "react-slick"
import { Box, Button, Divider } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Link from 'next/link';

interface IProps {
    data: ITrackTop[];
    title: string
}
const MainSlider = (props: IProps) => {

    const NextArrow = (props: any) => {
        return (
            <Button color="inherit" variant="contained"
                onClick={props.onClick}
                sx={{
                    position: "absolute",
                    right: 25,
                    top: "25%",
                    zIndex: 2,
                    minWidth: 30,
                    width: 35,
                }}
            >
                <ChevronRightIcon />
            </Button>

        )
    }

    const PrevArrow = (props: any) => {
        return (
            <Button color="inherit" variant="contained"
                onClick={props.onClick}
                sx={{
                    position: "absolute",
                    top: "25%",
                    zIndex: 2,
                    minWidth: 30,
                    width: 35,
                }}
            >
                <ChevronLeftIcon />
            </Button>

        )
    }

    const settings: Settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,

    };
    return (
        <Box
            sx={{
                margin: "0 50px",
                ".track": {
                    padding: "0 10px",

                    "img": {
                        height: 150,
                        width: 150
                    }
                },
                "h3": {
                }
            }}

        >
            <h2> {props.title} </h2>

            <Slider {...settings}>
                {props?.data.map((item, index) => (
                    <div className="track" key={index}>
                        <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/images/${item.imgUrl}`} alt="" />
                        <Link href={`/track/${item._id}?audio=${item.trackUrl}`}>
                            <h3>{item.title}</h3>
                            <h5>{item.description}</h5>
                        </Link>

                    </div>
                ))}


            </Slider>
            <Divider />
        </Box>

    );
}

export default MainSlider