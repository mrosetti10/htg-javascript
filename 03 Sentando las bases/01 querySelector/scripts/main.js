console.info('Cuando veas éste mensaje en consola, ya habrás terminado ésta parte del ejercicio. Borra ésta línea cuando ya la hayas visto alguna vez en la consola al acceder a ésta página.')
var comentarios = document.querySelectorAll('.comment--text') ;
comentarios[2].style.fontSize="30px"
var estilo = document.querySelectorAll('hr') ;
for ( i=0;i<estilo.length;i++){
    estilo[i].classList.add('.colorido');
    }
    