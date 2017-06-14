import axios from 'axios'

const baseUrl = 'https://cnodejs.org/api/v1';

export default {
	getTopics(params){
		return axios.get(`${baseUrl}/topics?tab=${params.tab}&page=${params.page}&limit=${params.limit}&mdrender=${params.mdrender}`)
	},
	getTopic(params){
        return axios.get(`${baseUrl}/topic/${params.accesstoken}?mdrender=${params.mdrender}`)
    },
}