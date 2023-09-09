export const exerciseOptions = {
    method: 'GET',
    
    headers: {
      'X-RapidAPI-Key': 'b4c51a09aamsh1e83d9031451183p19ffdbjsnaacde3a80c17',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'b4c51a09aamsh1e83d9031451183p19ffdbjsnaacde3a80c17',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async(url, options) => {
    const response = await fetch(url, options);
    const data = response.json();

    return data;
}