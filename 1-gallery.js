import"./assets/modulepreload-polyfill-ec808ebb.js";import"./index.js";import{S as i}from"./assets/vendor-ca3668cb.js";const g=[{preview:"small-image1.jpg",original:"large-image1.jpg",description:"Image 1"},{preview:"small-image2.jpg",original:"large-image2.jpg",description:"Image 2"},{preview:"small-image3.jpg",original:"large-image3.jpg",description:"Image 3"}],r=document.querySelector(".gallery"),m=g.map(({preview:a,original:e,description:l})=>`<li class="gallery-item">
        <a class="gallery-link" href="${e}">
          <img class="gallery-image" src="${a}" alt="${l}" />
        </a>
      </li>`).join("");r.innerHTML=m;new i(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=1-gallery.js.map
