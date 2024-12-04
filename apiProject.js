// https://api.tvmaze.com/search/shows?q=girls
const form = document.querySelector('form')
const section = document.querySelector('section')
form.addEventListener('submit',async function(e){
    e.preventDefault()
    try{
        const input = form.elements.searchInput
        const showsArr = await getapiResponce(input.value)
        console.log(showsArr)
        section.innerHTML = ''
        section.classList.remove('toggle')
        createShowsCards(showsArr)
        input.value = ''

    }catch(e){
        console.log(e)
    }
    
})

const createShowsCards = (arr)=>{
    for (const show of arr) {
        if(show.show.image){
            const div = document.createElement('div')
            const img = document.createElement('img')
            img.src = show.show.image.medium
            div.append(img)
            section.append(div)
        }
    }
}

const getapiResponce = async(search)=>{
    try{
        const config = {params:{q:search}}
        const res = await axios.get('https://api.tvmaze.com/search/shows',config);
        return res.data
    }catch(e){
        console.log(e)
    }
}
