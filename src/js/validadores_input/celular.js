
const regex = new RegExp('[0-9]{2}');
const regex2 = new RegExp('[a-zA-Z]+');
const celular = document.getElementById("celular");



window.onload = function(){
    
    celular.addEventListener("input", up);

    function up() {
        
        if(celular.value.length >= 2 && celular.value.length < 3) {
           
            try {
                const valueNew = celular.value.replace(regex, `(${regex.exec(celular.value)[0]}) `);
                celular.value = valueNew;
                
            } catch (err) {
                console.log(err);
            };
        }
        console.log(regex2.test(celular.value));
    }
}
