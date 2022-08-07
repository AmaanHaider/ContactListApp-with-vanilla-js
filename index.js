let filterInputs= document.getElementById('FiterInput');
        filterInputs.addEventListener('keyup',fiterNames)

        function fiterNames(){
            // console.log(1);
            let filterValue= document.getElementById('FiterInput').value.toUpperCase();
            // console.log(filterValue);
            let namesUl= document.getElementById('names')
            let li=namesUl.querySelectorAll('li.collection-item')
            

            for(let i=0;i<li.length;i++)
            {
                let a = li[i].getElementsByTagName('a')[0];

                if(a.innerHTML.toUpperCase().indexOf(filterValue)>-1){

                    li[i].style.display=''
                }
                else{
                    li[i].style.display='none'

                }
            }

        }