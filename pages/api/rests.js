// APIのアクセス上限数ありなので注意

import fetch from 'isomorphic-unfetch';

export default async (req, res) => {
  const {
    query: {
      area,
      keyword
    },
  } = req;

  // 不適切なkeywordが与えられたら，何も返さない
  if(keyword==undefined || keyword.length < 2){
      return res.json([]);
  }

  // 未入力なら，おもろまち固定
  const defaddress = "沖縄県那覇市おもろまち1";
  let address = "";
  if(area==undefined || area==""){
      address = encodeURIComponent(defaddress);
  }else{
      address = encodeURIComponent(area);
  }

  const keyid = process.env.GNAVI_ACCESSKEY;
  const freeword = encodeURIComponent(keyword);

  const url = `https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=${keyid}&address=${address}&freeword=${freeword}&hit_per_page=40`
  const datas = await fetch(url).then(res => res.text());
  const restsRaw = await JSON.parse(datas);

  // 検索結果がない場合のエラー処理
  if(restsRaw.error){
    return res.json([]);
  }

  const rests = restsRaw.rest;

  //shop_image1とshop_image2に対して両方空文字列だったら除外する
  // image1が何か入ってる又はimage2が何が入ってる時，fileterで取り出す
  const frests = rests
    .filter(rest => (rest.image_url.shop_image1 !== "" || rest.image_url.shop_image2 !== ""))
    .map(rest => ({
      id: rest.id,
      name: rest.name,
      image_url: rest.image_url.shop_image1 || rest.image_url.shop_image2,
      url: rest.url,
    }));

  res.json(frests);
};
