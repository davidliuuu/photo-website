import React,{ useState,useEffect } from 'react'
import Search from "../components/Search";
import Picture from '../components/Picture';

function Homepage() {
    const [input , setInput] = useState("");
     let [data, setData] = useState(null);
     let [page, setPage] = useState(1);
     let [currentSearch, setCurrentSearch] = useState("");
     const auth = "563492ad6f9170000100000192c6eb9c11b8456f8eb0d81de8dfe93f";
     const intialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
     const searchURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=1`;

     // fetch data from pexei API
     const search = async (url) => {
       setPage(2);
       const dataFetch = await fetch(url, {
         method: "GET",
         headers: {
           Accept: "application/json",
           Authorization: auth,
         },
       });
       let parseData = await dataFetch.json();
       setData(parseData.photos);
       
     };

     // load more picture
     const morepicture = async () =>{
        let newURL;
        if(input === ""){
          newURL = `https://api.pexels.com/v1/curated?page=${page}&per_page=15`;
        }
        else{
          newURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=${page}`;
        }
        setPage(page + 1);
        const dataFetch = await fetch(newURL, {
              method: "GET",
              headers: {
                   Accept: "application/json",
                   Authorization: auth,
              },
            });
            let parseData = await dataFetch.json();
            setData(data.concat(parseData.photos));
     };
    
     // fetch data when the page Loads up
     useEffect(()=>{
        search(intialURL);
     },[]);

     useEffect(() => {
       if (currentSearch ===""){
         search(intialURL);
       }else{
        search(searchURL);
       }
     }, [currentSearch]);

    return (
      <div style={{ minHeight: "100vh" }}>
        <Search search={() => {
            setCurrentSearch(input);
        }} setInput={setInput}/>
        <div className="pictures">{
            data && data.map((d) => {
                return <Picture data={d} />;
            })
        }
        </div>

        <div className="morePicture">
            <button onClick={morepicture}>Load More</button>
        </div>
      </div>
    );
    
};

export default Homepage
