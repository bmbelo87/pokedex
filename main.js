const pokes = {
  1: {
    name: 'bulbasaur',
    type: {
      0: 'Grass',
      1: 'Poison',
      2: 'Electric'
    }
  }
}

const color = '--grass'

let i = 0
function getPokemonInfos() {
  const url = `https://pokeapi.co/api/v2/pokemon/${i}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      pname.textContent =
        data.forms[0].name.charAt(0).toUpperCase() + data.forms[0].name.slice(1)
      pnumber.textContent =
        data.id < 10
          ? (data.id = `#00${data.id}`)
          : data.id < 100
          ? (data.id = `#0${data.id}`)
          : `#${data.id}`
      pokePhoto.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i}.png`

      let typePosition = 0
      data.types.forEach(element => {
        typePosition += 1
      })

      type1.textContent =
        data.types[0].type.name.toUpperCase().charAt(0) +
        data.types[0].type.name.slice(1)
      type1.style.background = `var(--${data.types[0].type.name})`

      if (typePosition == 2) {
        type2.style.display = 'block'
        type2.textContent =
          data.types[1].type.name.toUpperCase().charAt(0) +
          data.types[1].type.name.slice(1)
        type2.style.background = `var(--${data.types[1].type.name})`
      } else {
        type2.style.display = 'none'
      }

      container.style.background = `var(--${data.types[0].type.name})`
      about.style.color = `var(--${data.types[0].type.name})`
      baseStats.style.color = `var(--${data.types[0].type.name})`
      statsPokes.style.color = `var(--${data.types[0].type.name})`
      document
        .querySelector('body')
        .style.setProperty('--color', `var(--${data.types[0].type.name})`)

      weightPoke.textContent = `${(data.weight / 10)
        .toFixed(1)
        .replace('.', ',')
        .toString()} kg`

      heightPoke.textContent = `${(data.height / 10)
        .toFixed(1)
        .replace('.', ',')
        .toString()} m`

      let abilityPosition = 0
      data.abilities.forEach(element => {
        abilityPosition++
      })

      console.log(abilityPosition)

      ability1.textContent =
        data.abilities[0].ability.name.charAt(0).toUpperCase() +
        data.abilities[0].ability.name.slice(1)

      if (abilityPosition == 2) {
        ability2.style.display = 'block'
        ability2.textContent =
          data.abilities[1].ability.name.charAt(0).toUpperCase() +
          data.abilities[1].ability.name.slice(1)
      } else {
        ability2.style.display = 'none'
      }
      if (abilityPosition == 3) {
        ability3.style.display = 'block'
        ability3.textContent =
          data.abilities[2].ability.name.charAt(0).toUpperCase() +
          data.abilities[2].ability.name.slice(1)
      } else {
        ability3.style.display = 'none'
      }

      const urlSpecies = `https://pokeapi.co/api/v2/pokemon-species/${i}`
      fetch(urlSpecies)
        .then(response => response.json())
        .then(dataSpecies => {
          textAboutPoke.textContent =
            dataSpecies.flavor_text_entries[9].flavor_text
              .replace('', ' ')
              .replace('POKéMON', 'Pokémon')
        })

      document
        .querySelector('body')
        .style.setProperty('--baseHP', data.stats[0].base_stat)
      document
        .querySelector('body')
        .style.setProperty('--baseATK', data.stats[1].base_stat)
      document
        .querySelector('body')
        .style.setProperty('--baseDEF', data.stats[2].base_stat)
      document
        .querySelector('body')
        .style.setProperty('--baseSATK', data.stats[3].base_stat)
      document
        .querySelector('body')
        .style.setProperty('--baseSDEF', data.stats[4].base_stat)
      document
        .querySelector('body')
        .style.setProperty('--baseSPD', data.stats[5].base_stat)

      hp.textContent =
        data.stats[0].base_stat < 100
          ? data.stats[0].base_stat < 10
            ? `00${data.stats[0].base_stat}`
            : `0${data.stats[0].base_stat}`
          : data.stats[0].base_stat

      atk.textContent =
        data.stats[1].base_stat < 100
          ? data.stats[1].base_stat < 10
            ? `00${data.stats[1].base_stat}`
            : `0${data.stats[1].base_stat}`
          : data.stats[1].base_stat

      def.textContent =
        data.stats[2].base_stat < 100
          ? data.stats[2].base_stat < 10
            ? `00${data.stats[2].base_stat}`
            : `0${data.stats[2].base_stat}`
          : data.stats[2].base_stat

      satk.textContent =
        data.stats[3].base_stat < 100
          ? data.stats[3].base_stat < 10
            ? `00${data.stats[3].base_stat}`
            : `0${data.stats[3].base_stat}`
          : data.stats[3].base_stat

      sdef.textContent =
        data.stats[4].base_stat < 100
          ? data.stats[4].base_stat < 10
            ? `00${data.stats[4].base_stat}`
            : `0${data.stats[4].base_stat}`
          : data.stats[4].base_stat

      spd.textContent =
        data.stats[5].base_stat < 100
          ? data.stats[5].base_stat < 10
            ? `00${data.stats[5].base_stat}`
            : `0${data.stats[5].base_stat}`
          : data.stats[5].base_stat
    })
}

document.getElementById('next').addEventListener('click', () => {
  i++
  getPokemonInfos()
})

document.getElementById('last').addEventListener('click', () => {
  if (i <= 1) {
    i = i
  } else {
    i--
    getPokemonInfos()
  }
})

function nextPoke() {
  i++
  //document.getElementById('pname').textContent = pokes[i].name
  //document.getElementById('pnumber').textContent = pokes[i].number
  //document.getElementById('pokePhoto').src = pokes[i].photo
  //document.getElementById('type1').src = `images/type${pokes[i].type1}.svg`
  /*
        type2.src = data.types[1].type.name
        ? `images/type${data.types[1].type.name}.svg`
        : (type2.style.display = none)
  
  const r = document.querySelector('body')
      r.style.setProperty(color, `--${data.types[0].type.name}`)
  pokes[i].type2
    ? (document.getElementById(
        'type2'
      ).src = `images/type${pokes[i].type2}.svg`)
    : (document.getElementById('type2').style.display = 'none')
    */
}

function lastPoke() {
  i--
}
