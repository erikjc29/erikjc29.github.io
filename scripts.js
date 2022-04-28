        textoArea= document.querySelector(".textoEncriptador")
        btnEncriptar=document.querySelector(".btn1")
        btnDesencriptar=document.querySelector(".btn2")        
        box21=document.querySelector(".box-2-1")
        textoAreaResultado= document.querySelector(".textoEncriptado");
        var btn3= document.querySelector(".btn3");

        function encriptar(){
            if(textoArea.value==""){}
            else{
                box21.innerHTML=`<div><textarea class="textoEncriptado" readonly></textarea></div>
                <div class="btnCopiar"><button class="btn3 btn">Copiar y pegar</button></div>`;
                var textoAreaResultado= document.querySelector(".textoEncriptado");
                var btn3= document.querySelector(".btn3");
                var texto = textoArea.value;
                var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
                textoAreaResultado.value = textoCifrado;
                function copiar(){
                    textoAreaResultado= document.querySelector(".textoEncriptado");
                    textoArea.value=textoCifrado
                    console.log(textoCifrado);
                }
                btn3.onclick=copiar;
            }    
        }

        function desencriptar(){ 
            textoAreaResultado= document.querySelector(".textoEncriptado");
            var btn3= document.querySelector(".btn3");
            textoArea= document.querySelector(".textoEncriptador")
            var texto = textoArea.value;
            var textoDescifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); 
            textoAreaResultado.value = textoDescifrado;
            function copiar(){
                textoAreaResultado= document.querySelector(".textoEncriptado");
                textoArea.value=textoDescifrado
                console.log(textoDescifrado);
            }
            btn3.onclick=copiar;
        }
        btnDesencriptar.onclick=desencriptar;
        btnEncriptar.onclick=encriptar;
        