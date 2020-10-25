import $ from 'jQuery'
import './../styles/index.css'
import events from './events'

function main(){
    events.handleListeners()
    events.render()
}

$(main)