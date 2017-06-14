/*export const increment = ({commit})=>commit('increment');
export const decrement = ({commit})=>commit('decrement');*/
import * as types from './mutation-types'

export default{
	increment({commit}){
		commit(types.INCREMENT);
	},
	decrement({commit}){
		commit(types.DECREMENT);
	}
}