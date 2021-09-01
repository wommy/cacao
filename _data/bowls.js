const client = require('../utils/sanity')

module.exports = async ()=> await client.fetch(`*[_type=='powerbowls'] | order(_createdAt asc){ powerbowls, 'ingredients': ingredients[]->ingredient }`)
