const API_URL = "https://rickandmortyapi.com/api"

export class CharacterService {
  static async getAllCharacters() {
    return fetch(`${API_URL}/character`)
      .then((res) => res.json())
      .then((data) => data.results);
  }

  static async getCharacterByID(...ids) {
    return fetch(`${API_URL}/character/${ids}`).then((res) => res.json());
  }

}
