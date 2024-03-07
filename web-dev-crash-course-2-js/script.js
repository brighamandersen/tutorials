// HTML elements
const nameSpan = document.querySelector('#name')
const weaponSpan = document.querySelector('#weapon')
const heroOutput = document.querySelector('#hero-output')

// Our variables
let hero = {}

function seeInstructions() {
  alert("Okay here's how this works:\nClick on each button, respond accordingly, and we'll make your character based on your answers.")
}

function pickName() {
  hero.name = prompt('What\'s your name?')
  nameSpan.innerHTML = hero.name
}

function pickWeapon() {
  hero.weapon = prompt('What\'s your weapon?')
  weaponSpan.innerHTML = hero.weapon
}

function createHero() {
  if (!hero.name || !hero.weapon) {
    heroOutput.innerHTML = 'Error: You must first fully customize your hero before they can be created.'
    return
  }
  
  ready = confirm("Are you ready to create your hero with the current customizations?")
  if (!ready) return
  
  heroOutput.innerHTML = `Name:  ${hero.name}<br>Weapon: ${hero.weapon}`
}

