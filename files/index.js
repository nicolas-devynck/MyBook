$(document).ready(function () {
    /* function On */
    function miseenforme(txt) {
        var aftertxt = "";
        string.replace(/ /g, "_");
        return aftertxt
    }
    function popupNouvelleFiche() {
        var nom = $("#popup-nouvelle-fiche-txt").val()
        nom = nom.replace(/ /g, "_");
        // No Special Characters
        var characterReg = new RegExp("^[a-zA-Z0-9_]*$");
        if (characterReg.test(nom)) {
            if (key == null) {
                localStorage.setItem("key", '["' + nom + '"]');
                key = JSON.parse(localStorage.getItem('key'));
                $("#liste-fiche").html("<li id='" + nom + "'><a href='#detail' class='ui-link ui-btn ui-icon-carat-l ui-btn-icon-left ui-shadow ui-corner-all' data-role='button' data-icon='carat-l' data-transition='slide'>" + nom.replace(/_/g, " ") + "</a></li>");
                localStorage.setItem("" + nom + "", '{"nom":"' + nom + '","description":"null","produits":["null","null"],"quantite":[0,0],"mesure":["null","null"],"preparation":"null"}');
                $("#" + nom + "").click(function () {
                    var detail = JSON.parse(localStorage.getItem(nom));
                    $("#detail h1").html(detail.nom.replace(/_/g, " "));
                    $("#description").html(detail.description);
                    $("#preparation").html(detail.preparation);
                    $("#mesure").html("");
                    $("#quantite").html("");
                    $("#produits").html("");
                    $("#button-edit").html("");
                    for (var property in detail.mesure) {
                        $("#mesure").append(detail.mesure[property]= + "<br />");
                    }
                    for (var property in detail.quantite) {
                        $("#quantite").append(detail.quantite[property]= + "<br />");
                    }
                    for (var property in detail.produits) {
                        $("#produits").append(detail.produits[property]= + "<br />");
                    }
                    $("#popup-edit-fiche-nom").val(detail.nom.replace(/_/g, " "));
                    $("#popup-edit-fiche-description").val(detail.description);
                    $("#popup-edit-fiche-preparation").html(detail.preparation);
                    var editMesure = null;
                    if (editMesureBool == true) {
                        for (var property in detail.mesure) {
                            if (editMesure == null) {
                                editMesure = "<input value='" + detail.mesure[property] + "' type='text'>";
                            }
                            else {
                                editMesure = editMesure + "<input value='" + detail.mesure[property] + "' type='text'>";
                            }
                        }
                        editMesureBool = false;
                    }
                    else {
                        for (var property in detail.mesure) {
                            if (editMesure == null) {
                                editMesure = "<div class='ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset'><input value='" + detail.mesure[property] + "' type='text'></div>";
                            }
                            else {
                                editMesure = editMesure + "<div class='ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset'><input value='" + detail.mesure[property] + "' type='text'></div>";
                            }
                        }
                    }
                    $("#popup-edit-mesure").html("");
                    $("#popup-edit-mesure").html(editMesure);
                    var editQuantite = null;
                    if (editQuantiteBool == true) {
                        for (var property in detail.quantite) {
                            if (editQuantite == null) {
                                editQuantite = "<input value='" + detail.quantite[property] + "' type='text'>";
                            }
                            else {
                                editQuantite = editQuantite + "<input value='" + detail.quantite[property] + "' type='text'>";
                            }
                        }
                        editQuantiteBool = false;
                    }
                    else {
                        for (var property in detail.quantite) {
                            if (editQuantite == null) {
                                editQuantite = "<div class='ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset'><input value='" + detail.quantite[property] + "' type='text'></div>";
                            }
                            else {
                                editQuantite = editQuantite + "<div class='ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset'><input value='" + detail.quantite[property] + "' type='text'></div>";
                            }
                        }
                    }
                    $("#popup-edit-quantite").html("");
                    $("#popup-edit-quantite").html(editQuantite);
                    var editProduit = null;
                    if (editProduitBool == true) {
                        for (var property in detail.produits) {
                            if (editProduit == null) {
                                editProduit = "<input value='" + detail.produits[property] + "' type='text'>";
                            }
                            else {
                                editProduit = editProduit + "<input value='" + detail.produits[property] + "' type='text'>";
                            }
                        }
                        editProduitBool = false;
                    }
                    else {
                        for (var property in detail.produits) {
                            if (editProduit == null) {
                                editProduit = "<div class='ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset'><input value='" + detail.produits[property] + "' type='text'></div>";
                            }
                            else {
                                editProduit = editProduit + "<div class='ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset'><input value='" + detail.produits[property] + "' type='text'></div>";
                            }
                        }
                    }
                    $("#popup-edit-produits").html("");
                    $("#popup-edit-produits").html(editProduit);
                });
            }
            else {
                key.push(nom);
                localStorage.setItem("key", JSON.stringify(key));
                key = JSON.parse(localStorage.getItem('key'));
                $("#liste-fiche").append("<li id='" + nom + "'><a href='#detail' class='ui-link ui-btn ui-icon-carat-l ui-btn-icon-left ui-shadow ui-corner-all' data-role='button' data-icon='carat-l' data-transition='slide'>" + nom.replace(/_/g, " ") + "</a></li>");
                localStorage.setItem("" + nom + "", '{"nom":"' + nom + '","description":"null","produits":["null","null"],"quantite":[0,0],"mesure":["null","null"],"preparation":"null"}');
                $("#" + nom + "").click(function () {
                    var detail = JSON.parse(localStorage.getItem(nom));
                    $("#detail h1").html(detail.nom.replace(/_/g, " "));
                    $("#description").html(detail.description);
                    $("#preparation").html(detail.preparation);
                    $("#mesure").html("");
                    $("#quantite").html("");
                    $("#produits").html("");
                    $("#button-edit").html("");
                    for (var property in detail.mesure) {
                        $("#mesure").append(detail.mesure[property] + "<br />");
                    }
                    for (var property in detail.quantite) {
                        $("#quantite").append(detail.quantite[property] + "<br />");
                    }
                    for (var property in detail.produits) {
                        $("#produits").append(detail.produits[property] + "<br />");
                    }
                    $("#popup-edit-fiche-nom").val(detail.nom.replace(/_/g, " "));
                    $("#popup-edit-fiche-description").val(detail.description);
                    $("#popup-edit-fiche-preparation").html(detail.preparation);
                    var editMesure = null;
                    for (var property in detail.mesure) {
                        if (editMesure == null) {
                            editMesure = "<div class='ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset'><input value='" + detail.mesure[property] + "' type='text'></div>";
                        }
                        else {
                            editMesure = editMesure + "<div class='ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset'><input value='" + detail.mesure[property] + "' type='text'></div>";
                        }
                    }
                    $("#popup-edit-mesure").html("");
                    $("#popup-edit-mesure").html(editMesure);
                    var editQuantite = null;
                    for (var property in detail.quantite) {
                        if (editQuantite == null) {
                            editQuantite = "<div class='ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset'><input value='" + detail.quantite[property] + "' type='text'></div>";
                        }
                        else {
                            editQuantite = editQuantite + "<div class='ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset'><input value='" + detail.quantite[property] + "' type='text'></div>";
                        }
                    }
                    $("#popup-edit-quantite").html("");
                    $("#popup-edit-quantite").html(editQuantite);
                    var editProduit = null;


                    for (var property in detail.produits) {
                        if (editProduit == null) {
                            editProduit = "<div class='ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset'><input value='" + detail.produits[property] + "' type='text'></div>";
                        }
                        else {
                            editProduit = editProduit + "<div class='ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset'><input value='" + detail.produits[property] + "' type='text'></div>";
                        }
                    }
                    $("#popup-edit-produits").html("");
                    $("#popup-edit-produits").html(editProduit);
                });
            }
        }
        else {
            alert("Uniquement des caractères alphanumériques !");
        }
        $("#popup-nouvelle-fiche-txt").val("");
    }
    /* function Off */
    var editMesureBool = true;
    var editQuantiteBool = true;
    var editProduitBool = true;
    var key = JSON.parse(localStorage.getItem('key'));
    if (key == null) {
        $("#liste-fiche").html("Null");
    }
    else {
        for (var i = 0; i < key.length; i++) {
            $("#liste-fiche").append("<li id='" + key[i] + "'><a href='#detail' data-role='button' data-icon='carat-l' data-transition='slide'>" + key[i].replace(/_/g, " ") + "</a></li>");
        }
        $("#liste-fiche li").click(function () {
            var detail = JSON.parse(localStorage.getItem(this.getAttribute("id")));
            $("#detail h1").html(detail.nom.replace(/_/g, " "));
            $("#description").html(detail.description);
            $("#preparation").html(detail.preparation);
            $("#mesure").html("");
            $("#quantite").html("");
            $("#produits").html("");
            $("#button-edit").html("");
            for (var property in detail.mesure) {
                $("#mesure").append(detail.mesure[property] + "<br />");
            }
            for (var property in detail.quantite) {
                $("#quantite").append(detail.quantite[property] + "<br />");
            }
            for (var property in detail.produits) {
                $("#produits").append(detail.produits[property] + "<br />");
            }
            $("#popup-edit-fiche-nom").val(detail.nom.replace(/_/g, " "));
            $("#popup-edit-fiche-description").val(detail.description);
            $("#popup-edit-fiche-preparation").html(detail.preparation);
            var editMesure = null;
            if (editMesureBool == true) {
                for (var property in detail.mesure) {
                    if (editMesure == null) {
                        editMesure = "<input value='" + detail.mesure[property] + "' type='text'>";
                    }
                    else {
                        editMesure = editMesure + "<input value='" + detail.mesure[property] + "' type='text'>";
                    }
                }
                editMesureBool = false;
            }
            else {
                for (var property in detail.mesure) {
                    if (editMesure == null) {
                        editMesure = "<div class='ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset'><input value='" + detail.mesure[property] + "' type='text'></div>";
                    }
                    else {
                        editMesure = editMesure + "<div class='ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset'><input value='" + detail.mesure[property] + "' type='text'></div>";
                    }
                }
            }
            $("#popup-edit-mesure").html("");
            $("#popup-edit-mesure").html(editMesure);
            var editQuantite = null;
            if (editQuantiteBool == true) {
                for (var property in detail.quantite) {
                    if (editQuantite == null) {
                        editQuantite = "<input value='" + detail.quantite[property] + "' type='text'>";
                    }
                    else {
                        editQuantite = editQuantite + "<input value='" + detail.quantite[property] + "' type='text'>";
                    }
                }
                editQuantiteBool = false;
            }
            else {
                for (var property in detail.quantite) {
                    if (editQuantite == null) {
                        editQuantite = "<div class='ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset'><input value='" + detail.quantite[property] + "' type='text'></div>";
                    }
                    else {
                        editQuantite = editQuantite + "<div class='ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset'><input value='" + detail.quantite[property] + "' type='text'></div>";
                    }
                }
            }
            $("#popup-edit-quantite").html("");
            $("#popup-edit-quantite").html(editQuantite);
            var editProduit = null;
            if (editProduitBool == true) {
                for (var property in detail.produits) {
                    if (editProduit == null) {
                        editProduit = "<input value='" + detail.produits[property] + "' type='text'>";
                    }
                    else {
                        editProduit = editProduit + "<input value='" + detail.produits[property] + "' type='text'>";
                    }
                }
                editProduitBool = false;
            }
            else {
                for (var property in detail.produits) {
                    if (editProduit == null) {
                        editProduit = "<div class='ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset'><input value='" + detail.produits[property] + "' type='text'></div>";
                    }
                    else {
                        editProduit = editProduit + "<div class='ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset'><input value='" + detail.produits[property] + "' type='text'></div>";
                    }
                }
            }
            $("#popup-edit-produits").html("");
            $("#popup-edit-produits").html(editProduit);
        });
    }
    $("#popup-add-ingredients").click(function () {
        $("#popup-edit-mesure").append("<div class='ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset'><input value='null' type='text'></div>");
        $("#popup-edit-quantite").append("<div class='ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset'><input value='0' type='text'></div>");
        $("#popup-edit-produits").append("<div class='ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset'><input value='null' type='text'></div>");
    });
    $("#popup-nouvelle-fiche-txt").keypress(function (e) {
        if (e.which == 13) {
            popupNouvelleFiche();
            $("#popup-nouvelle-fiche").dialog("close");
        }
    });
    $("#popup-nouvelle-fiche-submit").click(function () {
        popupNouvelleFiche();
    });
});
