// const process = require('process')
const client = require('../utils/sanity')

const bowls = async ()=> await client.fetch(`*[_type=='powerbowls'] | order(_createdAt asc){ powerbowls, 'ingredients': ingredients[]->ingredient }`)

module.exports = async ()=> await client.fetch(`*[_type=='salads'] | order(_createdAt asc){ salads, 'ingredients': ingredients[]->ingredient }`)
