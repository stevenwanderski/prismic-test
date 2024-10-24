import EleventyFetch from "@11ty/eleventy-fetch";

export default async function () {
	let url = "https://wandoledzep-cms.cdn.prismic.io/api/v2/documents/search?ref=ZxqccRIAACIAk0-d";

	return EleventyFetch(url, {
		duration: "1d",
		type: "json",
	});
};