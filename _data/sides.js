const client = require('../utils/sanity')

module.exports = async ()=> await client.fetch(`*[_type=='sidesExtras'] | order(_createdAt asc){ sidesExtras, 'ingredients': ingredients[]->ingredient }`)
