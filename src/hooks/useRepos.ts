import api from "../api/github";
import { useQuery } from "@tanstack/react-query"; //biblioteca de tanstak (espera 2 parametros: 
import { Repository } from "./types";             //1-nombre de como guardamos los datos en memoria cache-->'repos'
                                                  //2-2do parametro, como va a pedir los datos-->fetchrepos}

                                                  

async function fetchRepos() {                                                //esta funcion fetchrepos llama a axios para hacer la peticion
    const {data} = await api.get<Repository[]>('/users/juanpablo1978/repos')  //estudiar sintaxis de axios para llamar api
    return data;
}

export function useFetchRepositories() {     //es un hook (prefijo use) que me permite usar tanstak-query
    return useQuery({queryKey:['repos'],
                      queryFn: fetchRepos})
}