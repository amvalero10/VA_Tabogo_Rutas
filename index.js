//datos tweets
let twData = getBDProv();

//carga json 
async function getBDProv() {
    try {
      const response = await  fetch("tw2.json")
      //const response = await  fetch("tweeteros.json")
//      const response = await  fetch("dummy.json")
         .then(response => response.json())
         //.then(json =>  console.log(json) );;
      //console.log(response.data[0]);
      twData = response;
      return response;
    } catch (error) {
      console.error(error);
    }
  }

// fetch normal
// fetch("dummy.json")
//   .then(response => response.json())
//   .then(json =>  console.log(json) );



require([
    "esri/Map", 
    "esri/views/MapView",
    "esri/widgets/Slider",
    "esri/widgets/Home",
    "esri/widgets/Fullscreen",
    "esri/layers/FeatureLayer",
    "esri/Graphic",
    "esri/layers/GraphicsLayer",
    "esri/rest/route",
    "esri/rest/support/RouteParameters",
    "esri/rest/support/FeatureSet",
    "esri/geometry/Point",
    "esri/widgets/LayerList",

    
  ], (Map,MapView,Slider,Home,Fullscreen,FeatureLayer,Graphic,GraphicsLayer,route,RouteParameters,FeatureSet,Point,LayerList) => {

    //--------------------------------------------------------------------------
    //  services 
    //--------------------------------------------------------------------------

    pk = 'AAPK8f233adf6a44467b895d453783926f2bMCx93pfY81Fz0u5zHlwAf5PkwO2p1MKtMAAkcYHXlqJEZQW5lx2wA5yNNDGODADB'

    // Point the URL to a valid routing service
    const routeUrl = "https://route-api.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World";

   
    //--------------------------------------------------------------------------
    //  Capas 
    //--------------------------------------------------------------------------

    //////////////////////////
    // routeLayer de cada id
    //////////////////////////
    const routeLayer  = new GraphicsLayer({title: "E",});
    const routeLayer2 = new GraphicsLayer({title: "D",});
    const routeLayer3 = new GraphicsLayer({title: "C",});
    const routeLayer4 = new GraphicsLayer({title: "B",});
    const routeLayer5 = new GraphicsLayer({title: "A",});


    routeLayer.effect  = "bloom(0.3, 0.2px, 0.2)";
    routeLayer2.effect = "bloom(0.3, 0.2px, 0.2)";
    routeLayer3.effect = "bloom(0.3, 0.2px, 0.2)";
    routeLayer4.effect = "bloom(0.3, 0.2px, 0.2)";
    routeLayer5.effect = "bloom(0.3, 0.2px, 0.2)";


    //Apagar las capas en la lista del layerList
    //routeLayer.visible = false;


    //////////////////////////
    // routeParams de cada id
    //////////////////////////

    // Setup the route parameters
    const routeParams = new RouteParameters({
        // An authorization string used to access the routing service
        apiKey: pk,
        stops: new FeatureSet(),
        outSpatialReference: {
          // autocasts as new SpatialReference()
          wkid: 3857
        }
      });

      const routeParams2 = new RouteParameters({
        // An authorization string used to access the routing service
        apiKey: pk,
        stops: new FeatureSet(),
        outSpatialReference: {
          // autocasts as new SpatialReference()
          wkid: 3857
        }
      });

      const routeParams3 = new RouteParameters({
        // An authorization string used to access the routing service
        apiKey: pk,
        stops: new FeatureSet(),
        outSpatialReference: {
          // autocasts as new SpatialReference()
          wkid: 3857
        }
      });

      const routeParams4 = new RouteParameters({
        // An authorization string used to access the routing service
        apiKey: pk,
        stops: new FeatureSet(),
        outSpatialReference: {
          // autocasts as new SpatialReference()
          wkid: 3857
        }
      });

      const routeParams5 = new RouteParameters({
        // An authorization string used to access the routing service
        apiKey: pk,
        stops: new FeatureSet(),
        outSpatialReference: {
          // autocasts as new SpatialReference()
          wkid: 3857
        }
      });
 


    //////////////////////////
    // stopSymbol de cada id
    //////////////////////////

    // Define the symbology used to display the stops
    const stopSymbol = {
        type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
        // style: "point",
        // color: "#0ff",
        size: 10,
        color: "#f0f",
        symbol: {
          type: "simple-marker",  // autocasts as new SimpleMarkerSymbol()
          size: 15,
        }
        // outline: {
        //   // autocasts as new SimpleLineSymbol()
        //   width: 2
        // }
      };

      const stopSymbol2 = {
        type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
        // style: "point",
        // color: "#0ff",
        size: 10,
        color: "#0ff",
        symbol: {
          type: "simple-marker",  // autocasts as new SimpleMarkerSymbol()
          size: 15,
        }
        // outline: {
        //   // autocasts as new SimpleLineSymbol()
        //   width: 2
        // }
      };

      const stopSymbol3 = {
        type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
        // style: "point",
        // color: "#0ff",
        size: 10,
        color: "#F59C34",
        symbol: {
          type: "simple-marker",  // autocasts as new SimpleMarkerSymbol()
          size: 15,
        }
        // outline: {
        //   // autocasts as new SimpleLineSymbol()
        //   width: 2
        // }
      };

      const stopSymbol4 = {
        type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
        // style: "point",
        // color: "#0ff",
        size: 10,
        color: "#00F406",
        symbol: {
          type: "simple-marker",  // autocasts as new SimpleMarkerSymbol()
          size: 15,
        }
        // outline: {
        //   // autocasts as new SimpleLineSymbol()
        //   width: 2
        // }
      };

      const stopSymbol5 = {
        type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
        // style: "point",
        // color: "#0ff",
        size: 10,
        color: "#F5F200",
        symbol: {
          type: "simple-marker",  // autocasts as new SimpleMarkerSymbol()
          size: 15,
        }
        // outline: {
        //   // autocasts as new SimpleLineSymbol()
        //   width: 2
        // }
      };


      
    //////////////////////////
    // routeSymbol de cada id
    //////////////////////////

    // Define the symbology used to display the route
    const routeSymbol = {
        type: "simple-line", // autocasts as SimpleLineSymbol()
        //color: [0, 0, 255, 0.5],
        color: "#f0f",
        width: 3
      };

    // Define the symbology used to display the route
    const routeSymbol2 = {
        type: "simple-line", // autocasts as SimpleLineSymbol()
        //color: [0, 0, 255, 0.5],
        color: "#0ff",
        width: 3
      };

      // Define the symbology used to display the route
    const routeSymbol3 = {
      type: "simple-line", // autocasts as SimpleLineSymbol()
      //color: [0, 0, 255, 0.5],
      color: "#F59C34",
      width: 3
    };

    // Define the symbology used to display the route
    const routeSymbol4 = {
      type: "simple-line", // autocasts as SimpleLineSymbol()
      //color: [0, 0, 255, 0.5],
      color: "#00F406",
      width: 3
    };

      // Define the symbology used to display the route
    const routeSymbol5 = {
      type: "simple-line", // autocasts as SimpleLineSymbol()
      //color: [0, 0, 255, 0.5],
      color: "#F5F200",
      width: 3
    };






      //Layer para que el slider funcione 
    const layer_fantasma = new FeatureLayer();


    const map = new Map({
        basemap: "streets-navigation-vector",
        basemap: {
          portalItem: {
           id: "4f2e99ba65e34bb8af49733d9778fb8e"
          }
        },
        layers: [routeLayer,routeLayer2,routeLayer3,routeLayer4,routeLayer5] // Add the route layer to the map
      });
      

      const view = new MapView({
        map: map,
        container: "viewDiv",
        center: [ -74.10975,4.64971], //Bogota
        zoom: 11,
        constraints: {
          minScale: 302223.819286
        },
        resizeAlign: "top-left"
      });



      const layerList = new LayerList({
        view: view
      });
      layerList.visibleElements = {
        statusIndicators: true
      };



    //--------------------------------------------------------------------------
    //
    //  Setup UI
    //
    //--------------------------------------------------------------------------

    const applicationDiv = document.getElementById("applicationDiv");
    const sliderValue = document.getElementById("sliderValue");
    const playButton = document.getElementById("playButton");
    const titleDiv = document.getElementById("titleDiv");
    const refreshButton = document.getElementById("refreshButton")
    let animation = null;


  const slider = new Slider({
      container: "slider",
      min: 0,
      max: 24,
      values: [ 0 ],
      step: 1,
      visibleElements: {
        labels: false,
        rangeLabels: true
      }
    });

    // desabilita la interaccion con el slider 
    slider.disabled = true


// * etiquetas en la barra del slider
slider.tickConfigs = [{
  mode: "count",
  values: 25
}, {
  mode: "percent",
  values: [12.5, 37.5, 62.5, 87.5],
  labelsVisible: true,
  tickCreatedFunction: function(initialValue, tickElement, labelElement) {
    tickElement.classList.add("mediumTicks");
    labelElement.classList.add("mediumLabels");
  }
}, {
  mode: "count",
  values: 5,
  labelsVisible: true,
  tickCreatedFunction: function(initialValue, tickElement, labelElement) {
    tickElement.classList.add("largeTicks");
    labelElement.classList.add("largeLabels");
    labelElement.onclick = function() {
      const newValue = labelElement["data-value"];
      slider.values = [ newValue ];
    };
  }
}];


        // When user drags the slider:
    //  - stops the animation
    //  - set the visualized year to the slider one.
    function inputHandler(event) {
        stopAnimation();
        setYear(event.value);
      }
      slider.on("thumb-drag", inputHandler);


    // Toggle animation on/off when user
    // clicks on the play button
    playButton.addEventListener("click", () => {
        if (playButton.classList.contains("toggled")) {
          stopAnimation();
        } else {
          startAnimation();
        }
      });



// metodo para refresar la pagina y reiniciar el slider
      refreshButton.addEventListener("click", () => {
        window.location.reload(false)
      })







    //botones y etiquetas en esquinas
    view.ui.empty("top-left"); //quita las barras de zoom
    view.ui.add(titleDiv, "top-left"); // titulo
    view.ui.add( new Home({ view: view}),"top-left"); //boton de home
    view.ui.add( new Fullscreen({ view: view, element: applicationDiv }),"top-left"); //boton de pantalla completa

    view.ui.add(layerList, "top-right"); // selector de capas


    //console.log(twData)

    // Starts the application
    setYear(0);



    //--------------------------------------------------------------------------
    //
    //  Methods
    //
    //--------------------------------------------------------------------------

    ////////////////////////////////
    // pintar punto - agregar stop
    ////////////////////////////////
    function addStop(pHora) {


        twData.forEach(e => {
            //console.log(e)
            //console.log(e.TIME)

            if(e.TIME === pHora ){
                // console.log('entro ',e.TIME)
                //console.log("este es el id: ",e.ID)

                var stopss = crearStop(e.LAT,e.LON,e.ID)
                agregarStop(e.ID,stopss)
                resolverRuta(e.ID)
            }
        });
      }



    // Adds the solved route to the map as a graphic
    function showRoute(data,pId) {
        // console.log("data: ",data)
  
        const routeResult = data.routeResults[0].route;

        switch (pId) {
            case 1:
            //   console.log("entro a 1 en showrute")
              routeResult.symbol = routeSymbol;
              routeLayer.add(routeResult);
              break
            case 2:
            //   console.log("entro a 2 en showrute")
              routeResult.symbol = routeSymbol2;
              routeLayer2.add(routeResult);
              break
            case 3:
              //   console.log("entro a 3 en showrute")
                routeResult.symbol = routeSymbol3;
                routeLayer3.add(routeResult);
                break
            case 4:
              //   console.log("entro a 4 en showrute")
                routeResult.symbol = routeSymbol4;
                routeLayer4.add(routeResult);
                break
            case 5:
              //   console.log("entro a 5 en showrute")
                routeResult.symbol = routeSymbol5;
                routeLayer5.add(routeResult);
                break
          }
      }




     
// funcion que genera un stops con las cordenadas recibidas
const crearStop  = (pLat,pLon,pId) => {

    //console.log("este es el id ",pId)

    let symbolo = {}

    switch (pId) {
        case 1:
         // console.log("entro a 1 symbolo")
          symbolo = stopSymbol
          break
        case 2:
          //console.log("entro a 2 symbolo")
          symbolo = stopSymbol2
          break
        case 3:
          // console.log("entro a 3 symbolo")
           symbolo = stopSymbol3
           break
        case 4:
           //console.log("entro a 4 symbolo")
           symbolo = stopSymbol4
           break
        case 5:
          // console.log("entro a 5 symbolo")
           symbolo = stopSymbol5
           break
      }

      //console.log("el symbolo es ",symbolo)
    var stop = new Graphic(
        {
          geometry: new Point({
            x: pLon,
            y: pLat
          }),
          //symbol: stopSymbol
          symbol: symbolo
        }
      )
      //console.log( mapa.get("nombre") );
      return stop
}



//agrega el stop creado a la capa especificada
const agregarStop  = (pId,pStop) => {

    // console.log("este es el id en agregarStop ",pId)
    // console.log("este es el stop ",pStop)

    switch (pId) {
        case 1:
        //   console.log("entro a 1 en agregarStop")
            routeLayer.add(pStop);
            routeParams.stops.features.push(pStop);
            break
        case 2:
        //   console.log("entro a 2 agregarStop")
            routeLayer2.add(pStop);
            routeParams2.stops.features.push(pStop);
            break
        case 3:
        //   console.log("entro a 3 en agregarStop")
            routeLayer3.add(pStop);
            routeParams3.stops.features.push(pStop);
            break
        case 4:
        //   console.log("entro a 4 agregarStop")
            routeLayer4.add(pStop);
            routeParams4.stops.features.push(pStop);
            break
        case 5:
          //   console.log("entro a 5 en agregarStop")
            routeLayer5.add(pStop);
            routeParams5.stops.features.push(pStop);
            break
                  
      }
}




//resuleva la ruta luego de que se agregaron los stops
const resolverRuta = (pId) => {

    switch (pId) {
        case 1:
        //   console.log("entro a 1 en resolverRuta")
          route.solve(routeUrl, routeParams ).then( (d) => showRoute(d,pId) );
          break
        case 2:
        //   console.log("entro a 2 resolverRuta")
          route.solve(routeUrl, routeParams2 ).then( (d) => showRoute(d,pId) );
          break
        case 3:
          //   console.log("entro a 3 en resolverRuta")
            route.solve(routeUrl, routeParams3 ).then( (d) => showRoute(d,pId) );
            break
        case 4:
          //   console.log("entro a 4 resolverRuta")
            route.solve(routeUrl, routeParams4 ).then( (d) => showRoute(d,pId) );
            break
        case 5:
          //   console.log("entro a 5 en resolverRuta")
            route.solve(routeUrl, routeParams5 ).then( (d) => showRoute(d,pId) );
            break
      }

}



   
    /**
     * Sets the current visualized construction year.
     */
    function setYear(value) {
        sliderValue.innerHTML = Math.floor(value);
        slider.viewModel.setValue(0, value);
        //layer.renderer = createRenderer(value);
        layer_fantasma.renderer = createRenderer(value);
      }


  
// funcion para renderizar los puntos sobre le mapa

var ultiN = 30 //set de una hora diferente a la registrada por el slider

function createRenderer(year){

    timeAct = parseInt(year, 10)

    if(ultiN !== undefined) {

        // console.log('este es el primero',year)
        // console.log("este es ultiN: ",ultiN)
    
        if( ultiN !== timeAct  ){
            ultiN = timeAct
            // console.log("En condicional: ", timeAct)
            addStop(timeAct)
        }
    }
  
}









    //--------------------------------------------------------------------------
    //
    //  Animacion Slider
    //
    //--------------------------------------------------------------------------

    /**
     * Starts the animation that cycle
     * through the construction years.
     */
     function startAnimation() {
        stopAnimation();
        animation = animate(slider.values[0]);
        playButton.classList.add("toggled");
      }

     /**
     * Stops the animations
     */
   function stopAnimation() {
    if (!animation) {
      return;
    }
    animation.remove();
    animation = null;
    playButton.classList.remove("toggled");
  }

    /**
     * Animates variable continously
     */
 function animate(startValue) {

    let animating = true;
    let value = startValue;

    const frame = (timestamp) => {
      if (!animating) {
        return;
      }

      // value afecta la velocidad del slider
      value += 0.01;
      
      if (value > 24) {
        value = 24;
        stopAnimation()
      }

      setYear(value);

      // Update at 30fps - Velocidad del slider
      setTimeout(() => {
        requestAnimationFrame(frame);
      }, 1000 / 720);

    };

    frame();

    return {
      remove: () => {
        animating = false;
      }
    };
  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   



  






  

});
