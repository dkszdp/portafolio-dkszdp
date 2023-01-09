//<button id="boton"><img src="./img/mn.png"></button> (<- esto va al inicio del body)
//<script defer src="./index.js"></script> (<- esto va en el head debajo de los styles)

const boton = document.getElementById("boton")
const h1 = document.getElementById("h1")
const h2t = document.getElementById("h2t")
const h2p = document.getElementById("h2p")

boton.addEventListener("click", mostrarEvento)
function mostrarEvento() {
    alert("¡Feliz Navidad!")
    h1.textContent = "🎄 Hola, soy David 🎄"
    h2t.textContent = "🎁 Algunos de mis trabajos 🎁"
    h2p.textContent = "🎊 Aquí tienes algunos de mis proyectos 🎊"
    var embedimSnow=document.getElementById("embedim--snow");if(!embedimSnow){function embRand(a,b){return Math.floor(Math.random()*(b-a+1))+a}var embCSS='.embedim-snow{position: absolute;width: 10px;height: 10px;background: white;border-radius: 50%;margin-top:-10px}';var embHTML='';for(i=1;i<200;i++){embHTML+='<i class="embedim-snow"></i>';var rndX=(embRand(0,1000000)*0.0001),rndO=embRand(-100000,100000)*0.0001,rndT=(embRand(3,8)*10).toFixed(2),rndS=(embRand(0,10000)*0.0001).toFixed(2);embCSS+='.embedim-snow:nth-child('+i+'){'+'opacity:'+(embRand(1,10000)*0.0001).toFixed(2)+';'+'transform:translate('+rndX.toFixed(2)+'vw,-10px) scale('+rndS+');'+'animation:fall-'+i+' '+embRand(10,30)+'s -'+embRand(0,30)+'s linear infinite'+'}'+'@keyframes fall-'+i+'{'+rndT+'%{'+'transform:translate('+(rndX+rndO).toFixed(2)+'vw,'+rndT+'vh) scale('+rndS+')'+'}'+'to{'+'transform:translate('+(rndX+(rndO/2)).toFixed(2)+'vw, 105vh) scale('+rndS+')'+'}'+'}'}embedimSnow=document.createElement('div');embedimSnow.id='embedim--snow';embedimSnow.innerHTML='<style>#embedim--snow{position:fixed;left:0;top:0;bottom:0;width:100vw;height:100vh;overflow:hidden;z-index:9999999;pointer-events:none}'+embCSS+'</style>'+embHTML;document.body.appendChild(embedimSnow)}
}