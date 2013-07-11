/**
 * @requires GeoExt/Lang.js
 */

GeoExt.Lang.add("fr", {

    "gxp.plugins.AddLayers.prototype": {
        addActionMenuText: "Ajouter des calques",
        addActionTip: "Ajouter des calques",
        addServerText: "Ajouter un nouveau serveur",
        untitledText: "Sans titre",
        addLayerSourceErrorText: "Impossible d'obtenir les capacités WMS ({msg}).\nVeuillez vérifier l'URL et essayez à nouveau.",
        availableLayersText: "Couches disponibles",
        uploadText: "Télécharger des données",
        layerSelectionText: "Source:",
        sourceSelectOrTypeText: "Choose one or type service URL",
        doneText: "Terminé"
    },
    
    "gxp.plugins.BingSource.prototype": {
        title: "Calques Bing",
        roadTitle: "Bing routes",
        aerialTitle: "Bing images aériennes",
        labeledAerialTitle: "Bing images aériennes avec étiquettes"
    },    

    "gxp.plugins.FeatureEditor.prototype": {
        splitButtonText: "Edit",
        createFeatureActionText: "Create",
        editFeatureActionText: "Modify",
        createFeatureActionTip: "Créer un nouvel objet",
        editFeatureActionTip: "Modifier un objet existant"
    },
    
    "gxp.plugins.FeatureGrid.prototype": {
        displayFeatureText: "Afficher sur la carte",
        firstPageTip: "Première page",
        previousPageTip: "Page précédente",
        zoomPageExtentTip: "Zoom sur la page",
        nextPageTip: "Page suivante",
        lastPageTip: "Dernière page",
        totalMsg: "Features {1} to {2} of {0}"
    },

    "gxp.plugins.GoogleEarth.prototype": {
        menuText: "Passer à la visionneuse 3D",
        tooltip: "Passer à la visionneuse 3D"
    },
    
    "gxp.plugins.GoogleSource.prototype": {
        title: "Calques Google",
        roadmapAbstract: "Carte routière",
        satelliteAbstract: "Images satellite",
        hybridAbstract: "Images avec routes",
        terrainAbstract: "Carte routière avec le terrain",
        roadmapTitle: "Google Routière",       
        hybridTitle: "Google Hybrid",
        satelliteTitle: "Google Satellite",
        terrainTitle: "Google Terrain"
    },

    "gxp.plugins.LayerProperties.prototype": {
        menuText: "Propriétés de la couche",
        toolTip: "Propriétés de la couche"
    },
    
    "gxp.plugins.LayerTree.prototype": {
        shortTitle: "Layers",
        rootNodeText: "Layers",
        overlayNodeText: "Surimpressions",
        baseNodeText: "Couches"
    },

    "gxp.plugins.LayerManager.prototype": {
        baseNodeText: "Couche"
    },

    "gxp.plugins.Legend.prototype": { 
        menuText: "Légende",
        tooltip: "Légende"
    },

    "gxp.plugins.Measure.prototype": {
        buttonText: "Mesure",
        lengthMenuText: "Longueur",
        areaMenuText: "Surface",
        lengthTooltip: "Mesure de longueur",
        areaTooltip: "Mesure de surface",
        measureTooltip: "Mesure"
    },

    "gxp.plugins.Navigation.prototype": {
        menuText: "Panner la carte",
        tooltip: "Panner la carte"
    },

    "gxp.plugins.NavigationHistory.prototype": {
        previousMenuText: "Position précédente",
        nextMenuText: "Position suivante",
        previousTooltip: "Position précédente",
        nextTooltip: "Position suivante"
    },

    "gxp.plugins.LoadingIndicator.prototype": {
        loadingMapMessage: "Chargement de la carte..."
    },

    "gxp.plugins.MapBoxSource.prototype": {
        title: "MapBox Layers",
        blueMarbleTopoBathyJanTitle: "Blue Marble Topography & Bathymetry (January)",
        blueMarbleTopoBathyJulTitle: "Blue Marble Topography & Bathymetry (July)",
        blueMarbleTopoJanTitle: "Blue Marble Topography (January)",
        blueMarbleTopoJulTitle: "Blue Marble Topography (July)",
        controlRoomTitle: "Control Room",
        geographyClassTitle: "Geography Class",
        naturalEarthHypsoTitle: "Natural Earth Hypsometric",
        naturalEarthHypsoBathyTitle: "Natural Earth Hypsometric & Bathymetry",
        naturalEarth1Title: "Natural Earth I",
        naturalEarth2Title: "Natural Earth II",
        worldDarkTitle: "World Dark",
        worldLightTitle: "World Light",
        worldPrintTitle: "World Print"
    },

    "gxp.plugins.OSMSource.prototype": {
        title: "Calques OpenStreetMap",
        mapnikAttribution: "Données CC-By-SA par <a href='http://openstreetmap.org/'>OpenStreetMap</a>",
        osmarenderAttribution: "Données CC-By-SA par <a href='http://openstreetmap.org/'>OpenStreetMap</a>"
    },

    "gxp.plugins.Print.prototype": {
        buttonText:"Imprimer",
        menuText: "Imprimer la carte",
        tooltip: "Imprimer la carte",
        previewText: "Aperçu avant impression",
        notAllNotPrintableText: "Non, toutes les couches peuvent être imprimées",
        nonePrintableText: "Aucune de vos couches ne peut être imprimée"
    },

    "gxp.plugins.MapQuestSource.prototype": {
        title: "MapQuest Layers",
        osmAttribution: "Avec la permission de tuiles <a href='http://open.mapquest.co.uk/' target='_blank'>MapQuest</a> <img src='http://developer.mapquest.com/content/osm/mq_logo.png' border='0'>",
        osmTitle: "MapQuest OpenStreetMap",
        naipAttribution: "Avec la permission de tuiles <a href='http://open.mapquest.co.uk/' target='_blank'>MapQuest</a> <img src='http://developer.mapquest.com/content/osm/mq_logo.png' border='0'>",
        naipTitle: "MapQuest Imagery"
    },

    "gxp.plugins.QueryForm.prototype": {
        queryActionText: "Interrogation",
        queryMenuText: "Couche de requêtes",
        queryActionTip: "Interroger la couche sélectionnée",
        queryByLocationText: "Query by current map extent",
        queryByAttributesText: "Requête par attributs"
    },

    "gxp.plugins.RemoveLayer.prototype": {
        removeMenuText: "Enlever la couche",
        removeActionTip: "Enlever la couche"
    },

    "gxp.plugins.WMSGetFeatureInfo.prototype": {
        buttonText:"Identify",
        infoActionTip: "Get Feature Info",
        popupTitle: "Info sur l'objet"
    },

    "gxp.plugins.Zoom.prototype": {
        zoomMenuText: "Zoom Box",
        zoomInMenuText: "Zoom avant",
        zoomOutMenuText: "Zoom arrière",
        zoomTooltip: "Zoom by dragging a box",
        zoomInTooltip: "Zoom avant",
        zoomOutTooltip: "Zoom arrière"
    },
    
    "gxp.plugins.ZoomToExtent.prototype": {
        menuText: "Zoomer sur la carte max",
        tooltip: "Zoomer sur la carte max"
    },
    
    "gxp.plugins.ZoomToDataExtent.prototype": {
        menuText: "Zoomer sur la couche",
        tooltip: "Zoomer sur la couche"
    },

    "gxp.plugins.ZoomToLayerExtent.prototype": {
        menuText: "Zoomer sur la couche",
        tooltip: "Zoomer sur la couche"
    },
    
    "gxp.plugins.ZoomToSelectedFeatures.prototype": {
        menuText: "Zoomer sur les objets sélectionnés",
        tooltip: "Zoomer sur les objets sélectionnés"
    },

    "gxp.FeatureEditPopup.prototype": {
        closeMsgTitle: "Enregistrer les modifications ?",
        closeMsg: "Cet objet a des modifications non enregistrées. Voulez-vous enregistrer vos modifications ?",
        deleteMsgTitle: "Supprimer l'objet ?",
        deleteMsg: "Etes-vous sûr de vouloir supprimer cet objet ?",
        editButtonText: "Modifier",
        editButtonTooltip: "Modifier cet objet",
        deleteButtonText: "Supprimer",
        deleteButtonTooltip: "Supprimer cet objet",
        cancelButtonText: "Annuler",
        cancelButtonTooltip: "Arrêter de modifier, annuler les modifications",
        saveButtonText: "Enregistrer",
        saveButtonTooltip: "Enregistrer les modifications"
    },
    
    "gxp.FillSymbolizer.prototype": {
        fillText: "Remplir",
        colorText: "Couleur",
        opacityText: "Opacité"
    },
    
    "gxp.FilterBuilder.prototype": {
        builderTypeNames: ["Tout", "tous", "aucun", "pas tout"],
        preComboText: "Match",
        postComboText: "de ce qui suit:",
        addConditionText: "Ajouter la condition",
        addGroupText: "Ajouter un groupe",
        removeConditionText: "Supprimer la condition"
    },
    
    "gxp.grid.CapabilitiesGrid.prototype": {
        nameHeaderText : "Nom",
        titleHeaderText : "Titre",
        queryableHeaderText : "Interrogeable",
        layerSelectionLabel: "Voir les données disponibles à partir de :",
        layerAdditionLabel: "ou ajouter un nouveau serveur.",
        expanderTemplateText: "<p><b>Résumé:</b> {abstract}</p>"
    },
    
    "gxp.PointSymbolizer.prototype": {
        graphicCircleText: "Cercle",
        graphicSquareText: "Carré",
        graphicTriangleText: "Triangle",
        graphicStarText: "Étoile",
        graphicCrossText: "Croix",
        graphicXText: "x",
        graphicExternalText: "Externe",
        urlText: "URL",
        opacityText: "Opacité",
        symbolText: "Symbole",
        sizeText: "Taille",
        rotationText: "Rotation"
    },

    "gxp.QueryPanel.prototype": {
        queryByLocationText: "Interrogation selon le lieu",
        currentTextText: "Mesure actuelle",
        queryByAttributesText: "Requête par attributs",
        layerText: "Calque"
    },
    
    "gxp.RulePanel.prototype": {
        scaleSliderTemplate: "{scaleType} échelle 1:{scale}",
        labelFeaturesText: "Label Caractéristiques",
        advancedText: "Avancé",
        limitByScaleText: "Limiter par l'échelle",
        limitByConditionText: "Limiter par condition",
        symbolText: "Symbole",
        nameText: "Nom"
    },
    
    "gxp.ScaleLimitPanel.prototype": {
        scaleSliderTemplate: "{scaleType} échelle 1:{scale}",
        maxScaleLimitText: "Échelle maximale"
    },
    
    "gxp.TextSymbolizer.prototype": {
        labelValuesText: "Label valeurs",
        haloText: "Halo",
        sizeText: "Taille"
    },
    
    "gxp.WMSLayerPanel.prototype": {
        aboutText: "A propos",
        titleText: "Titre",
        nameText: "Nom",
        descriptionText: "Description",
        displayText: "Affichage",
        opacityText: "Opacité",
        formatText: "Format",
        transparentText: "Transparent",
        cacheText: "Cache",
        cacheFieldText: "Utiliser la version mise en cache",
        infoFormatText: "Info format",
        infoFormatEmptyText: "Choisissez un format"
    },

    "gxp.EmbedMapDialog.prototype": {
        publishMessage: "Votre carte est prête à être publiée sur le web. Il suffit de copier le code HTML suivant pour intégrer la carte dans votre site Web :",
        heightLabel: 'Hauteur',
        widthLabel: 'Largeur',
        mapSizeLabel: 'Taille de la carte',
        miniSizeLabel: 'Mini',
        smallSizeLabel: 'Petit',
        premiumSizeLabel: 'Premium',
        largeSizeLabel: 'Large'
    },

    "gxp.LayerUploadPanel.prototype": {
        titleLabel: "Titre",
        titleEmptyText: "Titre de la couche",
        abstractLabel: "Description",
        abstractEmptyText: "Description couche",
        fileLabel: "Données",
        fieldEmptyText: "Parcourir pour ...",
        uploadText: "Upload",
        waitMsgText: "Transfert de vos données ...",
        invalidFileExtensionText: "L'extension du fichier doit être : ",
        optionsText: "Options",
        workspaceLabel: "Espace de travail",
        workspaceEmptyText: "Espace de travail par défaut",
        dataStoreLabel: "Magasin de données",
        dataStoreEmptyText: "Create new store",
        defaultDataStoreEmptyText: "Magasin de données par défaut"
    },

    "gxp.NewSourceDialog.prototype": {
        title: "Ajouter un nouveau serveur...",
        cancelText: "Annuler",
        addServerText: "Ajouter un serveur",
        invalidURLText: "Indiquez l'URL valide d'un serveur WMS (e.g. http://example.com/geoserver/wms)",
        contactingServerText: "Interrogation du serveur..."
    },

    "gxp.ScaleOverlay.prototype": { 
        zoomLevelText: "Niveau de zoom"
    },
    
    "gxp.plugins.ArcGISCacheSource.prototype": {
        noLayersTitle: "No ArcGIS Layers",
        noLayersText: "Could not find any layers with a compatible projection (Web Mercator) at "
    },    
    
    "gxp.plugins.ArcRestSource.prototype": {
        noLayersTitle: "No ArcGIS Layers",
        noLayersText: "Could not find any layers with a compatible projection (Web Mercator) at "
    },
    
    "gxp.plugins.MapShare.prototype": { 
    	text: "Share Map",
    	toolTip: "Map info and download links"
    },
    
    "gxp.plugins.AnnotationTool.prototype": {
        errorTitle: "Error creating annotation",
        noteText: "Note",        
        notesText: "Notes",
        showNotesText: "Show notes",
        editNotesText: "Edit notes",       
        addNoteText: "Add note",        
        newNoteText: "New note",
        projection: "EPSG:4326",
        pointText: "Point",
        lineText: "Line",
        polygonText: "Shape",
        saveFailTitle: "Could not save note",
        saveFailText: "Edit failed.  You might not have permission to save this note.",        
        saveText: "Save",        
        editText: "Edit",       
        deleteText: "Delete",        
        cancelText: "Cancel",        
        titleText: "Title"
    },
    
    "gxp.SearchBar.prototype": {
    	emptyText: 'Enter search...',
    	searchText: 'Search',
    	noSearchableLayersTitle: 'No Searchable Layers',
    	noSearchableLayersMsg: 'There are currently no searchable layers on the map.  You must have at least one visible layer with searchable fields on the map.',
    	searchTermTitle: "Search Term Required", 
    	searchTermText: "Please enter a search term",
    	resetText: "Reset"
    },
    
    "gxp.plugins.PrintPage.prototype": {
        menuText: "Print Map",
        tooltip: "Print Map",
        buttonText: "Print"
    },
    
    "gxp.plugins.CoordinateTool.prototype": {
        title: "Map Coordinates (longitude, latitude)",
        infoActionTip: "Get coordinates at the mouse position",
        coordinatePositionText: "CoordinatePosition"
    },
    
    "gxp.plugins.FeedSource.prototype": {
        title: 'Feed Source'
    },
    
    "gxp.plugins.HGLSource.prototype": {
        title: 'Harvard Geospatial Library Source'
    },
    
    "gxp.plugins.HGLFeedSource.prototype" : {
        title: 'HGL Feed Source'
    },
    
    "gxp.plugins.PicasaFeedSource.prototype" : {
        title: 'Picasa Source'
    },
    
    "gxp.plugins.YouTubeFeedSource.prototype" : {
        title: 'YouTube Source'
    },
    
    "gxp.plugins.GeoLocator.prototype": {
        infoActionTip: "Get My Location",
        locationFailedText: "Location detection failed"
    },
    
    "gxp.plugins.LayerShare.prototype": {
        menuText: "Share Layer",
        toolTip: "Layer info and download links"
    },

    "gxp.plugins.MapShare.prototype": {
        text: "Share My Map",
        toolTip: "Map info and download links"
    },    

    "gxp.plugins.AddCategory.prototype": {
        addCategoryMenuText:"Add Category",
        addCategoryActionTipText:"Add a category to the layer tree",
        categoryNameText: "Category name:"
    },    
    
    "gxp.plugins.RemoveCategory.prototype": {
    	removeCategoryActionText:"Remove Category",
    	removeCategoryActionTipText: "Remove this category and all its layers from the map",
    	cannotRemoveText: "This category cannot be removed"
    },
    
    "gxp.plugins.RenameCategory.prototype": {
        renameCategoryActionText:"Rename Category",
        renameCategoryActionTipText:"Give this category a new name",
        cannotRenameText: "This category cannot be renamed"
    },
    
    "gxp.LinkEmbedMapDialog.prototype": {
    	linkMessage: 'Paste link in email or IM'
    },    
    
    "gxp.plugins.GeoNodeQueryTool.prototype" : {
        infoActionTip: "Get Feature Info",
        popupTitle: "Feature Info",
        resetTitle: "Reset",
        resetToolTipText: " Clear all features"
    },
    
    "gxp.plugins.MapRevisionTool.prototype" : {
    	infoActionTip: 'View a list of map revisions',
    	toolText: 'Revisions',
    	windowTitle: "Map Revision History"
    },
    
    "gxp.plugins.GazetteerTool.prototype" : {
        infoActionTip: 'Enter a place name to search for',
        toolText: 'Gazetteer',
        searchingText: 'Searching...',
        fromText: 'From: YYYY-MM-DD',
        toText: 'To: YYYY-MM-DD',
        datesText: 'Dates',
        geocodersText: 'Geocoders', 
        advancedText: 'Advanced',
        sourceText: 'Source',
        startDateText: 'Start Date',
        endDateText: 'End Date',  	
        placenameText: 'Place name',
        coordinatesText: 'Coordinates'  	
    },
    
    "gxp.plugins.StreetViewTool.js" : {
    	toolText: "Google Street View",
    	streetViewTitle: "Google Street View",  	
    	infoActionTip: "Click on the map to see Google Street View"
    }
});
