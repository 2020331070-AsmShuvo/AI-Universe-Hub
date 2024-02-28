const loadCards = async ()=>{
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools')
    const data = await res.json();
    const AIs = data.data.tools;
    // console.log(AIs);
    displayAI(AIs);
}
const displayAI = (AIs) =>{
    console.log(AIs.length);
    if(AIs.length>6){
       AIs = AIs.slice(0,6);
    }
    else{
        const showAllBtn = document.getElementById('btn-show');
        showAllBtn.classList.add('hidden');
        
    }

    const cardConatainer = document.getElementById('cards-container');
    AIs.forEach(item => {
        // console.log(item.name);
        const card = document.createElement('div');
        card.classList = 'card card-compact w-96 bg-base-100 shadow-xl p-4 gap-2 m-4';
        card.innerHTML = `
            <figure><img src=${item.image} alt="Shoes" /></figure>
            <div class="card-body">
            <h2 class="card-title ">Features</h2>
            <ul class="text-gray-500" id="ul-${item.id}">
            </ul>
            <hr>
            <h2 class="card-title text-gray-700">${item.name}</h2>
            <div class="card-actions justify-end">
                <p class="text-sm text-gray-500">Date: ${item.published_in} </p>

                <button class="btn text-gray-700 rounded-full"><i class="fa-solid fa-arrow-right"></i></button>
            </div>
            </div>
        `;
        cardConatainer.appendChild(card);

        const ul = document.getElementById(`ul-${item.id}`);

        item.features.forEach(feature =>{
            const li = document.createElement('li');
            li.innerText = feature;
            ul.appendChild(li);
        });

    });
}

loadCards();