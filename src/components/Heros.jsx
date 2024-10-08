/* eslint-disable react/prop-types */

import { HeroDetail } from "./HerosDetail"

export function ListOfHeroes ({ heroes }) {
    return (
      <HeroDetail heroes={heroes}/>
    )
  }

export function NoHeroesResults () {
    return (
      <p>Sorry... no Heroes found.</p>
    )
  }

export function Heroes ({heroes}){
    const hasHeroes = heroes?.length > 0

    return (
        hasHeroes
        ? <ListOfHeroes heroes={heroes}/>
        : <NoHeroesResults />
    )
}