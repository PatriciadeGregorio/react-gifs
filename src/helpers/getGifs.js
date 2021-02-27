export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=EgG1mUT15b2B4bzReDEZ0HVZcQq5x04z&q=${ encodeURI(category) }&limit=10`; 
    const resp = await fetch(url);
    const {data} = await resp.json();
    
    const gifs = data.map(image => {
        return {
            id: image.id,
            title: image.title,
            url: image.images?.downsized_medium.url
        };
    })

    return gifs;
}