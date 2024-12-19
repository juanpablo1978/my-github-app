import {create} from "zustand";
import {persist} from "zustand/middleware";

type FavoritesReposState = {
    favoritesReposIds: number[],
    addFavoriteRepo: (id: number)=> void,
    removeFavoriteRepo: (id: number)=> void,
    
}

export const useFavoritesReposStore =  create(persist<FavoritesReposState>((set)=>({
    favoritesReposIds:[],
    addFavoriteRepo: (id: number)=> 
        set((state)=> ({  favoritesReposIds: [...state.favoritesReposIds, id]})),
    removeFavoriteRepo: (id: number)=>
         set((state)=> ({
        favoritesReposIds: state.favoritesReposIds.filter((repoId)=> repoId !== id)
    })),
}),{
    name: 'favorite-repos'
}
));

