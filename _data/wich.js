const client = require('../utils/sanity')

module.exports = async ()=> await client.fetch(`*[_type=='wrapSandwich'] | order(_createdAt asc){ wrapSandwich, 'ingredients': ingredients[]->ingredient }`)
