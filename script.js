mapa1 = document.getElementById("mapa1");
mapa2 = document.getElementById("mapa2");
mapa3 = document.getElementById("mapa3");



require (["esri/Map", "esri/views/MapView"],
   function(Map, MapView)
   {
    let map1 = new Map({basemap:"streets"});



    let mapContainer = new MapView({
        container: "containerDown",  
        map: map1  
        , zoom:16,
        center: [22.57, 51.25],
      
        
     }); 

   })


require (["esri/Map", "esri/views/MapView"],
   function(Map, MapView)
   {
   mapa1.addEventListener("click", function(){
    let map1 = new Map({basemap:"satellite"});



    let mapContainer = new MapView({
        container: "containerDown", 
        map: map1,
        zoom:16,
        center: [22.57, 51.25],
      
        
     }); 

   })})

   require (["esri/Map", "esri/views/MapView"],
   function(Map, MapView)
   {
   mapa2.addEventListener("click", function(){
    let map1 = new Map({basemap:"topo"});



    let mapContainer = new MapView({
        container: "containerDown",  
        map: map1,
        zoom:16,
        center: [22.57, 51.25],
      
        
     }); 

   })})

   require (["esri/Map", "esri/views/MapView"],
   function(Map, MapView)
   {
   mapa3.addEventListener("click", function(){
    let map1 = new Map({basemap:"osm"});



    let mapContainer = new MapView({
        container: "containerDown", 
        map: map1, 
        zoom:16,
        center: [22.57, 51.25],
      
        
     }); 

   })})