import { Action } from '@ngrx/store'
import { Flip } from '../interfaces/flip.model'
import * as flipActions from '../actions/flips.actions'
import * as data from './data'

let initialState = {}
let allFlips = []

function rnd(min,max){
    return Math.floor(Math.random()*(max-min+1)+min );
}


function getData(subject) {
    let pool = []
    for (let index = 0; index < 20; index++) {
        pool.push({
            title: 'What is a cell?',
            subject: subject,
            text:`<img src="https://images.pexels.com/photos/789382/pexels-photo-789382.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <b>Lorem ipsum dolor sit, </b>amet consectetur adipisicing elit. Nisi, autem eum, hic ipsam vel tenetur at sunt aliquid incidunt accusantium, soluta minus ipsa non nam quod asperiores officiis cumque amet.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates reprehenderit, ut corporis odit, minus vel placeat expedita dolore enim deserunt sunt dolorum ad blanditiis sint aut animi, eum eveniet temporibus.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, autem eum, hic ipsam vel tenetur at sunt aliquid incidunt accusantium, soluta minus ipsa non nam quod asperiores officiis cumque amet.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates reprehenderit, ut corporis odit, minus vel placeat expedita dolore enim deserunt sunt dolorum ad blanditiis sint aut animi, eum eveniet temporibus.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, autem eum, hic ipsam vel tenetur at sunt aliquid incidunt accusantium, soluta minus ipsa non nam quod asperiores officiis cumque amet.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.<img src="https://images.pexels.com/photos/2376996/pexels-photo-2376996.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" /> Voluptates reprehenderit, ut corporis odit, minus vel placeat expedita dolore enim deserunt sunt dolorum ad blanditiis sint aut animi, eum eveniet temporibus.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, autem eum, hic ipsam vel tenetur at sunt aliquid incidunt accusantium, soluta minus ipsa non nam quod asperiores officiis cumque amet.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates reprehenderit, ut corporis odit, minus vel placeat expedita dolore enim deserunt sunt dolorum ad blanditiis sint aut animi, eum eveniet temporibus.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, autem eum, hic ipsam vel tenetur at sunt aliquid incidunt accusantium, soluta minus ipsa non nam quod asperiores officiis cumque amet.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. <img src="https://images.pexels.com/photos/2376996/pexels-photo-2376996.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" /> Voluptates reprehenderit, ut corporis odit, minus vel placeat expedita dolore enim deserunt sunt dolorum ad blanditiis sint aut animi, eum eveniet temporibus.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, autem eum, hic ipsam vel tenetur at sunt aliquid incidunt accusantium, soluta minus ipsa non nam quod asperiores officiis cumque amet.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates reprehenderit, ut corporis odit, minus vel placeat expedita <img src="https://images.pexels.com/photos/2376996/pexels-photo-2376996.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" /> dolore enim deserunt sunt dolorum ad blanditiis sint aut animi, eum eveniet temporibus.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, autem eum, hic ipsam vel tenetur at sunt aliquid incidunt accusantium, soluta minus ipsa non nam quod asperiores officiis cumque amet.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates reprehenderit, ut corporis odit, minus vel placeat expedita dolore enim deserunt sunt dolorum ad blanditiis sint aut animi, eum eveniet temporibus.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, autem eum, hic ipsam vel tenetur at sunt aliquid incidunt accusantium, soluta minus ipsa non nam quod asperiores officiis cumque amet.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates reprehenderit, ut corporis odit, minus vel placeat expedita dolore enim deserunt sunt dolorum ad blanditiis sint aut animi, eum eveniet temporibus.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, autem eum, hic ipsam vel tenetur at sunt aliquid incidunt accusantium, soluta minus ipsa non nam quod asperiores officiis cumque amet.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates reprehenderit, ut corporis odit, minus vel placeat expedita dolore enim deserunt sunt dolorum ad blanditiis sint aut animi, eum eveniet temporibus.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. <img src="https://images.pexels.com/photos/2376996/pexels-photo-2376996.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" /> Nisi, autem eum, hic ipsam vel tenetur at sunt aliquid incidunt accusantium, soluta minus ipsa non nam quod asperiores officiis cumque amet.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates reprehenderit, ut corporis odit, minus vel placeat expedita dolore enim deserunt sunt dolorum ad blanditiis sint aut animi, eum eveniet temporibus.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, autem eum, hic ipsam vel tenetur at sunt aliquid incidunt accusantium, soluta minus ipsa non nam quod asperiores officiis cumque amet.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates reprehenderit, ut corporis odit, minus vel placeat expedita dolore enim deserunt sunt dolorum ad blanditiis sint aut animi, eum eveniet temporibus.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, autem eum, hic ipsam vel tenetur at sunt aliquid incidunt accusantium, soluta minus ipsa non nam quod asperiores officiis cumque amet.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates reprehenderit, ut corporis odit, minus vel placeat expedita dolore enim deserunt sunt dolorum ad blanditiis sint aut animi, eum eveniet temporibus.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, autem eum, hic ipsam vel tenetur at sunt aliquid incidunt accusantium, soluta minus ipsa non nam quod asperiores officiis cumque amet.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates reprehenderit, ut corporis odit, minus vel<img src="https://images.pexels.com/photos/2376996/pexels-photo-2376996.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />  placeat expedita dolore enim deserunt sunt dolorum ad blanditiis sint aut animi, eum eveniet temporibus.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, autem eum, hic ipsam vel tenetur at sunt aliquid incidunt accusantium, soluta minus ipsa non nam quod asperiores officiis cumque amet.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates reprehenderit, ut corporis odit, minus vel placeat expedita dolore enim deserunt sunt dolorum ad blanditiis sint aut animi, eum eveniet temporibus.
            Lorem ipsum dolor sit, amet consectetur 
            `,
            banner: 'https://source.unsplash.com/random/?',
            paid: index % 3 === 0 ? true : false,
            longDesc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, autem eum, hic ipsam vel tenetur ',
            id: `${data.subjects[rnd(0, data.subjects.length - 1)]}${index}`,
            description: 'A simple flip',
            level: getLevel(index),
            isBookmarked: index % 4 === 0 ? true : false
        })
    }
    return pool
}

function getLevel(lvl) {
    if (lvl % 2 === 0) {
        return 'Beginner'
    } else if (lvl % 3 === 0) {
        return 'Intermediate'
    } else {
        return 'Advanced'
    }
}

data.subjects.forEach(subject => allFlips.push({
    subject,
    flips: getData(subject)
  })
)

initialState = {
    flips: allFlips,
    selectedFlip: {}
}

export function flipReducer( state = initialState, action: flipActions.Actions) {
    switch (action.type) {
        case flipActions.SAVE_FLIPS:
            return action.payload;
        case flipActions.SELECT_FLIP:
            return {
                ...state, 
                selectedFlip: action.payload
            };
        case flipActions.DELETE_FLIP:
            return state
        default: state
            break;
    }
}