const input = document.querySelector('#add-item input');
const form = document.forms[1];
const groceryList = document.getElementById('grocery-list');
let checkBox = document.querySelector('#hide');
const searchBar = document.forms[0][0];
const ul = document.querySelector('.heading');
const panel = document.querySelectorAll('.panel');

function remove(){
    if(checkBox.checked){
        groceryList.style.display = 'none';
    }else{
        groceryList.style.display = 'block';
    }
}

function removeLi(e){
    const target = e.target;
    if(target.className === 'delete'){
        target.parentElement.remove();
    }
}

function addItem(e){
    e.preventDefault();
    const li = document.createElement('li');
    const groceryListUl = document.querySelector('#grocery-list ul');
    groceryListUl.appendChild(li);
    li.innerHTML = `
    <span class="item">${input.value}</span>
    <span class="delete">delete</span>
    `
    input.value = '';
}

function search(e){
   
    const searchbarText = e.target.value.toLowerCase();
    const spanElements = document.querySelectorAll('#grocery-list ul li .item');
    const dataAttribute = e.target.dataset.clicked;
    const spanArray = Array.from(spanElements);
    spanArray.forEach((item) => {
        const items = item.textContent.toLowerCase();
        if(items.indexOf(searchbarText) === -1){
            item.parentElement.style.display = 'none';
        }else{
            item.parentElement.style.display = 'block';
        }

        //  let targetPanel = document.querySelector(dataAttribute);
        //  console.log(targetPanel);
    })

    // const li = document.querySelectorAll('#grocery-list ul li .item');
    // li.forEach((item) => {
    //     if(item.firstChild.data.toLowerCase() === searchBar.value.toLowerCase()){
    //         const spanParent = item.parentElement;
    //         const ul = item.parentElement.parentElement;
    //         const ulItems = item.parentElement.parentElement.children;
    //         for(let i = 0; i < ulItems.length; i++){
    //             if(ulItems[i].firstElementChild.innerText.toLowerCase() === searchBar.value.toLowerCase()){
    //                 ulItems[i].style.display = 'block'
    //             }else{
    //                 ulItems[i].style.display = 'none'
    //             }
    //         }
    //     }
    //     if(searchBar.value === ''){
    //         let items = item.parentElement.parentElement.children
    //         for(let i = 0; i < items.length; i++){
    //             items[i].style.display = 'block'
    //         }
    //     }
    // })

}

// function show(e){
//     if(e.target.innerText === 'Food joke'){
//         const fact = document.getElementById('facts');
//         fact.classList.remove('active');
//         const joke = document.getElementById('joke');
//         joke.classList.toggle('active');
//     }
//     else if(e.target.innerText === 'Did you know'){
//         const joke = document.getElementById('joke');
//         joke.classList.remove('active');
//         const fact = document.getElementById('facts');
//         fact.classList.toggle('active');

//     }
// }

groceryList.addEventListener('click',removeLi);
form.addEventListener('submit',addItem);
checkBox.addEventListener('change', remove);
searchBar.addEventListener('keyup', search);
let selectedElement = null;
ul.addEventListener('click', (e) => {
    let target = e.target;
    let dataAttribute = target.dataset.clicked;
    if(target.tagName === 'LI'){
        if(selectedElement != null){
            selectedElement.classList.toggle('selected');
        }
        selectedElement = target;
        selectedElement.classList.toggle('selected');

        panel.forEach((panel) => {
            let targetPanel = document.querySelector(dataAttribute);
            if(panel === targetPanel){
                panel.style.display = 'block';
            }else{
                panel.style.display = 'none';
            }
        })
    }
});

const button = document.getElementById('showanswer');
button.addEventListener('click', () => {
    const paragraph = button.nextElementSibling;
        if(paragraph.innerText === ''){
            paragraph.innerText = 'An impasta';
        }else{
            paragraph.innerText = '';
        }
    
})