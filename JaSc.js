let gusto;

function editar(){
    if(document.getElementById("gusto").value==='')
    {

    }
    else
    {
        gusto = document.getElementById("gusto").value;
        var count = 0;
        var edit = "editar";
    
        document.getElementById('head-gusto').innerHTML += `<td id='"+${gusto}+"name'>${gusto}</td>`;
        document.getElementById('head-prtg').innerHTML += `<td id='"+${gusto}+"prt'>0</td>`;
        document.getElementById('head-edit').innerHTML += `<td id='"+${gusto}+"'><a type='button' onclick='"transformarEditable()"'>Editar</a></td>`;
    
    }
}

function datos(){
    const valorurl=window.location.search;
    const urlp = new URLSearchParams(valorurl);
}

function transformarEditable(){
        
    }

$("#btn-gustos").on('click',editar);
$("#"+gusto).on('click',transformarEditable())