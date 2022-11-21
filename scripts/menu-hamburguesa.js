export default function hamburgerMenu(panelBtn,panel,menulink){
     const d = document;
     d.addEventListener("click",(e)=>{
         if(e.target.matches(panelBtn)||e.target.matches(`${panelBtn} *`)){
             d.querySelector(panel).classList.toggle("panel-active");
             d.querySelector(panelBtn).classList.toggle("is-active");
             d.body.classList.toggle("scroll-body");
         }

         if(e.target.matches(menulink)){
            d.querySelector(panel).classList.remove("panel-active");
            d.querySelector(panelBtn).classList.remove("is-active");
            d.body.classList.toggle("scroll-body");
         }
         
     })
 
}
