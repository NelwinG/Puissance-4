$(document).ready(function()
{
    $('#Puissance').puissance(7,6,'red','black');
});
//tableau
var table = $('#table');
var tr  = $('<tr/>');
var td =$('<td/>');

$('#button').click(function() {
    location.reload();
});

$.fn.puissance = function(x,y,coin1,coin2) 
{   
    this.turn = {t: 0};
    this.count = {c: 0,victoire: 0,diagonale1: 0, diagonale2: 0, diagonale3: 0, diagonale4: 0};
    
    this.grille = function()
    {
        this.colonne = y;
        this.ligne = x;
        this.remplissage= {r:0};
        this.premier_joueur = coin1;
        this.deuxieme_joueur = coin2;
        this.save;
        
        for (var i = 0; i < this.colonne; i++) {
            tr.append(td.clone()); //insere contenu
        }
        for (var i = 0; i < this.ligne; i++) {
            table.append(tr.clone()); //insere contenu
        }
    }
    
  
    this.setting = function()
    {
        var tr = document.querySelectorAll('tr');   //Element renvoie une NodeList statique représentant une liste des éléments du document qui correspondent au groupe de sélecteurs spécifiés.
        var td = document.querySelectorAll('td');
        
        // // VERIF horizontale
        for(var j = 0; j < obj.colonne; j++)
        {
            obj.count.colonne = 0;
            for(var i = 0; i < tr.length; i++)
            {
                if(tr[i].childNodes[j].getAttribute('class') == obj.premier_joueur)
                {
                    obj.remplissage.ligne++;
                    obj.count.colonne++;
                    if(obj.count.colonne >= 4)
                    {  
                        $('body').prepend('<div class="winners"> Le joueur '+obj.premier_joueur+' a Gagné</div> <img class="ribeiro" src="tenor.gif"/> <embed src="tom.mp3" autostart="true" loop="false" hidden="true"></embed>');
                        obj.prepend('<div class="win"></div>');
                    }
                }
                else{                  
                    obj.count.colonne = 0;
                }
            }
        }
        
        for(var j = 0; j < obj.colonne; j++)
        {
            obj.count.colonne = 0;
            for(var i = 0; i < tr.length; i++){
                if(tr[i].childNodes[j].getAttribute('class') == obj.deuxieme_joueur)
                {
                    obj.remplissage.ligne++;
                    obj.count.colonne++;
                    if(obj.count.colonne >= 4){  
                        $('body').prepend('<div class="winners"> Le joueur '+obj.deuxieme_joueur+' a Gagné</div> <img class="ribeiro" src="tenor.gif"/> <bgsound src="https://www.youtube.com/watch?v=kWvbJsB0OBc" loop=-1>');
                        obj.prepend('<div class="win"></div>');
                    }
                }
                else
                {                  
                    obj.count.colonne = 0;
                }
            }
        } 
        // //VERIF verticale
        for(var k = 0; k<obj.ligne;k++)
        {
            obj.count.victoire = 0;
            for(var l = 0; l < obj.colonne; l++)
            {
                if(tr[k].childNodes[l].getAttribute('class') == obj.premier_joueur)
                {
                    obj.count.victoire ++;
                    if(obj.count.victoire >= 4)
                    {
                        $('body').prepend('<div class="winners"> Le joueur '+obj.premier_joueur+' a Gagné</div><img class="ribeiro" src="tenor.gif"/> <embed src="tom.mp3" autostart="true" loop="false" hidden="true"></embed>');
                        obj.prepend('<div class="win"></div>');
                    }
                }
                else{
                    obj.count.victoire = 0;
                }
            }
        }
        
        for(var k = 0; k<obj.ligne;k++)
        {
            obj.count.victoire = 0;
            for(var l = 0; l < obj.colonne; l++)
            {
                
                if(tr[k].childNodes[l].getAttribute('class') == obj.deuxieme_joueur)
                {
                    obj.count.victoire ++;
                    if(obj.count.victoire >= 4)
                    {
                        $('body').prepend('<div class="winners"> Le joueur '+obj.deuxieme_joueur+' a Gagné</div><img class="ribeiro" src="tenor.gif"/> <embed src="tom.mp3" autostart="true" loop="false" hidden="true"></embed>');
                        obj.prepend('<div class="win"></div>');
                    }
                }
                else
                {
                    obj.count.victoire = 0;
                }
            }
        }
        
        // VERIF diagonale
        
        // JOUEUR 1 
        //DIAGONALE 1
        for(var m = 0; m <obj.ligne; m++)
        {
            obj.count.diagonale1 = 0;
            for(var n = 0  ; n < obj.colonne; n++)
            {
                if(tr[m+n])
                {
                    if( tr[m+n].childNodes[0+n].getAttribute('class') ==    obj.premier_joueur)
                    {
                        obj.count.diagonale1++;
                        if(obj.count.diagonale1 >= 4)
                        {
                            $('body').prepend('<div class="winners"> Le joueur '+obj.premier_joueur+' a Gagné</div><img class="ribeiro" src="tenor.gif"/> <embed src="tom.mp3" autostart="true" loop="false" hidden="true"></embed>');
                            obj.prepend('<div class="win"></div>');
                        }
                    }
                    else
                    {
                        obj.count.diagonale1 = 0;
                    }
                }
            }
        }
        //  DIAGONALE 2
        
        for(var m = obj.ligne; m > 0; m--)
        {
            obj.count.diagonale2 = 0;
            for(var n = obj.colonne ; n > 0; n--)
            {
                if(tr[m-n])
                {      
                    if( tr[m-n].childNodes[obj.colonne-n].getAttribute('class') ==    obj.premier_joueur )
                    {
                        obj.count.diagonale2++;
                        if(obj.count.diagonale2 >= 4)
                        {
                            $('body').prepend('<div class="winners"> Le joueur '+obj.premier_joueur+' a Gagné</div><img class="ribeiro" src="tenor.gif"/> <embed src="tom.mp3" autostart="true" loop="false" hidden="true"></embed>');
                            obj.prepend('<div class="win"></div>');
                        }
                    }
                    else{
                        obj.count.diagonale2 = 0
                    }
                }
            }
        }
        //DIAGONALE 3
        
        for(var i = 0; i < obj.ligne; i++) 
        {
            obj.count.diagonale3 = 0;
            for (var j = 0; j < obj.colonne; j++) 
            {
                if(tr[j+i]){
                    if(tr[j+i].childNodes[obj.colonne-1-j].getAttribute('class') == obj.premier_joueur)
                    {
                        obj.count.diagonale3 ++;
                        if (obj.count.diagonale3 >= 4)
                        {
                            $('body').prepend('<div class="winners"> Le joueur '+obj.premier_joueur+' a Gagné</div><img class="ribeiro" src="tenor.gif"/> <embed src="tom.mp3" autostart="true" loop="false" hidden="true"></embed>');
                            obj.prepend('<div class="win"></div>');
                        }
                    }
                    else
                    {
                        obj.count.diagonale3 = 0;
                    }
                }
            }
        }  
        //DIAGONALE 4
        for (var j = 0; j < obj.ligne; j++) 
        {
            obj.count.diagonale4 = 0;
            for( var i = obj.colonne; i > 0; i--)
            {
                if(tr[i-j])
                {
                    if(tr[i-j].childNodes[obj.colonne-i].getAttribute('class') == obj.premier_joueur)
                    {
                        obj.count.diagonale4 ++;


                        if (obj.count.diagonale4 >= 4) 
                        {
                            $('body').prepend('<div class="winners"> Le joueur '+obj.premier_joueur+' a Gagné</div><img class="ribeiro" src="tenor.gif"/> <embed src="tom.mp3" autostart="true" loop="false" hidden="true"></embed>');
                            obj.prepend('<div class="win"></div>');
                        }
                    }
                    else{
                        obj.count.diagonale4 = 0
                    }
                }
            }
        }
        // Joueur 2 
        //DIAGONALE 1
        for(var m = 0; m <obj.ligne; m++)
        {
            obj.count.diagonale1 = 0;
            for(var n = 0  ; n < obj.colonne; n++)
            {
                if(tr[m+n]){
                    if( tr[m+n].childNodes[0+n].getAttribute('class') == obj.deuxieme_joueur)
                    {
                        obj.count.diagonale1++;


                        if(obj.count.diagonale1 >= 4){
                            $('body').prepend('<div class="winners"> Le joueur '+obj.deuxieme_joueur+' a Gagné</div><img class="ribeiro" src="tenor.gif"/> <embed src="tom.mp3" autostart="true" loop="false" hidden="true"></embed>');
                            obj.prepend('<div class="win"></div>');
                        }
                    }
                    else{
                        obj.count.diagonale1 = 0;
                    }
                }
            }
        }
        //DIAGONALE 2
        for(var m = obj.ligne; m > 0; m--)
        {
            obj.count.diagonale2 = 0;
            for(var n = obj.colonne ; n > 0; n--)
            {
                if(tr[m-n])
                {      
                    if( tr[m-n].childNodes[obj.colonne-n].getAttribute('class') == obj.deuxieme_joueur)
                    {
                        obj.count.diagonale2++;
                        if(obj.count.diagonale2 >= 4)
                        {
                            $('body').prepend('<div class="winners"> Le joueur '+obj.deuxieme_joueur+' a Gagné</div><img class="ribeiro" src="tenor.gif"/> <embed src="tom.mp3" autostart="true" loop="false" hidden="true"></embed>');
                            obj.prepend('<div class="win"></div>');
                        }
                    }
                    else{
                        obj.count.diagonale2 = 0
                    }
                }
            }
        }
        //DIAGONALE 3
        for(var i = 0; i < obj.ligne; i++) 
        {
            obj.count.diagonale3 = 0;
            for (var j = 0; j < obj.colonne; j++) 
            {
                if(tr[j+i])
                {
                    if(tr[j+i].childNodes[obj.colonne-1-j].getAttribute('class') == obj.deuxieme_joueur){
                        obj.count.diagonale3 ++;
                        if (obj.count.diagonale3 >= 4) 
                        {
                            $('body').prepend('<div class="winners"> Le joueur '+obj.deuxieme_joueur+' a Gagné</div><img class="ribeiro" src="tenor.gif"/> <embed src="tom.mp3" autostart="true" loop="false" hidden="true"></embed>');
                            obj.prepend('<div class="win"></div>');
                        }
                    }
                    else{
                        obj.count.diagonale3 = 0;
                    }
                }
            }
        }
        
        
        
        
        //DIAGONALE 4
        for (var j = 0; j < obj.ligne; j++) 
        {
            obj.count.diagonale4 = 0;
            for( var i = obj.colonne; i > 0; i--)
            {
                if(tr[i-j])
                {
                    if(tr[i-j].childNodes[obj.colonne-i].getAttribute('class') == obj.deuxieme_joueur){
                        obj.count.diagonale4 ++;
                        if (obj.count.diagonale4 >= 4) 
                        {
                            $('body').prepend('<div class="winners"> Le joueur '+obj.deuxieme_joueur+' a Gagné</div><img class="ribeiro" src="tenor.gif"/> <embed src="tom.mp3" autostart="true" loop="false" hidden="true"></embed>');
                            obj.prepend('<div class="win"></div>');
                        }
                    }
                    else{
                        obj.count.diagonale4 = 0
                    }
                }
            }
        }
        
    }

    this.plays = function()
    {
        $('tr').click(function()
        {
            if(obj.turn.t % 2 == 0){
                for (var i = $(this).find('td').length-1; i >= 0 ; i--) 
                {
                    if($(this).find('td')[i].className == '')
                    {
                        obj.turn.t ++;
                        $(this).find('td')[i].className =   obj.premier_joueur;
                        obj.save = $(this).find('td')[i];
                        break;
                    }
                }
            }
            else
            {
                for (var i = $(this).find('td').length-1; i >= 0; i--) 
                {
                    if($(this).find('td')[i].className == '')
                    {
                        obj.turn.t ++;
                        $(this).find('td')[i].className = obj.deuxieme_joueur;
                        obj.memory = $(this).find('td')[i];
                        break;                        
                    }
                }
            }
            obj.setting();
            obj.null();
        });
    } 
    
    
    //NO VICTORYYYYYYYYYYYYYYYYY
    this.null = function()
    {
        var joueur1 = document.querySelectorAll('.'+obj.premier_joueur).length;
        var jouer2 = document.querySelectorAll('.'+obj.deuxieme_joueur).length;
        var g = jouer1+jouer2;
        if(g == 42)
        {
            $('body').prepend('<div class="winners"> Pas de gagnants</div><img class="ribeiro" src="tenor.gif"/> <embed src="tom.mp3" autostart="true" loop="false" hidden="true"></embed>');
        }
    }
    
    var obj = this;
    (function(){
        obj.grille();
        obj.plays();
        obj.null();
    })();
    
}

