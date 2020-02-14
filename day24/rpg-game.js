// rpg game!
// character: name, level, hp, mana, type, money

const RpgChar = (name, level, hp, mana, type, money) => ({
  name,
  level,
  hp,
  mana,
  type,
  money
})

const WhiteMage = (name, level, hp, mana, money, spells, cane) => ({
  ...RpgChar(name, level, hp, mana, 'White Mage', money),
  spells,
  cane
})

const Monk = (name, level, hp, mana, money, skills, gloves) => ({
  ...RpgChar(name, level, hp, mana, 'Monk', money),
  skills,
  gloves
})

const Warrior = (name, level, hp, mana, money, skills, sword) => ({
  ...RpgChar(name, level, hp, mana, 'Warrior', money),
  skills,
  sword
})

const myWHM = WhiteMage('Francisco', 1, 10, 20, 100, ['Cure', 'Revive'], 'Ancient Cane')
const myMNK = Monk('Richard', 1, 15, 0, 100, ['One-inch Punch', 'Dust Kick'], 'Brass Knuckles')
const myWAR = Warrior('Jordan', 1, 20, 0, 100, ['Taunt', 'Shield'], 'Broad Sword')
