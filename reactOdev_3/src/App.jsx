import "./App.css";
import React from "react";
function Arama({onSearch,aramaMetni}) {

  

  return(
    <>
    <label htmlFor="arama">Ara: </label>
    <input id="arama" type="text" onChange={onSearch} value={aramaMetni}/>
    <p>
     
    </p>
    </>
  )
}
function Yazi({id,url,baslik,yazar,yorum_sayisi,puan}){
  return(
    <li key={id}>
    <span>
      <a href={url}>{baslik}</a>, 
    </span>
    <span><b>Yazar:</b> {yazar}, </span>
    <span><b>Yorum Sayısı:</b> {yorum_sayisi}, </span>
    <span><b>Puan:</b> {puan}</span>
  </li>
  )
}
function Liste(props){
  return(
    <ul>
        {props.yazilar.map(function (yazi) {
          return (<Yazi key={yazi.id} {...yazi}/>)
        })}
         
      </ul>
  ) 
}
function App() {

  const [aramaMetni,setAramaMetni]=React.useState(localStorage.getItem("aranan") || "React" );  

  const yaziListesi = [
    {
      baslik: "React Öğreniyorum",
      url: "www.sdu.edu.tr",
      yazar: "Seyithan Topal",
      yorum_sayisi: 3,
      puan: 4,
      id: 0,
    },

    {
      baslik: "Web Teknolojileri ve Programlama",
      url: "wwww.google.com.tr",
      yazar: "Seyit Topal",
      yorum_sayisi: 2,
      puan: 5,
      id: 1,
    },

    {
      baslik: "Unity 3D Oyun Gelistirme",
      url: "www.unity.com",
      yazar: "Seyit Han Topal",
      yorum_sayisi: 6,
      puan: 3,
      id: 2,
    },

    {
      baslik: "Assembly LSL",
      url: "www.google.com",
      yazar: "Anonim",
      yorum_sayisi: 9,
      puan: 5,
      id: 3,
    },

  ];
  // ----------------------
  const arananYazilar=yaziListesi.filter(
    function(yazi) {
      return(
        yazi.baslik.toLowerCase().includes(aramaMetni.toLowerCase()) ||
        yazi.yazar.toLowerCase().includes(aramaMetni.toLowerCase()) ||
        yazi.yorum_sayisi.toString().includes(aramaMetni) ||
        yazi.puan.toString().includes(aramaMetni)
      ) 
    }
  )

  //1.asama : Callback metodu olustur.
  function handleSearch(event){
    setAramaMetni(event.target.value)
    // localStorage.setItem("aranan",aramaMetni);
  }
  React.useEffect(()=>{
    localStorage.setItem("aranan",event.target.value);
  },[aramaMetni]);

  return (
    <div>
      <h1>Yazılar</h1>
      <Arama aramaMetni={aramaMetni} onSearch={handleSearch}/>
      <strong>
        {aramaMetni} aranıyor...
      </strong>
      <hr />
      <Liste yazilar={arananYazilar}/>
    </div>
  );
}
export default App;
//küçük büyük harf düzenle,birkaç veri ekle listeye