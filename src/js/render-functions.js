import SimpleLightbox from 'simplelightbox'; 
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector(".gallery");


export function createMarkup(arr) {
    
  
    gallery.innerHTML = arr
      .map(
        ({ webformatURL, largeImageURL, tags }) => 
          `<li>
            <a href="${largeImageURL}">
              <img src="${webformatURL}" alt="${tags}" width="300">
            </a>
          </li>`
      )
      .join(''); 
  
    lightbox = 
  
    light
  new SimpleLightbox('.gallery a'); 
    lightbox.refresh(); 
  }