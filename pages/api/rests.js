import fetch from 'isomorphic-unfetch';

export default async (req, res) => {
	const keyid = process.env.GNAVI_ACCESSKEY;
	const freeword = '%E6%96%B0%E9%83%BD%E5%BF%83+%E5%B1%85%E9%85%92%E5%B1%8B';

	const data = await fetch(`https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=${keyid}&freeword=${freeword}`)
		.then(res => res.text());
	const restsRaw = JSON.parse(data).rest;

	const rests = restsRaw
	.filter(rest => (rest.image_url.shop_image2 && rest.image_url.shop_image2) != '')
	.map(rest => ({
		id:rest.id,
		name:rest.name,
		image_url:rest.image_url.shop_image1 || rest.image_url.shop_image2,
		url:rest.url
	}));
	res.json(rests);
}