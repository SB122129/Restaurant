    let button= document.getElementById('btn1')
    button.addEventListener('click', createTable)

    let names = document.getElementById('name');
     let price = document.getElementById('price');
     let Ingredients = document.getElementById('Ingredients');
let counter = 0;
function createTable(){
  let na = document.getElementById('name').value;
  if (na == "") {
    alert("Food Name must be filled out");
    return false;
  }
  let ing = document.getElementById('Ingredients').value;
  if (ing == "") {
    alert("Ingredients must be filled out");
    return false;
  }
  let pri = document.getElementById('price').value;
  if (pri == "") {
    alert("Price must be filled out");
    return false;
  }
  
    let table = document.getElementById("menutable");
    let row = table.insertRow();
    let innerRow = document.getElementById('menutable').rows.length;
    row.id=innerRow
   
    let cell0 = row.insertCell(0)
    let cell1 = row.insertCell(1);
    let cell2 = row.insertCell(2);
    let cell3 = row.insertCell(3);
    let cell4 = row.insertCell(4);
    counter++;
    cell0.innerHTML = counter;
    cell1.innerHTML = names.value;
    cell2.innerHTML = Ingredients.value;
    cell3.innerHTML = price.value;
    
    let remover=document.createElement('input');
          remover.type = "button"; 
          remover.id="removebtn"
          remover.value = "Remove";
          remover.style = " background: blue; border: 0; font-size: 16px; font-weight: 300; line-height: 2.5;  outline: transparent; padding: 0 1rem; text-align: center;color:white;border-radius:1px"
          cell4.appendChild(remover); 
         
    remover.onclick = function removeRow(){
        const element = document.getElementById(innerRow);
        element.remove(innerRow );
    }
    }