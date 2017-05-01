var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	function subscribe(){
		var strvalue = document.getElementById("subscribeemail").value;
		
		if (strvalue == "") {
			var errmsg="Please enter a valid email.";
			var str1="";
			str1+="<table align=center cellpadding=0 cellspacing=0 class='errorarea' style='font-size:14px;'>";
			str1+="<tr>\n<td><font style='color:red;font-weight:bold;font-size:14;font-family:arial;'>\n</font>\n</td>\n<td style='font-size:14px;color:red;font-weight:bold;font-family:arial;'>"+errmsg+"</td></tr>";
			str1+="</table>";
			document.getElementById("subscribemessage").innerHTML = str1;
			document.getElementById("subscribemessage").style.opacity = "1";
			setTimeout(function()
					{
						document.getElementById("subscribemessage").style.opacity = "0";
						document.getElementById("subscribemessage").innerHTML = "";
						document.getElementById("subscribeemail").value="";
						str1="";
					},4000);
			return false;
		}else if(!re.test(strvalue)){
			throwErrMsg("Please enter a valid email.","subscribe");
			setTimeout(function()
					{
						document.getElementById("subscribemessage").style.opacity = "0";
						document.getElementById("subscribemessage").innerHTML = "";
						document.getElementById("subscribeemail").value="";
					},4000);
			return false;
		}
		else { 
			if (window.XMLHttpRequest) {
				// code for IE7+, Firefox, Chrome, Opera, Safari
				xmlhttp = new XMLHttpRequest();
			} else {
				// code for IE6, IE5
				xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
			xmlhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					document.getElementById("subscribemessage").innerHTML = this.responseText;
					document.getElementById("subscribemessage").style.opacity = "1";
					setTimeout(function()
					{
						document.getElementById("subscribemessage").style.opacity = "0";
						document.getElementById("subscribemessage").innerHTML = "";
						document.getElementById("subscribeemail").value="";
					},4000);
				}
			};
			xmlhttp.open("GET","subscribe.php?q="+strvalue,true);
			xmlhttp.send();
		}
	}
	function demoregistration(){
		var a = document.getElementById("demoname").value;
		var b = document.getElementById("demoemail").value;
		var strvalue = a + "|" + b;
		var str1="";
		var errmsg="";
		if (a == "") {
			errmsg="Please enter a valid Name.";
			str1+="<table align=center cellpadding=0 cellspacing=0 class='errorarea' style='font-size:14px;'>";
			str1+="<tr>\n<td><font style='color:red;font-weight:bold;font-size:14;font-family:arial;'>\n</font>\n</td>\n<td style='font-size:14px;color:red;font-weight:bold;font-family:arial;'>"+errmsg+"</td></tr>";
			str1+="</table>";
			document.getElementById("demomessage").innerHTML = str1;
			document.getElementById("demomessage").style.opacity = "1";
			setTimeout(function()
					{
						document.getElementById("demomessage").style.opacity = "0";
						document.getElementById("demomessage").innerHTML = "";
						document.getElementById("demomessage").value="";
						str1="";
					},4000);
			return false;
		}else if (b == "") {
			errmsg="Please enter a valid Email.";
			str1+="<table align=center cellpadding=0 cellspacing=0 class='errorarea' style='font-size:14px;'>";
			str1+="<tr>\n<td><font style='color:red;font-weight:bold;font-size:14;font-family:arial;'>\n</font>\n</td>\n<td style='font-size:14px;color:red;font-weight:bold;font-family:arial;'>"+errmsg+"</td></tr>";
			str1+="</table>";
			document.getElementById("demomessage").innerHTML = str1;
			document.getElementById("demomessage").style.opacity = "1";
			setTimeout(function()
					{
						document.getElementById("demomessage").style.opacity = "0";
						document.getElementById("demomessage").innerHTML = "";
						document.getElementById("demomessage").value="";
						str1="";
					},4000);
			return false;
		}else if(!re.test(b)){
			throwErrMsg("Please enter a valid Email","demo");
			setTimeout(function()
					{
						document.getElementById("demomessage").style.opacity = "0";
						document.getElementById("demomessage").innerHTML = "";
						document.getElementById("demomessage").value="";
						str1="";
					},4000);
			return false;
		}
		else { 
			if (window.XMLHttpRequest) {
				// code for IE7+, Firefox, Chrome, Opera, Safari
				xmlhttp = new XMLHttpRequest();
			} else {
				// code for IE6, IE5
				xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
			xmlhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					document.getElementById("demomessage").innerHTML = this.responseText;
					document.getElementById("demomessage").style.opacity = "1";
					setTimeout(function()
					{
						document.getElementById("demomessage").style.opacity = "0";
						document.getElementById("demomessage").innerHTML = "";
						document.getElementById("demoemail").value="";
					},4000);
				}
			};
			xmlhttp.open("GET","demoregister.php?q="+strvalue,true);
			xmlhttp.send();
		}
	}
	function contact(){
		var a = document.getElementById("conname").value;
		var b = document.getElementById("conemail").value;
		var c = document.getElementById("consubject").value;
		var d = document.getElementById("conmessage").value;
		var strvalue = a + "|" + b + "|" + c +"|" + d;
		var errmsg="";
		var str1 ="";
		if (a == "") {
			errmsg="Please enter a valid Name.";
			str1+="<table align=center cellpadding=0 cellspacing=0 class='errorarea' style='font-size:14px;'>";
			str1+="<tr>\n<td><font style='color:red;font-weight:bold;font-size:14;font-family:arial;'>\n</font>\n</td>\n<td style='font-size:14px;color:red;font-weight:bold;font-family:arial;'>"+errmsg+"</td></tr>";
			str1+="</table>";
			document.getElementById("contactmessage").style.opacity = "1";
			document.getElementById("contactmessage").innerHTML = str1;
			setTimeout(function()
					{
						document.getElementById("contactmessage").style.opacity = "0";
						document.getElementById("contactmessage").innerHTML = "";
						document.getElementById("conname").value="";
						str1="";
					},4000);
			return false;
		}else if (b == "") {
			errmsg="Please enter a valid Email.";
			str1+="<table align=center cellpadding=0 cellspacing=0 class='errorarea' style='font-size:14px;'>";
			str1+="<tr>\n<td><font style='color:red;font-weight:bold;font-size:14;font-family:arial;'>\n</font>\n</td>\n<td style='font-size:14px;color:red;font-weight:bold;font-family:arial;'>"+errmsg+"</td></tr>";
			str1+="</table>";
			document.getElementById("contactmessage").style.opacity = "1";
			document.getElementById("contactmessage").innerHTML = str1;
			
			setTimeout(function()
					{
						document.getElementById("contactmessage").style.opacity = "0";
						document.getElementById("contactmessage").innerHTML = "";
						document.getElementById("conemail").value="";
						str1="";
					},4000);
			return false;
		}else if(!re.test(b)){
			throwErrMsg("Please enter a valid email.","contact");
			return false;
		}
		else if (c == "") {
			errmsg="Please enter a valid Subject.";
			str1+="<table align=center cellpadding=0 cellspacing=0 class='errorarea' style='font-size:14px;'>";
			str1+="<tr>\n<td><font style='color:red;font-weight:bold;font-size:14;font-family:arial;'>\n</font>\n</td>\n<td style='font-size:14px;color:red;font-weight:bold;font-family:arial;'>"+errmsg+"</td></tr>";
			str1+="</table>";
			document.getElementById("contactmessage").style.opacity = "1";
			document.getElementById("contactmessage").innerHTML = str1;
			
			setTimeout(function()
					{
						document.getElementById("contactmessage").style.opacity = "0";
						document.getElementById("contactmessage").innerHTML = "";
						document.getElementById("consubject").value="";
						str1="";
					},4000);
			return false;
		}else if (d == "") {
			errmsg="Please enter a valid Message.";
			str1+="<table align=center cellpadding=0 cellspacing=0 class='errorarea' style='font-size:14px;'>";
			str1+="<tr>\n<td><font style='color:red;font-weight:bold;font-size:14;font-family:arial;'>\n</font>\n</td>\n<td style='font-size:14px;color:red;font-weight:bold;font-family:arial;'>"+errmsg+"</td></tr>";
			str1+="</table>";
			document.getElementById("contactmessage").style.opacity = "1";
			document.getElementById("contactmessage").innerHTML = str1;
			
			setTimeout(function()
					{
						document.getElementById("contactmessage").style.opacity = "0";
						document.getElementById("contactmessage").innerHTML = "";
						document.getElementById("conmessage").value="";
						str1="";
					},4000);
			return false;
		}
		else { 
			if (window.XMLHttpRequest) {
				// code for IE7+, Firefox, Chrome, Opera, Safari
				xmlhttp = new XMLHttpRequest();
			} else {
				// code for IE6, IE5
				xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
			xmlhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					document.getElementById("contactmessage").innerHTML = this.responseText;
					document.getElementById("contactmessage").style.opacity = "1";
					setTimeout(function()
					{
						document.getElementById("contactmessage").style.opacity = "0";
						document.getElementById("contactmessage").innerHTML = "";
						document.getElementById("conname").value="";
						document.getElementById("conemail").value=""
						document.getElementById("consubject").value=""
						document.getElementById("conmessage").value=""
					},4000);
				}
			};
			xmlhttp.open("GET","contactform.php?q="+strvalue,true);
			xmlhttp.send();
		}
	}	


	function initMap() {
        var office = {lat: 13.0906444, lng: 80.2685029};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 20,
          center: office
        });
        var marker = new google.maps.Marker({
          position: office,
          map: map,
          title: 'ImpairBit Software Solutions'
        });

        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });

        var contentString = '<div id="content" style="color:#000">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<div><strong>ImpairBit Software Solutions</strong></div>'+
            '<div id="bodyContent">'+
            '<p>144, Choolai High Road, Choolai, Chennai - 600012</p>'+
            '<p>Website: <a href="http://www.impairbit.com">www.impairbit.com</a></p>'+
            '</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        infowindow.open(map, marker);

        var currCenter = map.getCenter();
        google.maps.event.addDomListener(window, 'resize', function() {
            //Set Center
            map.setCenter(office);
        });
      }