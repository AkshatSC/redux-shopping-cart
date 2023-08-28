import React from "react";
import Card from "./card/card.js";
import productsData from "../data/productslist.js";

function Home(){
  return(
      <div class="row">
      {
        productsData.map((item)=>{
          return(
            <div class="col-lg-3 col-md-4 col-sm-6 mydiv">
              <Card key={item.id}{...item}/>
            </div>
          )
        })
      }
      </div>
  );
}

export default Home;
