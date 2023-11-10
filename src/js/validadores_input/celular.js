
window.onload = function(){
    const regex = new RegExp('[0-9]{2}');
    
    const celular = document.getElementById("celular");
    celular.addEventListener("keyup", up);

    function up() {
        
        if(celular.value.length >= 2 && celular.value.length < 3) {
            const valueNew = celular.value.replace(regex, `(${regex.exec(celular.value)[0]}) `);
            celular.value = valueNew;
        }
    }
}
