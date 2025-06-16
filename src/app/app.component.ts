import { Component, OnInit } from '@angular/core';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  pokemon: any;
  pokemonName: string = 'pikachu';

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.getPokemonData();
  }

  getPokemonData() {
    this.pokemonService.getPokemon(this.pokemonName.toLowerCase()).subscribe({
      next: (data) => {
        this.pokemon = data;
        console.log(data);
      },
      error: (err) => {
        console.error('Erro ao buscar o Pokémon:', err);
      }
    });
  }
}
