var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite ',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Compte_grilles_GN_500_2_2_1 = new ol.format.GeoJSON();
var features_Compte_grilles_GN_500_2_2_1 = format_Compte_grilles_GN_500_2_2_1.readFeatures(json_Compte_grilles_GN_500_2_2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Compte_grilles_GN_500_2_2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Compte_grilles_GN_500_2_2_1.addFeatures(features_Compte_grilles_GN_500_2_2_1);
var lyr_Compte_grilles_GN_500_2_2_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Compte_grilles_GN_500_2_2_1, 
                style: style_Compte_grilles_GN_500_2_2_1,
                popuplayertitle: 'Compte_grilles_GN_500_2_2',
                interactive: true,
    title: 'Compte_grilles_GN_500_2_2<br />\
    <img src="styles/legend/Compte_grilles_GN_500_2_2_1_0.png" /> 1 - 6,4<br />\
    <img src="styles/legend/Compte_grilles_GN_500_2_2_1_1.png" /> 6,4 - 11,8<br />\
    <img src="styles/legend/Compte_grilles_GN_500_2_2_1_2.png" /> 11,8 - 17,2<br />\
    <img src="styles/legend/Compte_grilles_GN_500_2_2_1_3.png" /> 17,2 - 22,6<br />\
    <img src="styles/legend/Compte_grilles_GN_500_2_2_1_4.png" /> 22,6 - 28<br />\
    <img src="styles/legend/Compte_grilles_GN_500_2_2_1_5.png" /> 28 - 33,4<br />\
    <img src="styles/legend/Compte_grilles_GN_500_2_2_1_6.png" /> 33,4 - 38,8<br />\
    <img src="styles/legend/Compte_grilles_GN_500_2_2_1_7.png" /> 38,8 - 44,2<br />\
    <img src="styles/legend/Compte_grilles_GN_500_2_2_1_8.png" /> 44,2 - 49,6<br />\
    <img src="styles/legend/Compte_grilles_GN_500_2_2_1_9.png" /> 49,6 - 55<br />\
    <img src="styles/legend/Compte_grilles_GN_500_2_2_1_10.png" /> 55 - 60,4<br />\
    <img src="styles/legend/Compte_grilles_GN_500_2_2_1_11.png" /> 60,4 - 65,8<br />\
    <img src="styles/legend/Compte_grilles_GN_500_2_2_1_12.png" /> 65,8 - 71,2<br />\
    <img src="styles/legend/Compte_grilles_GN_500_2_2_1_13.png" /> 71,2 - 76,6<br />\
    <img src="styles/legend/Compte_grilles_GN_500_2_2_1_14.png" /> 76,6 - 82<br />' });
var format_VOIES_NM_Uniques_2 = new ol.format.GeoJSON();
var features_VOIES_NM_Uniques_2 = format_VOIES_NM_Uniques_2.readFeatures(json_VOIES_NM_Uniques_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VOIES_NM_Uniques_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VOIES_NM_Uniques_2.addFeatures(features_VOIES_NM_Uniques_2);
var lyr_VOIES_NM_Uniques_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VOIES_NM_Uniques_2, 
                style: style_VOIES_NM_Uniques_2,
                popuplayertitle: 'VOIES_NM_Uniques',
                interactive: true,
                title: '<img src="styles/legend/VOIES_NM_Uniques_2.png" /> VOIES_NM_Uniques'
            });
var format_Grille_3 = new ol.format.GeoJSON();
var features_Grille_3 = format_Grille_3.readFeatures(json_Grille_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Grille_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Grille_3.addFeatures(features_Grille_3);
var lyr_Grille_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Grille_3, 
                style: style_Grille_3,
                popuplayertitle: 'Grille',
                interactive: true,
    title: 'Grille<br />\
    <img src="styles/legend/Grille_3_0.png" /> 1 - 5<br />\
    <img src="styles/legend/Grille_3_1.png" /> 5 - 10<br />\
    <img src="styles/legend/Grille_3_2.png" /> 10 - 15<br />\
    <img src="styles/legend/Grille_3_3.png" /> 15 - 20<br />\
    <img src="styles/legend/Grille_3_4.png" /> 20 - 25<br />\
    <img src="styles/legend/Grille_3_5.png" /> 25 - 30<br />\
    <img src="styles/legend/Grille_3_6.png" /> 30 - 35<br />\
    <img src="styles/legend/Grille_3_7.png" /> 35 - 40<br />\
    <img src="styles/legend/Grille_3_8.png" /> 40 - 45<br />\
    <img src="styles/legend/Grille_3_9.png" /> 45 - 50<br />\
    <img src="styles/legend/Grille_3_10.png" /> 50 - 55<br />\
    <img src="styles/legend/Grille_3_11.png" /> 55 - 60<br />\
    <img src="styles/legend/Grille_3_12.png" /> 60 - 65<br />\
    <img src="styles/legend/Grille_3_13.png" /> 65 - 70<br />\
    <img src="styles/legend/Grille_3_14.png" /> 70 - 75<br />\
    <img src="styles/legend/Grille_3_15.png" /> 75 - 80<br />\
    <img src="styles/legend/Grille_3_16.png" /> 80 - 82<br />' });
var group_group1 = new ol.layer.Group({
                                layers: [lyr_VOIES_NM_Uniques_2,lyr_Grille_3,],
                                fold: 'close',
                                title: 'group1'});

lyr_GoogleSatellite_0.setVisible(true);lyr_Compte_grilles_GN_500_2_2_1.setVisible(true);lyr_VOIES_NM_Uniques_2.setVisible(true);lyr_Grille_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Compte_grilles_GN_500_2_2_1,group_group1];
lyr_Compte_grilles_GN_500_2_2_1.set('fieldAliases', {'NUMPOINTS': 'NUMPOINTS', });
lyr_VOIES_NM_Uniques_2.set('fieldAliases', {'IDENT': 'IDENT', 'NOMCOM': 'NOMCOM', 'TCIRCU': 'TCIRCU', 'STATUT': 'STATUT', 'TAILLE_AXE': 'TAILLE_AXE', 'NOMVOIE': 'NOMVOIE', 'CLASSEMENT': 'CLASSEMENT', 'HIERA_CIRC': 'HIERA_CIRC', 'CCOCOM': 'CCOCOM', 'NB_VOIES': 'NB_VOIES', 'RIVOLI': 'RIVOLI', 'ID_COMM': 'ID_COMM', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_Grille_3.set('fieldAliases', {'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', });
lyr_Compte_grilles_GN_500_2_2_1.set('fieldImages', {'NUMPOINTS': 'TextEdit', });
lyr_VOIES_NM_Uniques_2.set('fieldImages', {'IDENT': 'TextEdit', 'NOMCOM': 'TextEdit', 'TCIRCU': 'TextEdit', 'STATUT': 'TextEdit', 'TAILLE_AXE': 'TextEdit', 'NOMVOIE': 'TextEdit', 'CLASSEMENT': 'TextEdit', 'HIERA_CIRC': 'TextEdit', 'CCOCOM': 'TextEdit', 'NB_VOIES': 'TextEdit', 'RIVOLI': 'TextEdit', 'ID_COMM': 'TextEdit', 'SHAPE_LEN': 'TextEdit', });
lyr_Grille_3.set('fieldImages', {'id': '', 'left': '', 'top': '', 'right': '', 'bottom': '', });
lyr_Compte_grilles_GN_500_2_2_1.set('fieldLabels', {'NUMPOINTS': 'no label', });
lyr_VOIES_NM_Uniques_2.set('fieldLabels', {'IDENT': 'no label', 'NOMCOM': 'no label', 'TCIRCU': 'no label', 'STATUT': 'no label', 'TAILLE_AXE': 'no label', 'NOMVOIE': 'no label', 'CLASSEMENT': 'no label', 'HIERA_CIRC': 'no label', 'CCOCOM': 'no label', 'NB_VOIES': 'no label', 'RIVOLI': 'no label', 'ID_COMM': 'no label', 'SHAPE_LEN': 'no label', });
lyr_Grille_3.set('fieldLabels', {'id': 'no label', 'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', });
lyr_Grille_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});