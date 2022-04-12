function myFunction(y)
           {
                const x= document.getElementsByClassName("answer")
                if (x[y].style.display==="none")
                {
                    x[y].style.display="block"
                }
                else
                {
                    x[y].style.display="none"
                }
           }