import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector('.gallery');
for (const item of galleryItems) {
  const listElement = document.createElement('li');
  listElement.className = 'gallery_item';
  listElement.innerHTML = `<a class="gallery__link" href=${item.original}>
    <img
      class="gallery__image"
      src=${item.preview}
      data-source=${item.original}
      alt=${item.description}
    />
  </a>`;
  galleryList.append(listElement);
}
galleryList.addEventListener('click', showOryginalSize);
const showOryginalSize = event => {
  event.preventDefault();
  const instance = basicLightbox.create(`${event.target.getAttribute(
    'data-source'
  )}
`);

  instance.show();
};
console.log(galleryItems);
