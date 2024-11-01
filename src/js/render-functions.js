import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox;

export function   
 renderImages(images) {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = images
    .map(
      ({ webformatURL, largeImageURL, tags }) =>
        `<li>
          <a href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags}" width="300">
          </a>
        </li>`
    )
    .join('');

 
  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a');
  }
}