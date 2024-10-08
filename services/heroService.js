export const searchHeroes = async ({ search }) => {
    if(search === '') return null

    try {
        const response = await fetch(`https://swapi.dev/api/people/?search=${search}`)
        const json = await response.json()

        const heroes = json.results
  
        return heroes?.map(hero => ({
            id: hero.url,
            name: hero.name,
            gender: hero.gender,
            height: hero.height,
            mass: hero.mass,
            skin_color: hero.skin_color,
          }))
    } catch (e) {
        throw new Error('Error searching movies' + e)
    }
}