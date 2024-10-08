/* eslint-disable react/prop-types */
export function HeroDetail ({ heroes }){
    return (
        <ul className="heroes">
        {
          heroes.map(hero => (
            <li className="hero" key={hero.id}>
              <h2>Name:  {hero.name}</h2>
              <p>Genero: {hero.gender}</p>
              <p>Height: {hero.height}</p>
              <p>Mass: {hero.mass}</p>
              <p>Skin color: {hero.skin_color}</p>
            </li>
          ))
        }
      </ul>
    )
}