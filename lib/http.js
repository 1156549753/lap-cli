// 通过 axios 处理请求
const axios = require('axios');

axios.interceptors.response.use(res => {
    return res.data;
});

/**
 * 获取模版列表
 * @returns Promise
 */
async function getRepoList(){
    // return axios.get('https://api.github.com/orgs/zhurong-cli/repos')
    return axios.get('https://api.github.com/users/1156549753/repos')
}

/**
 * 获取版本信息
 * @param {*} repo 
 * @returns Promise
 */
async function getTagList(repo){
    // return axios.get(`https://api.github.com/repos/zhurong-cli/${repo}/tags`)
    console.log(`https://api.github.com/repos/1156549753/${repo}/tags`)
    return axios.get(`https://api.github.com/repos/1156549753/${repo}/tags`)
}

module.exports = {
    getRepoList,
    getTagList
}