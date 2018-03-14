
    require([
      "esri/views/MapView",
      "esri/WebMap",
      "dojo/domReady!"
    ], function(
      MapView, WebMap
    ) {

      /************************************************************
       * Creates a new WebMap instance. 
       ************************************************************/
      var webmap = new WebMap({
        portalItem: { // autocasts as new PortalItem()
          // the real webmap
		  // id: "8f34cdf932e844a084335eab0180592c"
		  // the sandbox webmap
		  id: "d4260c21a2ee4f408d8e02c11d698106" 
        }
      });

      /************************************************************
       * Set the WebMap instance to the map property in a MapView.
       ************************************************************/
      var view = new MapView({
        map: webmap,
        container: "viewDiv"
      });
    });
  