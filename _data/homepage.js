import * as prismic from '@prismicio/client'

const repositoryName = 'wandoledzep-cms'
const client = prismic.createClient(repositoryName);

export default async function () {
	return await client.getSingle('homepage');
}