
$.fn.extend(
{

	mymindmap: function(size)
	{

		var mapObject = "#"+this.attr('id');
		var mindSize = 20;
		var mapSize = "800px";
		
		// création de ma map et de mon mind master

		$(mapObject).append('<div id="board" style="height:'+mapSize+'; width:'+(mapSize*2)+'; "></div>');

		var nommaster = prompt('Quel est le nom de votre projet ?')

		$('#board').append('<div id="mind-master" value="0" name="'+nommaster+'">'+nommaster+'</div>');

		$('#mind-master').draggable({
			containment: '#board'
		});

		this.ajoutmind(mindSize);

		$.fn.clickenter = "";

	},

	mind_fille: function(size,tabid,idmind,subname)
	{
		var string;
		var idparent;

		if($.fn.clickenter == false || $.fn.clickenter == "")
		{

			idparent = "#mind-master";
		}
		else
		{

			idparent = '.mind-container[value="'+$.fn.clickenter+'"]';
		}

			// je donne le nom passé par le formulaire

			var string = $('#nom').val();

			$(idparent).append('<div class="mind-container" name="'+string+'" value="'+idmind+'" style="width:'+size+';"><p id="'+idmind+'">'+string+'</p></div>');

			$('.mind-container').trait(tabid);

			$('div[value="'+(tabid.length-1)+'"]').draggable({
				containment: '#board',
			})

			$('.mind-container').mousemove(function(){
				var valu = $(this).attr('value');
				var pos = $(this).position();
				
				$('line[id="'+valu+'"]').attr({
					"x1": pos.left+50,
					"y1": pos.top+50
				})

			})

			$(this).listener(tabid);

		},

		listener: function(tabid)
		{
			var val = '.mind-container[value="'+(tabid.length-1)+'"';
			
			$(val).click(function(e)
			{
				$.fn.clickenter = $(this).attr('value');
				$(val).css("background-color", "PaleGreen")
				e.stopPropagation();
			});
		},


		ajoutmind: function(size,subname)
		{
			// je set le tableau contenant les positions pour les traits 
			// et les id(soit value) de mes divs.
			var tabid = [];
			var idmind = 0;
			tabid.push(idmind);

		$('#bouton').click(function()
		{
			var string = $('#nom').val();

			if(string != "")
			{
				idmind++;
				tabid.push(idmind);
				tabid[0] = $('div[value="0"]').position();
				tabid[0].name = "mindmaster"
				$(this).mind_fille(size,tabid,idmind);
				$(this).mouse(tabid);
				$.fn.clickenter = "";
				
			}
		});
	},


	trait: function(tabid)
	{	
		var nom = $('#nom').val();
			// Je rentre les positions sur la colonne id
			tabid[tabid.length-1] = $('div[value="'+tabid[tabid.length-1]+'"]').position();
			tabid[tabid.length-1].name = nom;

			var posleft = tabid[0].left + tabid[tabid.length-1].left;
			var postop = tabid[0].top + tabid[tabid.length-1].top;
			
			$('<svg ><line id="'+(tabid.length-1)+'" x1="'+(tabid[tabid.length-1].left+50)+'" y1="'+(tabid[tabid.length-1].top+50)+'" x2="50" y2="50"/></svg>').insertAfter('div[value="'+(tabid.length-1)+'"]');
			
			
		},

		mouse: function(tabid)
		{

			var val = '.mind-container[value="'+(tabid.length-1)+'"';
			
			$(val).mouseover(function(e)
			{
				
				$(this).css("background-color", "linen");
				e.stopPropagation();
			});

			$(val).mouseleave(function(e)
			{
				$(this).css("background-color", "PaleGoldenrod");
				e.stopPropagation();
			});

			$(val).dblclick(function(e)
			{
				var newname = prompt('Entrez le nouveau nom de votre mind');

				if(newname != false)
				{
					// je remplace le paragraphe contenant le texte qui est 
					$(this.firstChild).replaceWith('<p id="'+((tabid.length-1))+'">'+newname+'</p>')

					e.stopPropagation();
				}
				e.stopPropagation();			

			});
		}
	});


