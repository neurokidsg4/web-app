
import { PhotoRegister } from './entities/FotoCadastro.js'

const photo = document.getElementById('photo');
const filePictury = document.getElementById('file__pictury');

var photoReader;

filePictury.addEventListener('change', function(evt) {

    photoReader = evt.target.files[0];

    if (!(evt.target && evt.target.files && evt.target.files.length > 0)) {
        return;
    }

    photoReader = new PhotoRegister(
        evt.target.files[0].lastModified,
        evt.target.files[0].lastModifiedDate,
        evt.target.files[0].name,
        evt.target.files[0].size,
        evt.target.files[0].type,
        evt.target.files[0].webkitRelativePath,
    )

    var r = new FileReader();
    r.onload = function() {
        photo.src = r.result;

        photo.style.maxHeight = "120px";
        photo.style.maxWidth = "120px";
        photo.style.borderRadius = "9999px";
    }
    r.readAsDataURL(evt.target.files[0]);
})

export const returnPhoto = () => {
    return photoReader;
}
