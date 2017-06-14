/*export const increment = state =>{
	state+=5;
}
export const increment = state =>{
	state-=3;
}*/
import * as types from './mutation-types'

export default {
	[types.INCREMENT](state){
		state += 5;
	},
	[types.DECREMENT](state){
		state += 5;
	}
}