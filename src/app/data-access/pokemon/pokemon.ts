export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonResponse extends Record<string, unknown> {
  results: Pokemon[];
}
