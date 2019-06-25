import {SpaceCraft, Containership} from './moduloBase-ships'
import { MillenniumFalconn } from './moduloStarfighters';

import * as _ from 'lodash' //importando biblioteca javascript
console.log(_.pad("Typescript Examples", 40, "="))

let ship = new SpaceCraft('hyperdrive')
ship.jumpIntoHyperspace()

let falcon = new MillenniumFalconn()
falcon.jumpIntoHyperspace()

let goodForTheJob = (ship: Containership) => ship.cargoContainers > 2

console.log(`Is falcon good for the job? ${goodForTheJob(falcon) ? 'yes': 'no'}`)