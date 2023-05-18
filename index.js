const loadData=search=>{
    const url=`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`

    try {
        fetch(url)
        .then(res=>res.json())
        .then(data=>displayData(data))
      } catch (error) {
        alert('output is not alllow')
        
      }
 
}

const displayData=data=>{

        console.log(data[0].phonetics[2].audio)

        const appiendChaildDiv=document.getElementById('appiendChaildDiv')

        const div=document.createElement('div')
        div.classList.add('card-body')
        div.innerHTML=`
        
        <div class="card-body">
     
        <div class="d-flex justify-content-between">
                <h1>${data[0].word} <br>${data[0].phonetic}</h1>
                <audio controls>
                    
                    <source src="${data[0].phonetics[2].audio ? data[0].phonetics[2].audio :'not found is audio' }" type="audio/mpeg">
                   
                  </audio>
        </div>

        <div class="d-flex  justify-content-start align-items-center" >
                <h2 >${data[0].meanings[0].partOfSpeech}</h2>
                <hr class="w-50 ms-5">
        </div>

        <div>
            <h4>Meaning</h4>
            <ul>
                <li>${data[0].meanings[0].definitions[0].definition}</li>
                <li>${data[0].meanings[0].definitions[1].definition}</li>
                <li>${data[0].meanings[0].definitions[2].definition}</li>
            </ul>
        </div>
        <div>
            <h3>synonymus: <span>${data[0].meanings[0].synonyms[0]}</span></h3>
        </div>

        <div class="d-flex  justify-content-start align-items-center" >
            <h2 >${data[0].meanings[1].partOfSpeech}</h2>
            <hr class="w-50 ms-5">
    </div>

    <div>
        <h4>Meaning</h4>
        <ul>
            <li>${data[0].meanings[1].definitions[0].definition}</li>
            <p>"${data[0].meanings[1].definitions[0].example}"</p>
            
        </ul>
        <p>source: ${data[0].sourceUrls}</p>
    </div>


    </div>
        
        
        
        
        `
appiendChaildDiv.appendChild(div)
}


const searchableBtn=()=>{

 const input_textValue=document.getElementById('input_textValue').value

 loadData(input_textValue)

}

loadData('keyboard');