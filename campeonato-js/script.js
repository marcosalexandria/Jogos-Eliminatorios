//Array que vai receber os nomes do clubes
let arr=[]

//Div que irá mostrar os nomes dos clubes
let res=document.getElementById("res")

//Função que adiciona os nomes dos clubes
function adc(){
    //Pegando o valor do input e colocando na variável "clube"
    let clube=document.getElementById("clube").value
    
    //Se clube estiver vázio ou receber um vlor numerioco, mostra um alerta de erro
    if(clube==0||clube==Number(clube)){
        alert("ERRO, adicione nomes de clubes")
    }else if(arr.length>3){ //Se for adicionar mais de 4 clubes, alerta de erro
        alert("ERRO,As semifinais são formadas por 4 clubes, não é possivel conter mais clubes.")
    }else

    //o arr recebe o valor de clube e adiciona na ultima posição
    arr.push(clube)

    //variável que sera usada para receber os valores de string no laço de repetição
    let lista=""

    //laço de repetição que dará os nomes nos clubes ao arr
    for(let i=0;i<arr.length;i++){
        lista+= i+1 + arr[i] + "<br>"
        res.innerHTML= lista
        document.getElementById("clube").value=""
    }
} document.getElementById("adc").addEventListener("click", adc)

//função que montará a tabela das semifinais
function tab(){
   let jogos= arr[0] + " X " + arr[3] + "<br>" + arr[1] + " X " + arr[2]
   res.innerHTML=jogos
} document.getElementById("tab").addEventListener("click", tab)