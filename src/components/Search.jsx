import React from "react";

export default function Search() {




  return (
    <div id="searchBar">
        <div className="name search">
            Name:<input type="text"></input><button>Submit</button>
        </div>
        <div className="breed search">
            Breed:<input type="text"></input><button>Submit</button>
        </div>
    </div>
  );
}
