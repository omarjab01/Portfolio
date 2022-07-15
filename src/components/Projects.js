import React from 'react'
import testCard from '../assets/testCard.png'
import android from '../assets/android.jpg'

import Card from './Card'

export const Projects = () => {

    const projects = [
        {
            nomeProgetto: "Swapcard Blog",
            categoria: "Web Design",
            urlCodice : "https://www.google.it", 
            urlSito : "https://www.youtube.com",
            urlImmagine : testCard
        },
        {
            nomeProgetto: "Youtube",
            categoria: "Web Design",
            urlCodice : "https://www.google.it", 
            urlSito : "https://www.youtube.com",
            urlImmagine : android
        },
        {
            nomeProgetto: "Whatsapp",
            categoria: "Web Design",
            urlCodice : "https://www.google.it", 
            urlSito : "https://www.youtube.com",
            urlImmagine : android
        },
    ]
    return(
        <div class="sezione-progetti">
            <h5 className="projects-headline">Recent Projects</h5>
            <div className="progetti">
            {
            projects.map((project, index) => {
                return (
                    <Card 
                        key={index}
                        {...project}
                    />
                )
             })
            }
            </div>
        </div>       
    )
}

export default Projects;
