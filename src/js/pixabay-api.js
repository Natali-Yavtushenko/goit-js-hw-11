const API_KEY = "46773750-2567d69edc75d4703fc28c418"
const BASE_URL = 'https://pixabay.com/api/';

export function fetchImages(query) {
    const url = `${BASE_URL}?key=${API_KEY}&q=${query}`;
  
    return fetch(url)
      .then(response => {
    
        
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
    
        
      })
      .catch(error => {
        console.error("Error fetching images:", error);
        throw error;
      });
  }




 


    











