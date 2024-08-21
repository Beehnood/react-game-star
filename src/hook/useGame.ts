import { useEffect, useState } from "react"
import apiClient from "../services/api-client"

export interface Platform {
    id :number,
    name : string,
    slug : string
}


export interface Game {
    id : number;
    name : string,
    background_image : string
    parent_platforms : { platform: Platform }[],
    metacritic : number
}

interface FetchGamesResponse {
    count : number;
    results : []
}


const useGame =() =>{
    const [games, setGames ] = useState<Game []>([])
    const [error , setError] = useState('')

    useEffect(()=>{
        apiClient.get<FetchGamesResponse>('/games').then(res => setGames(res.data.results)).catch(errors => setError(errors.message))
    }, [])
    return {games, error} 
    

}

export default useGame;