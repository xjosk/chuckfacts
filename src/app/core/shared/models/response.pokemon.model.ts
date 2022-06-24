import { Pokemon } from "./pokemon.model";

export class ResponsePokemon {
    public count?: string;
    public next?: string;
    public previous?: string;
    public results?: Array<Pokemon>;
}