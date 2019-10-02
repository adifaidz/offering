const axios = require('axios')
const querystring = require('querystring')
const url = `https://steamcommunity.com/market/search/render`
const defaultParams = {
    appid: 570,
    currency: 17,
    norender: 1,
}

exports.all = async (req, res) => {
    const params = getParams(req)
    // console.log(`${url}/?${querystring.stringify(params)}`);
    const {data : response} = await axios.get(`${url}/?${querystring.stringify(params)}`)
    res.json(response)
}

function getParams(req){
    return Object.assign({}, defaultParams, {...req.query})
}
