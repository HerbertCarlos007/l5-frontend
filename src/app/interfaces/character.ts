import { Location } from "./location"

export interface Character {
    id: string,
    name: string,
    status: string,
    image: string,
    species: string,
    gender: string,
    location: Location
}