
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import Character from '../pages/CharacterList/CharacterRow'

describe('Given a CharacterRow component', () => {
    let container = null;
    let unit = {
        "name": "Makino, Proprietor of a Relaxed Tavern",
        "type": "PSY",
        "class": ["Cerebral", "Fighter"],
        "stars": 5,
        "cost": 1,
        "combo": 5,
        "sockets": 4,
        "maxLvl": 99,
        "expToMax": 4000000,
        "lvl1HP": 563,
        "lvl1ATK": 644,
        "lvl1RCV": 160,
        "maxHP": 1645,
        "maxATK": 1011,
        "maxRCV": 468,
        "growthRate": 1,
        "id": 3383,
        "alias": null,
        "family": "Makino",
        "cooldown": [13, 13]
    }
    beforeEach(() => {
        container = document.createElement('div')
        document.body.appendChild(container)
            act(() => {
                render(<BrowserRouter>
                    <Character unit={ unit } />
                </BrowserRouter >, container)
            })
            
    })

    afterEach(() => {
        unmountComponentAtNode(container)
        container.remove()
        container = null
    })

    describe('When it is invoked', () => {
        test('Then there should be a div', () => {

            const div = document.querySelector('div')
            expect(div).toBeTruthy()
        })
        test('Then there should be a div with a text id "3383"', () => {
            
            const {innerHTML} = document.querySelector('.unit-id')
            expect(innerHTML).toBe('3383')
        })
    })
})