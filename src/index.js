import "./styles.css";
import { HomePageLoad, MenuPageLoad, AboutPageLoad, ClearPage } from "./pageloader.js";

(function (){
  document.addEventListener('click', (e) => {
    const target = e.target.closest('button');
    if(target){
      ClearPage();
      if(target.textContent.includes("Home")){
        HomePageLoad();
      }      
      if(target.textContent.includes("Menu")){
        MenuPageLoad();
      }
      if(target.textContent.includes("About")){
        AboutPageLoad();
      }

    }
  })
})();

HomePageLoad();
// MenuPageLoad();
// AboutPageLoad();