import f from './f'
import {refs} from './HTMLelements'
import {animations} from './animations'
import filmTpl from './filmTpl.handlebars'
renderAll()

function renderAll(){
        animations.clear()
        f.getAllMovies().then(movies=>{
        const markUp = filmTpl(movies)
        refs.container.insertAdjacentHTML('beforeend', markUp)
        })
}

refs.getAllMovies.addEventListener('click', renderAll)

refs.postMovie.addEventListener('click', ()=>{
    try {
        animations.addForm()
        const form = document.querySelector('.form')
        form.addEventListener('submit', (e)=>{
            e.preventDefault()
            const newMovie={
                title:e.currentTarget.elements.title.value,
                director:e.currentTarget.elements.select.value
            }
            f.postMovie(newMovie)
            animations.clear()
        }
            ) 
    } catch (error) {
        console.log(error)
    }
})

document.body.addEventListener('click', (e)=>{
    if(e.target.classList.value.includes('del')){
        f.deleteMovieById(e.target.id)
        setTimeout(()=>{renderAll(); console.log('hi')}, 10)
    }
})