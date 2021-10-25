fetch('https://api.adviceslip.com/advice')
    .then(data=>data.json())
    .then(response=>{
            const motivation_quote = response.slip.advice;
            const motivation_element = document.getElementById('motivation_element');
            motivation_element.innerHTML = motivation_quote;
    })