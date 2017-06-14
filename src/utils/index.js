import showdown from 'showdown'
const convert= new showdown.Converter()

function tab(val,top,good){
	if(top) return '置顶';
	if(good) return '精华';
	let tab = {
		'good'	:'精华',
		'share'	:'分享',
		'ask'	:'问答',
		'job'	:'招聘'
	};
	return tab[val] || '';
};
function timeAgo(val){
	let nowDate 	= new Date().getTime();
	let oldDate 	= new Date(val).getTime();
	let diff 		= parseInt((nowDate - oldDate) /1000);
	let year 		= 365*24*60*60;
	let mouths 		= 30*24*60*60;
	let days 		= 24*60*60;
	let hours 		= 60*60;
	let minutes 	= 60;
	let seconds 	= 1;
	if(diff < seconds){
		return '刚刚'
	}else if(diff < minutes){
		return minutes + '秒前'
	}else if(diff < hours){
		return parseInt(diff / minutes) + '分前'
	}else if(diff < days){
		return parseInt(diff / hours) + '小时前'
	}else if(diff < mouths){
		return parseInt(diff / days) + '天前'
	}else if(diff < year){
		return parseInt(diff / mouths) + '月前'
	}else{
		return parseInt(diff / year) + '年前'
	}
};

function mdToHtml(val) {
    return convert.makeHtml(val)
}

export default {
	tab,
	timeAgo,
	mdToHtml
}