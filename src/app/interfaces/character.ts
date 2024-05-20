import { Info } from "./info"

interface Location {
    name: string
}

export interface Character {
    id: string,
    name: string,
    status: string,
    image: string,
    species: string,
    gender: string,
    location: Location
    
    info: Info
}