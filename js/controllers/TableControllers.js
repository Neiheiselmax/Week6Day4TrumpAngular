(function() {
    'use strict';

    angular
        .module('taco')
        .controller('TableController', function(API) {

          const vm = this;

          let svg = document.querySelector('svg');


            let counter = 0;
            svg.addEventListener('click', e =>{

            if(counter==0)
            {
                let face = document.getElementById('layer7');
                face.classList.add('faceDown');
            }
            else if(counter==1)
            {
                let leftEye = document.getElementById('layer6');
                leftEye.classList.add('leftEye');
            }
            else if(counter==2)
            {
                let rightEye = document.getElementById('layer5');
                rightEye.classList.add('rightEye');
            }
            else if(counter==3)
            {
                let nose = document.getElementById('layer4');
                nose.classList.add('nose');
            }
            else if(counter==4)
            {
                let hair = document.getElementById('layer2');
                hair.classList.add('hair');
            }
            counter++;
            let data = API.getData();
            data.then(function successCallback(response){
                console.log(response)
                vm.quote = response.data.value
            
            svg.addEventListener('click', e =>{
            let mouth = document.getElementById('layer3');
            mouth.classList.add('mouth');
            
            })
            })
        })


        });
})();
