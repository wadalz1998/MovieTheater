import React from 'react'
import BannerCarousel from "./BannerCarousel"
import ListMovie from "./ListMovie"
import MovieTheater from "./MovieTheater"
import TheNewsHTML from "./TheNewsHTML"
import HomeApp from "../../SmallComponent/HomeApp"


export default function HomePage() {
    return (
        <div>
            <BannerCarousel />
            <ListMovie />
            <MovieTheater />
            <TheNewsHTML />
            <HomeApp />
        </div>
    )
}
