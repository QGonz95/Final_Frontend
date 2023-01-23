export const exOpts = {
    method: 'GET',
    headers: {
          'X-RapidAPI-Key': '0f9c1f6659msh66a03d4066d6c46p170f0fjsnce08c2e2b918',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
};

export const ytOpts = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '0f9c1f6659msh66a03d4066d6c46p170f0fjsnce08c2e2b918',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
export const getData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();

    return data;
};