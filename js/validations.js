function clearerrorGlobal()
{
        var str1="";
        var loc=window.parent.frames["errorframe"];
        loc.document.write("<Body >");
        loc.document.write(str1);
        loc.document.close();
}


/**************** Radio Buttons Scripting *********************/




/***** for displaying error **********/
function showErrMsg(errmsg)
{
        var str1="";
        str1+="<table align=center cellpadding=0 cellspacing=0 class='errorarea' style='font-size:14px;'>";
	str1+="<tr>\n<td><font style='font-weight:bold;font-size:11;font-family:arial;'>\n</font>\n</td>\n<td style='font-size:11px;font-weight:bold;font-family:arial;'>"+errmsg+"</td></tr>";
        str1+="</table>";
        var loc=window.parent.frames["errorframe"];
        loc.document.write("<Body bgcolor='#fffff1'>");
        loc.document.write(str1);
        loc.document.close();
}

function showErrMsg(errmsg,fieldName)
{
        var str1="";
        str1+="<table align=center cellpadding=0 cellspacing=0 class='errorarea' style='font-size:14px;'>";
		str1+="<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+fieldName+".focus()' style='font-weight:bold;font-size:11;font-family:arial;cursor:hand'><td>"+errmsg+"</td></tr>";	
        str1+="</table>";
		var loc=window.parent.frames["errorframe"];
        loc.document.write("<Body>");
        loc.document.write(str1);
        loc.document.close();
}


function throwErrMsg(errmsg,formname)
{
        var str2="";
		str2+="<table align=center cellpadding=0 cellspacing=0 class='errorarea' style='font-size:14px;'>";
		str2+="<tr>\n<td><font style='font-weight:bold;font-size:14;font-family:arial;'>\n</font>\n</td>\n<td style='font-size:14px;font-weight:bold;font-family:arial;'>"+errmsg+"</td></tr>";
        str2+="</table>";
		if(formname=="demo"){
			document.getElementById("demomessage").innerHTML = str2;
		}else if(formname=="subscribe"){
			document.getElementById("subscribemessage").innerHTML = str2;
		}else if(formname=="contact"){
			document.getElementById("contactmessage").innerHTML = str2;
		}	
        /*var loc=window.parent.frames["errorframe"];
        loc.document.write("<Body>");
        loc.document.write(str1);
        loc.document.close();*/
}


function WaitMsg(errmsg,imgmsg)
{
        var str1="";
        str1+="<table align=center cellpadding=0 cellspacing=0 class='errorarea' style='font-size:14px;'>";
		str1+="<tr>\n<td><font style='font-weight:bold;font-size:11;font-family:arial;'>\n</font>\n</td>\n<td style='font-size:11px;font-weight:bold;font-family:arial;'>"+errmsg.toUpperCase()+"<img src='"+imgmsg+"' width='30' height='6'></td></tr>";
        str1+="</table>";
        var loc=window.parent.frames["errorframe"];
        loc.document.write("<Body>");
        loc.document.write(str1);
        loc.document.close();
}


function WaitMg(errmsg)
{
        if(errmsg=="0"){
		var loc=window.parent.frames["errorframe"];
        loc.document.write("<Body>");
        loc.document.write("");
        loc.document.close();
		}else if(errmsg=="1"){
		var str1="";
        str1+="<table align=center cellpadding=0 cellspacing=0 class='errorarea' style='font-size:14px;'>";
		str1+="<tr>\n<td ><font style='font-weight:bold;font-size:11;font-family:arial;'>\n</font>\n</td>\n<td style='font-size:11px;font-weight:bold;font-family:arial;'>Please wait for Response <img src='./images/ajax-loader.gif' width='10'></td></tr>";
        str1+="</table>";
        var loc=window.parent.frames["errorframe"];
        loc.document.write("<Body>");
        loc.document.write(str1);
        loc.document.close();
		}
}

function replaceAll(v_data,replacedt,v_replace_date)   /* parameters  "AB NO_DATA DDDD",/NO_DATA/g,"KAILASH"  */
{
var regexp=replacedt;
v_data=v_data.replace(regexp,v_replace_date);
return v_data;	
}


function forcash()
{
 	var amtloaded=document.forms[0].AMT_RECEIVED.value;
	var ind=document.forms[0].PAY_DETAILS.value;
	var str2='';
	if(ind=='CSH' && (amtloaded<0 || amtloaded>50000))
	{
		str2="<table align=center cellpadding=0 cellspacing=0 class='errorarea' style='font-size:13px;'>";
        str2+="<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0].AMT_RECEIVED.select()' style='cursor:hand'><td><font style='font-weight:bold;font-size:13px'>At Amount Received \n</font>\n</td>\n<td>: Amount Should Not Be Greater Than 50,000 If Payment Mode Is Cash</td></tr>";
        str2+="</table>";
        return(str2);
	}
	else
	{
		return("");
    }   
}


function numCheck()
{
	if(window.event.keyCode<48 || window.event.keyCode>57 )
	{
		if((window.event.keyCode!=8) && (window.event.keyCode!=09))
		{
			window.event.keyCode=0
		}
	} 
}

function charCheck()
{

	if(window.event.keyCode<65 || window.event.keyCode>90 && window.event.keyCode<97 || window.event.keyCode>122)
	{
		if((window.event.keyCode!=8) && (window.event.keyCode!=09))
		{
			window.event.keyCode=0
		}
	} 
}



function ddmmyyyy(str)
{
	if (str!="" && str.length==8)
	{
		var dd=str.substr(0,2);
		var mm=str.substr(2,2);
		var yyyy=str.substr(4,4);
		return(dd+"-"+mm+"-"+yyyy);
	}
	else if (str!="" && str.length==10)
	{
		var dd=str.substr(0,2);
		var mm=str.substr(3,2);
		var yyyy=str.substr(6,4);
		return(dd+"-"+mm+"-"+yyyy);
	}
	else
		return("");
}



function checkEmail(txtName)
{
	if (txtName!="")
	{
		if((txtName.indexOf("@")<1)||(txtName.indexOf(".")<1)||(txtName.length<7))
		{
			return("Please Enter Correct E-Mail Address");
		}
		else
		{
			return("");
		}
	} 
}



/**************************Function To trim the String*****************/
function trim(Str) {
	var objRegExp = /^(\s*)$/;
    //check for all spaces
    if(objRegExp.test(Str)) {
       Str = Str.replace(objRegExp, '');
       if( Str.length == 0)
          return Str;
    }

   //check for leading & trailing spaces
   objRegExp = /^(\s*)([\W\w]*)(\b\s*$)/;
   if(objRegExp.test(Str)) {
       //remove leading and trailing whitespace characters
       Str = Str.replace(objRegExp, '$2');
    }
  return Str;
}


/*
function pwdonly(netid,pwd)
{
	if (pwd.length<8)	
	{
		return("Invalid Personal Access Code");
	}
	else if (pwd==netid)
	{
		return("Net-ID/User-ID And Password Should Not Be Same");
	}
	else 
		return("");
}
*/

/**************** formNames() Starting Here ********************************************/

function formNames()
{
	var sty1="font-weight:bold;font-size:11;font-family:arial;";
	var sty2="color:green;font-weight:bold;font-size:11;font-family:arial;";
	var incr=0;
  	var str="";
  	var myarray=new Array();
	var selArray=new Array();
	var n=0;

	if(!document.forms.length)
   		return;
  	var els= document.forms[0].elements;
	for(var i= 0; i < els.length; i++)
  	{
		if (els[i].id!="")
		{
			var compcode="";
			var valcode="";
                   if(navigator.appName=="Microsoft Internet Explorer"){
                      compcode=els[i].alt;
                    }
			else 
			{
				compcode = els[i].getAttribute("alt");
				if(compcode == null)
					compcode ="";
			}	
			
				
		
			if(compcode.length==18)
			{
				valcode=compcode.substr(0,10);
				var minlen=compcode.substr(11,3);
				var maxlen=compcode.substr(15,3); 
			}
			
	if(valcode=="SLTYWINULL")  /* Done For Select Box */
		{    
			if(seltype(trim(els[i].value))!="")
	{
				myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".focus()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+seltype(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
	    incr++;	
			}
		}
		if(valcode=="SLTYWONULL")  /* Done For Select Box */
		{   
			if(trim(els[i].value)=="NO_DATA")
			{
					selArray[n]= els[i].name;  
					n++;
				}
			}
	  		if(valcode=="CHARWINULL") /* Done  Only Characters*/
			{
				if(trim(els[i].value).length==0)
				{
					myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</td>\n<td style='"+sty2+"'>:"+ requireValue(trim(els[i].value)) +"\n</td>\n</tr>";
                    incr++;
				}
                else if(charval(trim(els[i].value),minlen,maxlen)!="")			 
		        {
					myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+charval(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
            		incr++;
				}		
			}
			if(valcode=="CHARWONULL")  /* Done Only Characters*/
			{
				if(trim(els[i].value).length!=0)
				{
					if(charval(trim(els[i].value),minlen,maxlen)!="")
					{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+charval(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
                        incr++;
					}
				}
			}
				
			if(valcode=="CHSPWINULL") /* Done Characters and Space*/
			{
				if(trim(els[i].value).length==0)
				{
					myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ requireValue(trim(els[i].value)) +"\n</td>\n</tr>";
                    incr++;
					var idtag=els[i].id;
					var error=requireValue(trim(els[i].value));
					document.getElementById('error').innerHTML = "At "+idtag+""+error;
				}
				else if(charspaceval(trim(els[i].value),minlen,maxlen)!="")			 
		        {
					myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+charspaceval(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
            		incr++;
				var idtag=els[i].id;
				var error=charspaceval(trim(els[i].value),minlen,maxlen);
				}		
				
			}
			if(valcode=="CHSPWONULL")  /* Done Characters and Space*/
			{
				if(trim(els[i].value).length!=0 )
                {
					if(charspaceval(trim(els[i].value),minlen,maxlen)!="")
                    {
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+charspaceval(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
                        incr++;
					var idtag=els[i].id;
					var error=charspaceval(trim(els[i].value));
					document.getElementById('error').innerHTML = "At "+idtag+""+error;
					}
				}
			}
		
			if(valcode=="CSDTWINULL")  /* Done Characters Space and Dot*/
			{
				if(trim(els[i].value).length==0)
                {
					myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ requireValue(trim(els[i].value)) +"\n</td>\n</tr>";
                    incr++;
				}
                else if(charspacedotval(trim(els[i].value),minlen,maxlen)!="")			 
		        {
					myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+charspacedotval(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
            		incr++;
				}		
			}
			if(valcode=="CSDTWONULL")  /* Done Characters Space and Dot*/
			{
				if(trim(els[i].value).length!=0 )
                {
					if(charspacedotval(trim(els[i].value),minlen,maxlen)!="")
                    {
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+charspacedotval(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
                        incr++;
					}
				}
			}
		
			if(valcode=="CSDCWINULL")  /* Done Characters Space Dot and Comma*/
			{
				if(trim(els[i].value).length==0)
                {
					myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ requireValue(trim(els[i].value)) +"\n</td>\n</tr>";
                    incr++;
				}
                else if(charspacedotcommaval(trim(els[i].value),minlen,maxlen)!="")			 
		        {
					myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+charspacedotcommaval(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
            		incr++;
				}		
			}
			if(valcode=="CSDCWONULL")  /* Done Characters Space Dot and Comma */
			{
				if(trim(els[i].value).length!=0 )
                {
					if(charspacedotcommaval(trim(els[i].value),minlen,maxlen)!="")
                    {
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+charspacedotcommaval(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
                        incr++;
                     }
                }
			}
	        if(valcode=="WWWAWINULL")  /* Done Only Characters, Numbers And Dot */
            {
				if(trim(els[i].value).length==0)
				{
					myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ requireValue(trim(els[i].value)) +"\n</td>\n</tr>";
                    incr++;
				}
				else if(chardotval(trim(els[i].value),minlen,maxlen)!="")
                {
					myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+chardotval(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
                    incr++;
				}
			}
			if(valcode=="WWWAWONULL")  /* Done Only Characters, Numbers And Dot */
            {
				if(trim(els[i].value).length!=0)
                {
					if(chardotval(trim(els[i].value),minlen,maxlen)!="")
                    {
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+chardotval(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
                        incr++;
					}
				}
			}
			
			if(valcode=="NUMBWINULL")  /* Done Only Numbers */ 
			{
				if(trim(els[i].value).length==0)
				{
					myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ requireValue(trim(els[i].value)) +"\n</td>\n</tr>";
			        incr++;
				}
	            else if(onlydigits(trim(els[i].value),minlen,maxlen)!="")
			    {
			 	 	myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+onlydigits(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
					incr++;	
			    }
			}
			if(valcode=="NUMBWONULL")  /* Done Only Numbers */
			{
				if(trim(els[i].value).length!=0)
		        {
					if(onlydigits(trim(els[i].value),minlen,maxlen)!="")
                    {
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+onlydigits(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
                        incr++;	
					}
				}
			}
			if(valcode=="NUMMWINULL")  /* Done Only Numbers, will accept All zeros also*/ 
			{
				if(trim(els[i].value).length==0)
				{
					myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ requireValue(trim(els[i].value)) +"\n</td>\n</tr>";
			        incr++;
				}
	            else if(onlynumbers(trim(els[i].value),minlen,maxlen)!="")
			    {
			 	 	myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+onlynumbers(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
					incr++;	
			    }
			}
			if(valcode=="NUMMWONULL")  /* Done Only Numbers, will accept All zeros also */
			{
				if(trim(els[i].value).length!=0)
		        {
					if(onlynumbers(trim(els[i].value),minlen,maxlen)!="")
                    {
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+onlynumbers(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
                        incr++;	
					}
				}
			}
			
			/*** Added By Kailash  Start  ***/
				
			if(valcode=="CDNUWINULL")  /* Done Only Card Number for 16 or 19 digit, will accept All zeros also*/ 
			{
				if(trim(els[i].value).length==0)
				{
					myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ requireValue(trim(els[i].value)) +"\n</td>\n</tr>";
			        incr++;
				}
	            else if(onlycardnumbers(trim(els[i].value),minlen,maxlen)!="")
			    {
			 	 	myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+onlycardnumbers(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
					incr++;	
			    }
			}
			if(valcode=="CDNUWONULL")  /* Done Only Card Number for 16 or 19 digit, will accept All zeros also */
			{
				if(trim(els[i].value).length!=0)
		        {
					if(onlycardnumbers(trim(els[i].value),minlen,maxlen)!="")
                    {
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+onlycardnumbers(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
                        incr++;	
					}
				}
			}
		/*** Added By Kailash  End  ***/


			if(valcode=="FREEWINULL")  /* Free Tex */
            {
				if(trim(els[i].value).length==0)
                {
					myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ requireValue(trim(els[i].value)) +"\n</td>\n</tr>";
                    incr++;
				}
                else if(freetext(trim(els[i].value),minlen,maxlen)!="")
                {
					myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+freetext(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
                    incr++;
				}
			}
			if(valcode=="FREEWONULL")  /* Free Text */
			{
				if(trim(els[i].value).length!=0)
                {
					if(freetext(trim(els[i].value),minlen,maxlen)!="")
                    {
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+freetext(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
                        incr++;
					}
				}
			}

	
			if(valcode=="PINBWINULL")  /* Done Only Numbers */ 
			{
				if(trim(els[i].value).length==0)
                {
					myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ requireValue(trim(els[i].value)) +"\n</td>\n</tr>";
                    incr++;
				}
	            else if(pindigits(trim(els[i].value),minlen,maxlen)!="")
			    {
			 		myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+pindigits(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
					incr++;	
				}
			}
			if(valcode=="PINBWONULL")  /* Done Only Numbers */
			{
				if(trim(els[i].value).length!=0)
		        {
					if(pindigits(trim(els[i].value),minlen,maxlen)!="")
					{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+pindigits(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
                        incr++;	
					}
				}
			}
			if(valcode=="DTNAWINULL")  /* Done Numbers and Dot */
			{
				if(trim(els[i].value).length==0)
                {
					myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ requireValueErr(trim(els[i].value)) +"\n</td>\n</tr>";
                    incr++;
				}
		 	    else if(dotnumbval(trim(els[i].value),minlen,maxlen)!="")
			    {
			 		myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+dotnumbval(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
				    incr++;	
				}
			}
			if(valcode=="DTNAWONULL")  /* Done Numbers and Dot */
			{
				if(trim(els[i].value).length!=0)
                {
					if(dotnumbval(trim(els[i].value),minlen,maxlen)!="")
                    {
                		myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+dotnumbval(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
                        incr++;	
					}
				}
			}


			if(valcode=="DTNBWINULL")  /* Done Numbers and Dot */
			{
				if(trim(els[i].value).length==0)
				{
					myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ requireValue(trim(els[i].value)) +"\n</td>\n</tr>";
                    incr++;
				}
		 	    else if(dotnumbval(trim(els[i].value),minlen,maxlen)!="")
			    {
			 		myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+dotnumbval(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
					incr++;	
			    }
			    else
			    {
					var ret=dtnbchk(trim(els[i].value));
					if(ret!="")
					{	
				 		myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ret+"\n</td>\n</tr>";
						incr++;
					}
			    }			
			}

			if(valcode=="DTNBWONULL")  /* Done Numbers and Dot */
			{
				if(trim(els[i].value).length!=0)
                {
					if(dotnumbval(trim(els[i].value),minlen,maxlen)!="")
                    {
                		myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+dotnumbval(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
                        incr++;	
					}
					else
					{
						var ret=dtnbchk(trim(els[i].value));
						if(ret!="")
						{	
				 			myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ret+"\n</td>\n</tr>";
							incr++;
						}
				    }	
				}
			}

			if(valcode=="DTCNWINULL")  /* Done Numbers and Dot and Comma*/
			{
				if(trim(els[i].value).length==0)
				{
					myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ requireValue(trim(els[i].value)) +"\n</td>\n</tr>";
                    incr++;
				}
		 	    else if(dotcommanumbval(trim(els[i].value),minlen,maxlen)!="")
			    {
			 		myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+dotcommanumbval(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
					incr++;	
			    }
			    else
			    {
					var ret=dtnbchk(trim(els[i].value));
					if(ret!="")
					{	
				 		myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ret+"\n</td>\n</tr>";
						incr++;
					}
			    }			
			}

			if(valcode=="DTCNWONULL")  /* Done Numbers and Dot and Comma*/
			{
				if(trim(els[i].value).length!=0)
                {
					if(dotcommanumbval(trim(els[i].value),minlen,maxlen)!="")
                    {
                		myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+dotcommanumbval(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
                        incr++;	
					}
					else
					{
						var ret=dtnbchk(trim(els[i].value));
						if(ret!="")
						{	
				 			myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ret+"\n</td>\n</tr>";
							incr++;
						}
				    }	
				}
			}


			if(valcode=="NBCLWINULL")  /* Done Numbers and colon */
			{
				if(trim(els[i].value).length==0)
                {
					myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ requireValue(trim(els[i].value)) +"\n</td>\n</tr>";
                    incr++;
				}
		 	    else if(colonnumbval(trim(els[i].value),minlen,maxlen)!="")
			    {
			 		myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+colonnumbval(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
				    incr++;	
				}
			}
			if(valcode=="NBCLWONULL")  /* Done Numbers and Dot */
			{
				if(trim(els[i].value).length!=0)
                {
					if(colonnumbval(trim(els[i].value),minlen,maxlen)!="")
                    {
                		myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+colonnumbval(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
                        incr++;	
					}
				}
			}

			if(valcode=="HINBWINULL")  /* Done Numbers and Hyphen */
			{
				if(trim(els[i].value).length==0)
                {
					myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ requireValue(trim(els[i].value)) +"\n</td>\n</tr>";
                    incr++;
				}
		  		else if(numbandhypen(trim(els[i].value),minlen,maxlen)!="")
				{
			 		myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+numbandhypen(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
					incr++;	
				}
			}
			if(valcode=="HINBWONULL")  /* Done Numbers and Hyphen */
			{
				if(trim(els[i].value).length!=0)
                {
					if(numbandhypen(trim(els[i].value))!="")
                    {
                		myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+numbandhypen(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
                        incr++;	
					}
				}
			}
			if(valcode=="CHNBWINULL")  /* Done Characters and Numbers */
			{
				if(trim(els[i].value).length==0)
				{
					myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ requireValue(trim(els[i].value)) +"\n</td>\n</tr>";
                    incr++;
				}
		        else if(charnumb(trim(els[i].value),minlen,maxlen)!="")
				{
					myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+charnumb(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
                    incr++;	
				}
			}
			if(valcode=="CHNBWONULL")  /* Done Characters and Numbers */
			{
				if(trim(els[i].value).length!=0)
                		{
					if(charnumb(trim(els[i].value),minlen,maxlen)!="")
                    			{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+charnumb(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
                        			incr++;	
					}
				}
			}


			if(valcode=="CHNSWINULL")  /* Done Characters and Numbers and Space*/
			{
				if(trim(els[i].value).length==0)
				{
					myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ requireValue(trim(els[i].value)) +"\n</td>\n</tr>";
                    incr++;
				}
		        else if(charnumbspace(trim(els[i].value),minlen,maxlen)!="")
				{
					myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+charnumb(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
                    incr++;	
				}
			}
			if(valcode=="CHNSWONULL")  /* Done Characters and Numbers and Space*/
			{
				if(trim(els[i].value).length!=0)
                		{
					if(charnumbspace(trim(els[i].value),minlen,maxlen)!="")
                    			{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+charnumbspace(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
                        			incr++;	
					}
				}
			}

			if(valcode=="SCNBWINULL")  /* Space Not Allowed at starting (Done Characters and Numbers )*/
			{        
				if(trim(els[i].value).length==0)
				{
					myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ requireValue(trim(els[i].value)) +"\n</td>\n</tr>";
                    incr++;
				}
		        else if(charnumb(els[i].value,minlen,maxlen)!="")
				{
					myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+charnumb(els[i].value,minlen,maxlen)+"\n</td>\n</tr>";
                    incr++;	
				}
			}
/********************* For Mixing of Characters , Numbers and Some Special Chanracters ****************/

			if(valcode=="CNSPWINULL")  /* Done Characters and Numbers and Some Special Characters*/
			{
				if(trim(els[i].value).length==0)
				{
					myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ requireValue(trim(els[i].value)) +"\n</td>\n</tr>";
                    incr++;
				}
				else if(charnumbsomesplchar(trim(els[i].value),minlen,maxlen)!="")
				{
					myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+charnumbsomesplchar(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
                    incr++;	
				}
			}
			if(valcode=="CNSPWONULL")  /* Done Characters and Numbers and Some Special Characters */
			{
				if(trim(els[i].value).length!=0)
				{
					if(charnumbsomesplchar(trim(els[i].value),minlen,maxlen)!="")
                    {
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+charnumbsomesplchar(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
                        incr++;	
					}
				}
			}
		
			if(valcode=="USIDWINULL")  /* Done For User-ID */
			{
				if(trim(els[i].value).length==0)
                {
					myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ requireValue(trim(els[i].value)) +"\n</td>\n</tr>";
                    incr++;
				}
		        else if(userid(trim(els[i].value),minlen,maxlen)!="")
				{
					myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+userid(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
                    incr++;	
				}
			}
			if(valcode=="USIDWONULL")  /* Done For User-ID */
			{
				if(trim(els[i].value).length!=0)
                {
					if(userid(trim(els[i].value),minlen,maxlen)!="")
                    {
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+userid(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
                        incr++;	
					}
				}
			}
			if(valcode=="CNHIWINULL")  /* Done Characters Numbers and Hyphen */
			{
				if(trim(els[i].value).length==0)
                {
					myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ requireValue(trim(els[i].value)) +"\n</td>\n</tr>";
                    incr++;
				}
				else if(charnumbhyphen(trim(els[i].value),minlen,maxlen)!="")
				{
					myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+charnumbhyphen(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
                    incr++;	
				}
			}
			if(valcode=="CNHIWONULL")  /* Done Characters Numbers and Hyphen */
			{
				if(trim(els[i].value).length!=0)
				{
					if(charnumbhyphen(trim(els[i].value),minlen,maxlen)!="")
                    {
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+charnumbhyphen(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
                        incr++;	
					}
				}
			}
			if(valcode=="CNUNWINULL")  /* Done Characters Numbers and Underscore */
			{
				if(trim(els[i].value).length==0)
				{
					myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ requireValue(trim(els[i].value)) +"\n</td>\n</tr>";
                    incr++;
				}
				else if(charnumbunderscore(trim(els[i].value),minlen,maxlen)!="")
				{
					myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+charnumbunderscore(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
                    incr++;	
				}
			}
			if(valcode=="CNUNWONULL")  /* Done Characters Numbers and Underscore */
			{
				if(trim(els[i].value).length!=0)
				{
					if(charnumbunderscore(trim(els[i].value),minlen,maxlen)!="")
                    {
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+charnumbunderscore(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
                        incr++;	
					}
				}
			}
			if(valcode=="ALPAWINULL")  /* Done Alpha Numeric */
			{
				if(trim(els[i].value).length==0)
				{
					myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ requireValue(trim(els[i].value)) +"\n</td>\n</tr>";
                    incr++;
				}
				else if(alphanumericval(trim(els[i].value),minlen,maxlen)!="")
				{
					myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+alphanumericval(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
                    incr++;	
				}
			}
			if(valcode=="ALPAWONULL")  /* Done Characters Alpha Numeric */
			{
				if(trim(els[i].value).length!=0)
                {
					if(alphanumericval(trim(els[i].value),minlen,maxlen)!="")
                    {
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+alphanumericval(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
                        incr++;	
					}
				}
			}
	
			if(valcode=="SPCLWINULL")  /* Alpha Numeric and some special charecters retricting % and & */
			{
				if(trim(els[i].value).length==0)
               	 {
					myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ requireValue(trim(els[i].value)) +"\n</td>\n</tr>";
                    incr++;
				}
				else if(alphanumericspclchar(trim(els[i].value),minlen,maxlen)!="")
				{
					myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+alphanumericspclchar(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
                    incr++;	
				}
			}
			if(valcode=="SPCLWONULL")  /* Done Characters Alpha Numeric */
			{
				if(trim(els[i].value).length!=0)
                {
					if(alphanumericspclchar(trim(els[i].value),minlen,maxlen)!="")
                    {
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+alphanumericspclchar(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
                        incr++;	
					}
				}
			}


			if(valcode=="ANSCWINULL")  /* Done Alpha Numerics,special characters and spaces */
            {
				if(trim(els[i].value).length==0)
                {
					myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ requireValue(trim(els[i].value)) +"\n</td>\n</tr>";
                    incr++;
				}
                else if(alphanumericspechar(trim(els[i].value),minlen,maxlen)!="")
                {
					myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+alphanumericspechar(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
                    incr++;
				}
			}
            if(valcode=="ANSCWONULL")  /* Done Alpha Numerics,special characters and spaces */
            {
				if(trim(els[i].value).length!=0)
                {
					if(alphanumericspechar(trim(els[i].value),minlen,maxlen)!="")
                    {
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+alphanumericspechar(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
                        incr++;
					}
				}
			}
			if(valcode=="MAILWINULL")  /* Done Email */
			{
				if(trim(els[i].value).length==0)
                {
					myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ requireValue(trim(els[i].value)) +"\n</td>\n</tr>";
                    incr++;
					var idtag=els[i].id;
					var error=requireValue(trim(els[i].value));
					document.getElementById('subscribemessage').innerHTML = "At "+idtag+""+error;
				}
				else if(mailval(trim(els[i].value),minlen,maxlen)!="")
				{
					myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+mailval(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
                    incr++;	
					var idtag=els[i].id;
					var error=requireValue(trim(els[i].value));
					document.getElementById('subscribemessage').innerHTML = "At "+idtag+""+error;
				}
			}
			if(valcode=="MAILWONULL")  /* Done Email */
			{
				if(trim(els[i].value).length!=0)
                {
					if(mailval(trim(els[i].value),minlen,maxlen)!="")
                    {
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+mailval(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
                        incr++;	
					}
				}
			}
		
			if(valcode=="DATEWINULL")
			{
				if(trim(els[i].value).length==0)
                {
					myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ requireValue(trim(els[i].value)) +"\n</td>\n</tr>";
					incr++;
				}
		        else if(dateval(trim(els[i].value),minlen,maxlen)!="")
		     	{
					myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+dateval(trim(els[i].value),minlen,maxlen),minlen,maxlen+"\n</td>\n</tr>";
			     	incr++;	
				}
			}
			
			
			if(valcode=="DTTMWINULL")
			{
				if(trim(els[i].value).length==0)
                {
					myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ requireValue(trim(els[i].value)) +"\n</td>\n</tr>";
					incr++;
				}
		        else if(datetimeval(trim(els[i].value),minlen,maxlen)!="")
		     	{
					myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+datetimeval(trim(els[i].value),minlen,maxlen),minlen,maxlen+"\n</td>\n</tr>";
			     	incr++;	
				}
			}
			
			if(valcode=="DTTMWONULL")
			{
				if(datetimeval(trim(els[i].value),minlen,maxlen)!="")
		     	{
					myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+datetimeval(trim(els[i].value),minlen,maxlen),minlen,maxlen+"\n</td>\n</tr>";
			     	incr++;	
				}
			}
			
			
			if(valcode=="DATEWONULL")
			{
				if(trim(els[i].value).length!=0)
        		{
					if(dateval(trim(els[i].value),minlen,maxlen)!="")
					{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+dateval(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
			      		incr++;	
					}
				}
			}
			if(valcode=="CRDTWINULL")
			{
				if(trim(els[i].value).length==0)
                {
					myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ requireValue(trim(els[i].value)) +"\n</td>\n</tr>";
                    incr++;
				}
				else if(currdateval(trim(els[i].value),minlen,maxlen)!="")
				{
					myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+currdateval(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
			     	incr++;	
				}
			}
			if(valcode=="CRDTWONULL")
			{
				if(trim(els[i].value).length!=0)
        		{
					if(currdateval(trim(els[i].value),minlen,maxlen)!="")
					{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+currdateval(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
			      		incr++;	
					}
				}
			}
		
		
			if(valcode=="FRDTWINULL")
			{
				if(trim(els[i].value).length==0)
                {
					myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ requireValue(trim(els[i].value)) +"\n</td>\n</tr>";
                    incr++;
				}
		        else if(futdateval(trim(els[i].value),minlen,maxlen)!="")
		     	{
					myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+futdateval(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
			     	incr++;	
				}
			}
			if(valcode=="FRDTWONULL")
			{
				if(trim(els[i].value).length!=0)
        		{
					if(futdateval(trim(els[i].value),minlen,maxlen)!="")
					{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+futdateval(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
			      		incr++;	
					}
				}
			}
		
			if(valcode=="CRNDWINULL")
			{
				if(trim(els[i].value).length==0)
                {
					myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ requireValue(trim(els[i].value)) +"\n</td>\n</tr>";
                    incr++;
				}
				else if(crtdateval(trim(els[i].value),minlen,maxlen)!="")
		     	{
					myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+crtdateval(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
			     	incr++;	
				}
			}
			if(valcode=="CRNDWONULL")
			{
				if(trim(els[i].value).length!=0)
        		{
					if(crtdateval(trim(els[i].value),minlen,maxlen)!="")
					{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+crtdateval(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
			      		incr++;	
					}
				}
			}
			if(valcode=="CHCKWINULL")
			{
				if(!(els[i].checked))
				{
					myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".checked=\"true\"' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>: To be Selected\n</td>\n</tr>";
					incr++;	
        		}
			}		 
			if(valcode=="RADIWINULL")
			{
				if(els[i].name=="ACCEPT_OR_REJECT" && (!(els[i].checked)))
				{
					myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".checked=\"true\"' style='cursor:hand'>\n<td >\n<font style='color:blue;font-weight:bold;font-size:11;font-family:arial;'>\nAt "+els[i].id+" \n</font>\n</td>\n<td>: To be Selected\n</td>\n</tr>";
					incr++;
				}
				if(els[i].name=="CARD_RETAINED" && (!(els[i].checked)))
				{
					myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".checked=\"true\"' style='cursor:hand'>\n<td >\n<font style='color:blue;font-weight:bold;font-size:11;font-family:arial;'>\nAt "+els[i].id+" \n</font>\n</td>\n<td>: To be Selected\n</td>\n</tr>";
					incr++;
				}
			}
		}    
	}
	
	/*******************Final String Preparing Here***********************/           
	if(myarray.length!=0)
	{
		str="<table align=center cellpadding=0 cellspacing=0 class='errorarea'>\n";
		for(var i=0;i<myarray.length;i++)
		{
			str+=myarray[i];   
		}
		str+="\n</table>";
	}
	else
	{
		str="";
		for(var k=0;k<selArray.length;k++)
		{
			document.getElementsByName(selArray[k])[0].value="";
		}	
	}

  return(str);
}////////////////// End Of The formNames() Function 

function logFormNames(netid,pinno)
{
  var incr=0;
  var str="";
  var myarray=new Array();

  if(trim(netid).length==0)
  {
             myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0].NET_ID.select()' style='cursor:hand'>\n<td >\n<font style='font-weight:bold;'>\n At User ID  \n</font>\n</td>\n<td style='font-size:14px;color:green;font-weight:bold;'>:"+ requireValue(netid) +"\n</td>\n</tr>";
             incr++;
  }
  else if(alphaval(trim(netid))!="")
  {
             myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0].NET_ID.select()' style='cursor:hand'>\n<td >\n<font style='font-weight:bold;'>\n At User ID  \n</font>\n</td>\n<td style='font-size:14px;color:green;font-weight:bold;'>:"+ numbonly(netid) +"\n</td>\n</tr>";
             incr++;
  }
  else if(trim(netid).length<4)
  {
             myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0].NET_ID.select()' style='cursor:hand'>\n<td >\n<font style='font-weight:bold;font-size:14px'>\n At User ID  \n</font>\n</td>\n<td style='font-size:14px;color:green;font-weight:bold;'>: User ID length should be minimum of 4 \n</td>\n</tr>";
             incr++;
  }

  if(trim(pinno).length==0)
  {
             myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0].PIN_NO.select()' style='cursor:hand'>\n<td >\n<font style='font-weight:bold;font-size:14px'>\n At Password \n</font>\n</td>\n<td style='font-size:14px;color:green;font-weight:bold;'>:"+ requireValue(pinno) +"\n</td>\n</tr>";
             incr++;
  }
  else if(pwdonly(netid,pinno)!="")
  {
           myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0].PIN_NO.select()' style='cursor:hand'>\n<td >\n<font style='font-weight:bold;font-size:14px'>\n At Password \n</font>\n</td>\n<td style='font-size:14px;color:green;font-weight:bold;'>:"+pwdonly(netid,pinno)+"\n</td>\n</tr>";
	     incr++;	
  }
  if (myarray.length!=0)
  {
    	str="<table align=center cellpadding=0 cellspacing=0 class='errorarea' style='font-size:13px;'>\n";
	    for(var i=0;i<myarray.length;i++)
	    {
		  str+=myarray[i];   
	    }
    	str+="\n</table>";
  }
  else
  {
       str="";
  }
   return(str);
}

// Added on 06/08/2008 by disney for CBA Customer login
/*
function logFormNames(netid,pinno,cvc2)
{
  var incr=0;
  var str="";
  var myarray=new Array();

//alert("logformnames(1)");

  if(trim(netid).length==0)
  {
             myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0].NET_ID.select()' style='cursor:hand'>\n<td >\n<font style='font-weight:bold;'>\n At User ID  \n</font>\n</td>\n<td style='font-size:14px;color:green;font-weight:bold;'>:"+ requireValue(netid) +"\n</td>\n</tr>";
             incr++;
  }
  else if(alphaval(trim(netid))!="")
  {
             myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0].NET_ID.select()' style='cursor:hand'>\n<td >\n<font style='font-weight:bold;'>\n At User ID  \n</font>\n</td>\n<td style='font-size:14px;color:green;font-weight:bold;'>:"+ numbonly(netid) +"\n</td>\n</tr>";
             incr++;
  }
  else if(trim(netid).length<4)
  {
             myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0].NET_ID.select()' style='cursor:hand'>\n<td >\n<font style='font-weight:bold;font-size:14px'>\n At User ID  \n</font>\n</td>\n<td style='font-size:14px;color:green;font-weight:bold;'>: User ID length should be minimum of 4 \n</td>\n</tr>";
             incr++;
  }


  if(trim(pinno).length==0)
  {
             myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0].PIN_NO.select()' style='cursor:hand'>\n<td >\n<font style='font-weight:bold;font-size:14px'>\n At Personal Access Code \n</font>\n</td>\n<td style='font-size:14px;color:green;font-weight:bold;'>:"+ requireValue(pinno) +"\n</td>\n</tr>";
             incr++;
  }
  else if(trim(pinno).length<4)
{
		myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0].PIN_NO.select()' style='cursor:hand'>\n<td >\n<font style='font-weight:bold;font-size:14px'>\n At Personal Access Code \n</font>\n</td>\n<td style='font-size:14px;color:green;font-weight:bold;'>: Length should be 4 \n</td>\n</tr>";
             incr++;
}
else if(netid==pinno)
{
           myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0].PIN_NO.select()' style='cursor:hand'>\n<td >\n<font style='font-weight:bold;font-size:14px'>\n At Personal Access Code \n</font>\n</td>\n<td style='font-size:14px;color:green;font-weight:bold;'>: User-ID And Personal Access Code Should Not Be Same \n</td>\n</tr>";
	     incr++;	
 }


//if(trim(cvc2).length==0)
//{
//		myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0].SEC_CODE.select()' style='cursor:hand'>\n<td >\n<font style='font-weight:bold;font-size:14px'>\n At Card Security Code \n</font>\n</td>\n<td style='font-size:14px;color:green;font-weight:bold;'>:"+ requireValue(cvc2) +"\n</td>\n</tr>";
//             incr++;
// }

if((!(trim(cvc2).length==0)) && (trim(cvc2).length!=3))
{
	 	myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0].SEC_CODE.select()' style='cursor:hand'>\n<td >\n<font style='font-weight:bold;font-size:14px'>\n At Card Security Code \n</font>\n</td>\n<td style='font-size:14px;color:green;font-weight:bold;'>: Length should be 3 \n</td>\n</tr>";
             incr++;
}
  if (myarray.length!=0)
  {
    	str="<table align=center cellpadding=0 cellspacing=0 class='errorarea' style='font-size:13px;'>\n";
	    for(var i=0;i<myarray.length;i++)
	    {
		  str+=myarray[i];   
	    }
    	str+="\n</table>";
  }
  else
  {
       str="";
  }
	//alert("exit..");
   return(str);
}


*/
/********** logformNames Funs ********************/

function alphaval(str,minlen,maxlen)
{
	if (str.length<minlen)
	{
		return("The Data Should Be Of Minimum "+minlen+" Length");
	}
	else if (str.length>maxlen)
	{
		return("The Data Should Be Of Maximum "+maxlen+" Length");
	}
	else
	{
      return("");
	}
}


function pwdonly(netid,pwd)
{
	
	if ((pwd.length<8) )	
	{
		return("Password Length Should Not Be Less Than 8");
	}
	/*
	else if (pwd.length>10)
	{
		return("Password Length Should Not Be Greater Than 10");
	}
	*/
	else if (pwd==netid)
	{
		return("Net-ID/User-ID And Password Should Not Be Same");
	}
	else 
		return("");
}




function pwdlogFormNames(netid,pinno,newpin,cfrpin)
{
  var incr=0;
  var str="";
  var myarray=new Array();
  if(trim(netid).length==0)
  {
             myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0].USER_ID.select()' style='cursor:hand'>\n<td >\n<font style='font-weight:bold;font-size:13px'>\n At User ID  \n</font>\n</td>\n<td>:"+ requireValue(netid) +"\n</td>\n</tr>";
             incr++;
  }
  else if(alphaval(trim(netid),6,100)!="")
  {
             myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0].USER_ID.select()' style='cursor:hand'>\n<td >\n<font style='font-weight:bold;font-size:13px'>\n At User ID  \n</font>\n</td>\n<td>:"+ alpahval(netid) +"\n</td>\n</tr>";
             incr++;
  }
  else if(trim(netid).length<6)
  {
             myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0].USER_ID.select()' style='cursor:hand'>\n<td >\n<font style='font-weight:bold;font-size:13px'>\n At User ID  \n</font>\n</td>\n<td>: The Data Should Be Of Proper Length\n</td>\n</tr>";
             incr++;
  }
  if(trim(pinno).length==0)
  {
             myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0].OLD_PSW.select()' style='cursor:hand'>\n<td >\n<font style='font-weight:bold;font-size:13px'>\n At Old Password \n</font>\n</td>\n<td>:"+ requireValue(pinno) +"\n</td>\n</tr>";
             incr++;
  }
  else if(pwdonly(netid,pinno)!="")
  {
           myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0].OLD_PSW.select()' style='cursor:hand'>\n<td >\n<font style='font-weight:bold;font-size:13px'>\n At Old Password \n</font>\n</td>\n<td>:"+pwdonly(netid,pinno)+"\n</td>\n</tr>";
	     incr++;	
  }
  if(trim(newpin).length==0)
  {
             myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0].NEW_PSW.select()' style='cursor:hand'>\n<td >\n<font style='font-weight:bold;font-size:13px'>\n At New Password \n</font>\n</td>\n<td>:"+ requireValue(newpin) +"\n</td>\n</tr>";
             incr++;
  }
  else if(pwdonly(netid,newpin)!="")
  {
           myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0].NEW_PSW.select()' style='cursor:hand'>\n<td >\n<font style='font-weight:bold;font-size:13px'>\n At New Password \n</font>\n</td>\n<td>:"+pwdonly(netid,newpin)+"\n</td>\n</tr>";
	     incr++;	
  }
  if(trim(cfrpin).length==0)
  {
             myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0].CFRM_PSW.select()' style='cursor:hand'>\n<td >\n<font style='font-weight:bold;font-size:13px'>\n At Confirm Password \n</font>\n</td>\n<td>:"+ requireValue(cfrpin) +"\n</td>\n</tr>";
             incr++;
  }
  else if(pwdonly(netid,cfrpin)!="")
  {
           myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0].CFRM_PSW.select()' style='cursor:hand'>\n<td >\n<font style='font-weight:bold;font-size:13px'>\n At Confirm Password \n</font>\n</td>\n<td>:"+pwdonly(netid,cfrpin)+"\n</td>\n</tr>";
	     incr++;	
  }
  if(newpin!=cfrpin)
  {
            myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0].NEW_PSW.select()' style='cursor:hand'>\n<td >\n<font style='font-weight:bold;font-size:13px'>\n At Confirm Password \n</font>\n</td>\n<td>: New And Confirm PIN Mismatch \n</td>\n</tr>";
            incr++;
  }
  if(pinno==newpin)
  {
            myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0].NEW_PSW.select()' style='cursor:hand'>\n<td >\n<font style='font-weight:bold;font-size:13px'>\n At Old Password \n</font>\n</td>\n<td>: Old And New PIN Numbers Should Not Match \n</td>\n</tr>";
            incr++;
  }
  if (myarray.length!=0)
  {
    	str="<table align=center cellpadding=0 cellspacing=0 class='errorarea' style='font-size:13px;'>\n";
	    for(var i=0;i<myarray.length;i++)
	    {
		  str+=myarray[i];   
	    }
    	str+="\n</table>";
  }
  else
  {
       str="";
  }
   return(str);
}


function numbval(str,minlen,maxlen)
{
	var count=0;
	while(count<str.length)
	{
		var charat=str.charAt(count);
		if(charat=="-")
		{
			return ("Only Numberic Data Is Allowed");
		}
		count++;
	}
	if (str.length<minlen)
	{
		return("The Data Should Be Of Minimum "+minlen+" Length");
	}
	else if (str.length>maxlen)
	{
		return("The Data Should Be Of Maximum "+maxlen+" Length");
	}
	else 
	{
        var errstr;
		errstr=numbonly(str);
            return(errstr);
	}
}


function pwdlogFormNames1(netid,pinno,newpin,cfrpin)
{
  var incr=0;
  var str="";
  var myarray=new Array();
  if(trim(netid).length==0)
  {
             myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0].USER_ID.select()' style='cursor:hand'>\n<td >\n<font style='font-weight:bold;font-size:13px'>\n At User ID  \n</font>\n</td>\n<td>:"+ requireValue(netid) +"\n</td>\n</tr>";
             incr++;
  }
  else if(numbval(trim(netid),6,100)!="")
  {
             myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0].USER_ID.select()' style='cursor:hand'>\n<td >\n<font style='font-weight:bold;font-size:13px'>\n At User ID  \n</font>\n</td>\n<td>:"+ alpahval(netid) +"\n</td>\n</tr>";
             incr++;
  }
  else if(trim(netid).length<6)
  {
             myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0].USER_ID.select()' style='cursor:hand'>\n<td >\n<font style='font-weight:bold;font-size:13px'>\n At User ID  \n</font>\n</td>\n<td>: The Data Should Be Of Proper Length\n</td>\n</tr>";
             incr++;
  }
  if(trim(pinno).length==0)
  {
             myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0].OLD_PSW.select()' style='cursor:hand'>\n<td >\n<font style='font-weight:bold;font-size:13px'>\n At Old PIN Number \n</font>\n</td>\n<td>:"+ requireValue(pinno) +"\n</td>\n</tr>";
             incr++;
  }
  else if(pwdonly(netid,pinno)!="")
  {
           myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0].OLD_PSW.select()' style='cursor:hand'>\n<td >\n<font style='font-weight:bold;font-size:13px'>\n At Old PIN Number \n</font>\n</td>\n<td>:"+pwdonly(netid,pinno)+"\n</td>\n</tr>";
	     incr++;	
  }
  if(trim(newpin).length==0)
  {
             myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0].NEW_PSW.select()' style='cursor:hand'>\n<td >\n<font style='font-weight:bold;font-size:13px'>\n At New PIN Number \n</font>\n</td>\n<td>:"+ requireValue(newpin) +"\n</td>\n</tr>";
             incr++;
  }
  else if(pwdonly(netid,newpin)!="")
  {
           myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0].NEW_PSW.select()' style='cursor:hand'>\n<td >\n<font style='font-weight:bold;font-size:13px'>\n At New PIN Number \n</font>\n</td>\n<td>:"+pwdonly(netid,newpin)+"\n</td>\n</tr>";
	     incr++;	
  }
  if(trim(cfrpin).length==0)
  {
             myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0].CFRM_PSW.select()' style='cursor:hand'>\n<td >\n<font style='font-weight:bold;font-size:13px'>\n At Confirm PIN Number \n</font>\n</td>\n<td>:"+ requireValue(cfrpin) +"\n</td>\n</tr>";
             incr++;
  }
  else if(pwdonly(netid,cfrpin)!="")
  {
           myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0].CFRM_PSW.select()' style='cursor:hand'>\n<td >\n<font style='font-weight:bold;font-size:13px'>\n At Confirm PIN Number \n</font>\n</td>\n<td>:"+pwdonly(netid,cfrpin)+"\n</td>\n</tr>";
	     incr++;	
  }
  if(newpin!=cfrpin)
  {
            myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0].NEW_PSW.select()' style='cursor:hand'>\n<td >\n<font style='font-weight:bold;font-size:13px'>\n At Confirm PIN Number \n</font>\n</td>\n<td>: New And Confirm PIN Mismatch \n</td>\n</tr>";
            incr++;
  }
  if (myarray.length!=0)
  {
    	str="<table align=center cellpadding=0 cellspacing=0 class='errorarea' style='font-size:13px;'>\n";
	    for(var i=0;i<myarray.length;i++)
	    {
		  str+=myarray[i];   
	    }
    	str+="\n</table>";
  }
  else
  {
       str="";
  }
   return(str);
}






function formNames2(fields)
{
	var sty1="font-weight:bold;font-size:11;font-family:arial;";
	var sty2="color:green;font-weight:bold;font-size:11;font-family:arial;";
	var incr=0;
	var str="";
	var myarray=new Array();
	var selArray=new Array();
	//if(!document.forms.length)
	// return;
	var els= document.forms[0].elements;
	var els1=new Array();
	els1=fields.split(",");
	for(var j=0;j< els1.length;j++)
	{
		for(var i= 0; i < els.length; i++)
		{
		    if (els[i].id!="")
			if(els[i].name==els1[j])
			{
				//alert("its correct");
				var compcode="";
				var valcode="";
				compcode=els[i].title;
             
				if(compcode.length==18)
				{
        			valcode=compcode.substr(0,10);
					var minlen=compcode.substr(11,3);
					var maxlen=compcode.substr(15,3); 
				}

        		if(valcode=="SLTYWINULL")  /* Done For Select Box */
				{    
					if(seltype(trim(els[i].value))!="")
					{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".focus()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+seltype(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
						incr++;	
					}
				}
				if(valcode=="SLTYWONULL")  /* Done For Select Box */
				{   
					if(trim(els[i].value)=="NO_DATA")
					{
						selArray[n]= els[i].name;  
						n++;
					}
				}
	  			if(valcode=="CHARWINULL") /* Done  Only Characters*/
				{
					if(trim(els[i].value).length==0)
					{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</td>\n<td style='"+sty2+"'>:"+ requireValue(trim(els[i].value)) +"\n</td>\n</tr>";
						incr++;
					}
					else if(charval(trim(els[i].value),minlen,maxlen)!="")			 
					{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+charval(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
            			incr++;
					}		
				}
				if(valcode=="CHARWONULL")  /* Done Only Characters*/
				{
					if(trim(els[i].value).length!=0)
					{
						if(charval(trim(els[i].value),minlen,maxlen)!="")
						{
							myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+charval(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
							incr++;
						}
					}
				}
				
				if(valcode=="CHSPWINULL") /* Done Characters and Space*/
				{
					if(trim(els[i].value).length==0)
					{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ requireValue(trim(els[i].value)) +"\n</td>\n</tr>";
						incr++;
					}
					else if(charspaceval(trim(els[i].value),minlen,maxlen)!="")			 
					{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+charspaceval(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
						incr++;
					}		
				}
				if(valcode=="CHSPWONULL")  /* Done Characters and Space*/
				{
					if(trim(els[i].value).length!=0 )
					{
						if(charspaceval(trim(els[i].value),minlen,maxlen)!="")
						{
							myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+charspaceval(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
							incr++;
						}
					}
				}
		
				if(valcode=="CSDTWINULL")  /* Done Characters Space and Dot*/
				{
					if(trim(els[i].value).length==0)
					{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ requireValue(trim(els[i].value)) +"\n</td>\n</tr>";
						incr++;
					}
					else if(charspacedotval(trim(els[i].value),minlen,maxlen)!="")			 
					{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+charspacedotval(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
						incr++;
					}		
				}
				if(valcode=="CSDTWONULL")  /* Done Characters Space and Dot*/
				{
					if(trim(els[i].value).length!=0 )
					{
						if(charspacedotval(trim(els[i].value),minlen,maxlen)!="")
						{
							myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+charspacedotval(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
							incr++;
						}
					}
				}
		
				if(valcode=="CSDCWINULL")  /* Done Characters Space Dot and Comma*/
				{
					if(trim(els[i].value).length==0)
					{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ requireValue(trim(els[i].value)) +"\n</td>\n</tr>";
						incr++;
					}
					else if(charspacedotcommaval(trim(els[i].value),minlen,maxlen)!="")			 
					{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+charspacedotcommaval(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
						incr++;
					}		
				}
				if(valcode=="CSDCWONULL")  /* Done Characters Space Dot and Comma */
				{
					if(trim(els[i].value).length!=0 )
					{
						if(charspacedotcommaval(trim(els[i].value),minlen,maxlen)!="")
						{
							myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+charspacedotcommaval(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
							incr++;
						 }
					}
				}
				if(valcode=="WWWAWINULL")  /* Done Only Characters, Numbers And Dot */
				{
					if(trim(els[i].value).length==0)
					{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ requireValue(trim(els[i].value)) +"\n</td>\n</tr>";
						incr++;
					}
					else if(chardotval(trim(els[i].value),minlen,maxlen)!="")
					{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+chardotval(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
						incr++;
					}
				}
				if(valcode=="WWWAWONULL")  /* Done Only Characters, Numbers And Dot */
				{
					if(trim(els[i].value).length!=0)
					{
						if(chardotval(trim(els[i].value),minlen,maxlen)!="")
						{
							myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+chardotval(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
							incr++;
						}
					}
				}
			
				if(valcode=="NUMBWINULL")  /* Done Only Numbers */ 
				{
					if(trim(els[i].value).length==0)
					{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ requireValue(trim(els[i].value)) +"\n</td>\n</tr>";
						incr++;
					}
					else if(onlydigits(trim(els[i].value),minlen,maxlen)!="")
					{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+onlydigits(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
						incr++;	
					}
				}
				if(valcode=="NUMBWONULL")  /* Done Only Numbers */
				{
					if(trim(els[i].value).length!=0)
					{
						if(onlydigits(trim(els[i].value),minlen,maxlen)!="")
						{
							myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+onlydigits(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
							incr++;	
						}
					}
				}

				if(valcode=="FREEWINULL")  /* Free Tex */
				{
					if(trim(els[i].value).length==0)
					{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ requireValue(trim(els[i].value)) +"\n</td>\n</tr>";
						incr++;
					}
					else if(freetext(trim(els[i].value),minlen,maxlen)!="")
					{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+freetext(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
						incr++;
					}
				}
				if(valcode=="FREEWONULL")  /* Free Text */
				{
					if(trim(els[i].value).length!=0)
					{
						if(freetext(trim(els[i].value),minlen,maxlen)!="")
						{
							myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+freetext(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
							incr++;
						}
					}
				}

		
				if(valcode=="PINBWINULL")  /* Done Only Numbers */ 
				{
					if(trim(els[i].value).length==0)
					{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ requireValue(trim(els[i].value)) +"\n</td>\n</tr>";
						incr++;
					}
					else if(pindigits(trim(els[i].value),minlen,maxlen)!="")
					{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+pindigits(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
						incr++;	
					}
				}
				if(valcode=="PINBWONULL")  /* Done Only Numbers */
				{
					if(trim(els[i].value).length!=0)
					{
						if(pindigits(trim(els[i].value),minlen,maxlen)!="")
						{
							myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+pindigits(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
							incr++;	
						}
					}
				}
				if(valcode=="DTNAWINULL")  /* Done Numbers and Dot */
				{
					if(trim(els[i].value).length==0)
					{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ requireValueErr(trim(els[i].value)) +"\n</td>\n</tr>";
						incr++;
					}
					else if(dotnumbval(trim(els[i].value),minlen,maxlen)!="")
					{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+dotnumbval(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
						incr++;	
					}
				}
				if(valcode=="DTNAWONULL")  /* Done Numbers and Dot */
				{
					if(trim(els[i].value).length!=0)
					{
						if(dotnumbval(trim(els[i].value),minlen,maxlen)!="")
						{
							myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+dotnumbval(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
							incr++;	
						}
					}
				}


				if(valcode=="DTNBWINULL")  /* Done Numbers and Dot */
				{
					if(trim(els[i].value).length==0)
					{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ requireValue(trim(els[i].value)) +"\n</td>\n</tr>";
						incr++;
					}
					else if(dotnumbval(trim(els[i].value),minlen,maxlen)!="")
					{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+dotnumbval(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
						incr++;	
					}
					else
					{
						var ret=dtnbchk(trim(els[i].value));
						if(ret!="")
						{	
							myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ret+"\n</td>\n</tr>";
							incr++;
						}
					}			
				}
				if(valcode=="DTNBWONULL")  /* Done Numbers and Dot */
				{
					if(trim(els[i].value).length!=0)
					{
						if(dotnumbval(trim(els[i].value),minlen,maxlen)!="")
						{
							myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+dotnumbval(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
							incr++;	
						}
						else
						{
							var ret=dtnbchk(trim(els[i].value));
							if(ret!="")
							{	
								myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ret+"\n</td>\n</tr>";
								incr++;
							}
						}	
					}
				}

			if(valcode=="DTCNWINULL")  /* Done Numbers and Dot and Comma*/
			{
				if(trim(els[i].value).length==0)
				{
					myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ requireValue(trim(els[i].value)) +"\n</td>\n</tr>";
                    incr++;
				}
		 	    else if(dotcommanumbval(trim(els[i].value),minlen,maxlen)!="")
			    {
			 		myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+dotcommanumbval(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
					incr++;	
			    }
			    else
			    {
					var ret=dtnbchk(trim(els[i].value));
					if(ret!="")
					{	
				 		myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ret+"\n</td>\n</tr>";
						incr++;
					}
			    }			
			}

			if(valcode=="DTCNWONULL")  /* Done Numbers and Dot and Comma*/
			{
				if(trim(els[i].value).length!=0)
                {
					if(dotcommanumbval(trim(els[i].value),minlen,maxlen)!="")
                    {
                		myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+dotcommanumbval(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
                        incr++;	
					}
					else
					{
						var ret=dtnbchk(trim(els[i].value));
						if(ret!="")
						{	
				 			myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ret+"\n</td>\n</tr>";
							incr++;
						}
				    }	
				}
			}


				if(valcode=="NBCLWINULL")  /* Done Numbers and colon */
				{
					if(trim(els[i].value).length==0)
					{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ requireValue(trim(els[i].value)) +"\n</td>\n</tr>";
						incr++;
					}
					else if(colonnumbval(trim(els[i].value),minlen,maxlen)!="")
					{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+colonnumbval(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
						incr++;	
					}
				}
				if(valcode=="NBCLWONULL")  /* Done Numbers and Dot */
				{
					if(trim(els[i].value).length!=0)
					{
						if(colonnumbval(trim(els[i].value),minlen,maxlen)!="")
						{
							myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+colonnumbval(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
							incr++;	
						}
					}
				}

				if(valcode=="HINBWINULL")  /* Done Numbers and Hyphen */
				{
					if(trim(els[i].value).length==0)
					{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ requireValue(trim(els[i].value)) +"\n</td>\n</tr>";
						incr++;
					}
					else if(numbandhypen(trim(els[i].value),minlen,maxlen)!="")
					{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+numbandhypen(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
						incr++;	
					}
				}
				if(valcode=="HINBWONULL")  /* Done Numbers and Hyphen */
				{
					if(trim(els[i].value).length!=0)
					{
						if(numbandhypen(trim(els[i].value))!="")
						{
							myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+numbandhypen(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
							incr++;	
						}
					}
				}
				if(valcode=="CHNBWINULL")  /* Done Characters and Numbers */
				{
					if(trim(els[i].value).length==0)
					{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ requireValue(trim(els[i].value)) +"\n</td>\n</tr>";
						incr++;
					}
					else if(charnumb(trim(els[i].value),minlen,maxlen)!="")
					{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+charnumb(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
						incr++;	
					}
				}
				if(valcode=="CHNBWONULL")  /* Done Characters and Numbers */
				{
					if(trim(els[i].value).length!=0)
					{
						if(charnumb(trim(els[i].value),minlen,maxlen)!="")
						{
							myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+charnumb(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
							incr++;	
						}
					}
				}

	/********************* For Mixing of Characters , Numbers and Some Special Chanracters ****************/

				if(valcode=="CNSPWINULL")  /* Done Characters and Numbers and Some Special Characters*/
				{
					if(trim(els[i].value).length==0)
					{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ requireValue(trim(els[i].value)) +"\n</td>\n</tr>";
						incr++;
					}
					else if(charnumbsomesplchar(trim(els[i].value),minlen,maxlen)!="")
					{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+charnumbsomesplchar(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
						incr++;	
					}
				}
				if(valcode=="CNSPWONULL")  /* Done Characters and Numbers and Some Special Characters */
				{
					if(trim(els[i].value).length!=0)
					{
						if(charnumbsomesplchar(trim(els[i].value),minlen,maxlen)!="")
						{
							myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+charnumbsomesplchar(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
							incr++;	
						}
					}
				}
			
				if(valcode=="USIDWINULL")  /* Done For User-ID */
				{
					if(trim(els[i].value).length==0)
					{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ requireValue(trim(els[i].value)) +"\n</td>\n</tr>";
						incr++;
					}
					else if(userid(trim(els[i].value),minlen,maxlen)!="")
					{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+userid(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
						incr++;	
					}
				}
				if(valcode=="USIDWONULL")  /* Done For User-ID */
				{
					if(trim(els[i].value).length!=0)
					{
						if(userid(trim(els[i].value),minlen,maxlen)!="")
						{
							myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+userid(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
							incr++;	
						}
					}
				}
				if(valcode=="CNHIWINULL")  /* Done Characters Numbers and Hyphen */
				{
					if(trim(els[i].value).length==0)
					{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ requireValue(trim(els[i].value)) +"\n</td>\n</tr>";
						incr++;
					}
					else if(charnumbhyphen(trim(els[i].value),minlen,maxlen)!="")
					{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+charnumbhyphen(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
						incr++;	
					}
				}
				if(valcode=="CNHIWONULL")  /* Done Characters Numbers and Hyphen */
				{
					if(trim(els[i].value).length!=0)
					{
						if(charnumbhyphen(trim(els[i].value),minlen,maxlen)!="")
						{
							myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+charnumbhyphen(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
							incr++;	
						}
					}
				}
				if(valcode=="CNUNWINULL")  /* Done Characters Numbers and Underscore */
				{
					if(trim(els[i].value).length==0)
					{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ requireValue(trim(els[i].value)) +"\n</td>\n</tr>";
						incr++;
					}
					else if(charnumbunderscore(trim(els[i].value),minlen,maxlen)!="")
					{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+charnumbunderscore(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
						incr++;	
					}
				}
				if(valcode=="CNUNWONULL")  /* Done Characters Numbers and Underscore */
				{
					if(trim(els[i].value).length!=0)
					{
						if(charnumbunderscore(trim(els[i].value),minlen,maxlen)!="")
						{
							myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+charnumbunderscore(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
							incr++;	
						}
					}
				}
				if(valcode=="ALPAWINULL")  /* Done Alpha Numeric */
				{
					if(trim(els[i].value).length==0)
					{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ requireValue(trim(els[i].value)) +"\n</td>\n</tr>";
						incr++;
					}
					else if(alphanumericval(trim(els[i].value),minlen,maxlen)!="")
					{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+alphanumericval(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
						incr++;	
					}
				}
				if(valcode=="ALPAWONULL")  /* Done Characters Alpha Numeric */
				{
					if(trim(els[i].value).length!=0)
					{
						if(alphanumericval(trim(els[i].value),minlen,maxlen)!="")
						{
							myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+alphanumericval(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
							incr++;	
						}
					}
				}
		
				if(valcode=="SPCLWINULL")  /* Alpha Numeric and some special charecters retricting % and & */
				{
					if(trim(els[i].value).length==0)
					{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ requireValue(trim(els[i].value)) +"\n</td>\n</tr>";
						incr++;
					}
					else if(alphanumericspclchar(trim(els[i].value),minlen,maxlen)!="")
					{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+alphanumericspclchar(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
						incr++;	
					}
				}
				if(valcode=="SPCLWONULL")  /* Done Characters Alpha Numeric */
				{
					if(trim(els[i].value).length!=0)
					{
						if(alphanumericspclchar(trim(els[i].value),minlen,maxlen)!="")
						{
							myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+alphanumericspclchar(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
							incr++;	
						}
					}
				}


				if(valcode=="ANSCWINULL")  /* Done Alpha Numerics,special characters and spaces */
				{
					if(trim(els[i].value).length==0)
					{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ requireValue(trim(els[i].value)) +"\n</td>\n</tr>";
						incr++;
					}
					else if(alphanumericspechar(trim(els[i].value),minlen,maxlen)!="")
					{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+alphanumericspechar(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
						incr++;
					}
				}
				if(valcode=="ANSCWONULL")  /* Done Alpha Numerics,special characters and spaces */
				{
					if(trim(els[i].value).length!=0)
					{
						if(alphanumericspechar(trim(els[i].value),minlen,maxlen)!="")
						{
							myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+alphanumericspechar(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
							incr++;
						}
					}
				}
				if(valcode=="MAILWINULL")  /* Done Email */
				{
					if(trim(els[i].value).length==0)
					{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ requireValue(trim(els[i].value)) +"\n</td>\n</tr>";
						incr++;
						var idtag=els[i].id;
						var error=requireValue(trim(els[i].value));
						document.getElementById('subscribemessage').innerHTML = "At "+idtag+""+error;
					}
					else if(mailval(trim(els[i].value),minlen,maxlen)!="")
					{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+mailval(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
						incr++;	
						var idtag=els[i].id;
						var error=requireValue(trim(els[i].value));
						document.getElementById('subscribemessage').innerHTML = "At "+idtag+""+error;
					}
				}
				if(valcode=="MAILWONULL")  /* Done Email */
				{
					if(trim(els[i].value).length!=0)
					{
						if(mailval(trim(els[i].value),minlen,maxlen)!="")
						{
							myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+mailval(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
							incr++;	
						}
					}
				}
			
				if(valcode=="DATEWINULL")
				{
					if(trim(els[i].value).length==0)
					{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ requireValue(trim(els[i].value)) +"\n</td>\n</tr>";
						incr++;
					}
					else if(dateval(trim(els[i].value),minlen,maxlen)!="")
					{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+dateval(trim(els[i].value),minlen,maxlen),minlen,maxlen+"\n</td>\n</tr>";
						incr++;	
					}
				}
				if(valcode=="DATEWONULL")
				{
					if(trim(els[i].value).length!=0)
					{
						if(dateval(trim(els[i].value),minlen,maxlen)!="")
						{
							myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+dateval(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
							incr++;	
						}
					}
				}
				if(valcode=="CRDTWINULL")
				{
					if(trim(els[i].value).length==0)
					{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ requireValue(trim(els[i].value)) +"\n</td>\n</tr>";
						incr++;
					}
					else if(currdateval(trim(els[i].value),minlen,maxlen)!="")
					{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+currdateval(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
						incr++;	
					}
				}
				if(valcode=="CRDTWONULL")
				{
					if(trim(els[i].value).length!=0)
					{
						if(currdateval(trim(els[i].value),minlen,maxlen)!="")
						{
							myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+currdateval(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
							incr++;	
						}
					}
				}
			
			
				if(valcode=="FRDTWINULL")
				{
					if(trim(els[i].value).length==0)
					{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ requireValue(trim(els[i].value)) +"\n</td>\n</tr>";
						incr++;
					}
					else if(futdateval(trim(els[i].value),minlen,maxlen)!="")
					{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+futdateval(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
						incr++;	
					}
				}
				if(valcode=="FRDTWONULL")
				{
					if(trim(els[i].value).length!=0)
					{
						if(futdateval(trim(els[i].value),minlen,maxlen)!="")
						{
							myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+futdateval(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
							incr++;	
						}
					}
				}
			
				if(valcode=="CRNDWINULL")
				{
					if(trim(els[i].value).length==0)
					{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+ requireValue(trim(els[i].value)) +"\n</td>\n</tr>";
						incr++;
					}
					else if(crtdateval(trim(els[i].value),minlen,maxlen)!="")
					{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+crtdateval(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
						incr++;	
					}
				}
				if(valcode=="CRNDWONULL")
				{
					if(trim(els[i].value).length!=0)
					{
						if(crtdateval(trim(els[i].value),minlen,maxlen)!="")
						{
							myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".select()' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>:"+crtdateval(trim(els[i].value),minlen,maxlen)+"\n</td>\n</tr>";
							incr++;	
						}
					}
				}
				if(valcode=="CHCKWINULL")
				{
					if(!(els[i].checked))
					{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".checked=\"true\"' style='cursor:hand'>\n<td style='"+sty1+"'>\nAt "+els[i].id+" \n</font>\n</td>\n<td style='"+sty2+"'>: To be Selected\n</td>\n</tr>";
						incr++;	
					}
				}		 
				if(valcode=="RADIWINULL")
				{
					if(els[i].name=="ACCEPT_OR_REJECT" && (!(els[i].checked)))
					{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".checked=\"true\"' style='cursor:hand'>\n<td >\n<font style='color:blue;font-weight:bold;font-size:11;font-family:arial;'>\nAt "+els[i].id+" \n</font>\n</td>\n<td>: To be Selected\n</td>\n</tr>";
						incr++;
					}
					if(els[i].name=="CARD_RETAINED" && (!(els[i].checked)))
					{
						myarray[incr]="\n<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+els[i].name+".checked=\"true\"' style='cursor:hand'>\n<td >\n<font style='color:blue;font-weight:bold;font-size:11;font-family:arial;'>\nAt "+els[i].id+" \n</font>\n</td>\n<td>: To be Selected\n</td>\n</tr>";
						incr++;
					}
				}
				
				
				
			}    
		}
	}
	
	/*******************Final String Preparing Here***********************/     
		
	if(myarray.length!=0)
	{
		str="<table align=center cellpadding=0 cellspacing=0 class='errorarea'>\n";
		for(var i=0;i<myarray.length;i++)
		{
			str+=myarray[i];   
		}
		str+="\n</table>";
	}
	else
	{
		str="";
		for(var k=0;k<selArray.length;k++)
		{
			document.getElementsByName(selArray[k])[0].value="";
		}	
	}

  return(str);
}////////////////// End Of The formNames2() Function 

 
/***********************Checking For Empty String******************************/

function requireValue(fld)
{
	if(fld.length==0)
	{
		return (" The Field Cannot Be Left Blank");
	}
	else
	{
		return ("");
	}
}




/******************* Select Box ************************/

function seltype(fld)
{
	if(fld=="NO_DATA" || fld=="" || fld=="select")
	{
		return ("Any One Of The Value has to be Selected");
	}
	else
	{
		return ("");
	}
}




/******************* Only Characters ************************/

function charval(str,minlen,maxlen)
{
	

	if (str.length< minlen)
	{
		if(minlen==maxlen)
			return ( "Data Should Be Equal to "+parseInt(minlen,10) );
		else
			return("The Data Should Be Greater Than Or Equal To "+parseInt(minlen,10));
	}
	else if (str.length>maxlen)
	{
		return("The Data Should Be Less Than Or Equal To "+ parseInt(maxlen,10));
	}
	else 
	{
		var re=/^[a-z]+$/gi;
		//if(!(re.test(str)))
              if(!(str.match(re)))
		{
			return ("Only Character Data is Allowed");
		}
		else
		{
			return ("");
		}
	}
}




/******************* Only Characters And Spaces ************************/

function charspaceval(str,minlen,maxlen)
{
	var str1,i; 
	if (str.length< minlen)
	{
		return(" The Data Should Be Greater Than Or Equal To "+parseInt(minlen,10));
	}
	else if (str.length>maxlen)
	{
		return(" The Data Should Be Less Than Or Equal To "+ parseInt(maxlen,10));
	}
	else 
	{
		var re=/^[a-z ]+$/gi;		
              if(!(str.match(re)))
		{
			str1=" Only Characters And Spaces Are Allowed";
		}
		else 
		{
			str1="";
		}
		for(i=0;i<str.length-1;i++)
		{
	   		if(str.charAt(i)==' ' && str.charAt(i+1)==' ')
			{
				str1=" Too many spaces are not allowed";
				break;
			}
		}						  
	}
	return str1;
}




/******************* Only Characters , Spaces And Dot************************/

function charspacedotval(str,minlen,maxlen)
{
	if (str.length< minlen)
	{
		return("The Data Should Be Greater Than Or Equal To "+parseInt(minlen,10));
	}
	else if (str.length>maxlen)
	{
		return("The Data Should Be Less Than Or Equal To "+ parseInt(maxlen,10));
	}
	else 
	{
		var re=/^[a-z. ]+$/gi;
		if(!(re.test(str)))
		{
			str1="Only Characters , Spaces And Dots Are Allowed";
		}
		else
		{
			str1="";
		}
		for(i=0;i<str.length-1;i++)
		{
	   		if(str.charAt(i)==' ' && str.charAt(i+1)==' ')
			{
				str1="Too many spaces are not allowed";
				break;
			}
		}						  
	}
	return str1;
}




/******************* Only Characters, Spaces, Dot And Comma************************/

function charspacedotcommaval(str,minlen,maxlen)
{
	if (str.length< minlen)
	{
		return("The Data Should Be Greater Than Or Equal To "+parseInt(minlen,10));
	}
	else if (str.length>maxlen)
	{
		return("The Data Should Be Less Than Or Equal To "+ parseInt(maxlen,10));
	}
	else 
	{
		var re=/^[a-z.,' ]+$/gi;
		if(!(re.test(str)))
		{
			return ("Only Characters, Spaces , Dots And Comma Are Allowed");
		}
		else
		{
			return ("");
		}
	}
}




/******************* Only Numbers ************************/

function onlydigits(value_str,minlen,maxlen)
{
	if (value_str.length<minlen)
	{
		if(minlen==maxlen)
			return ( "Data Should Be Equal to "+parseInt(minlen,10) );
		else
			return("The Data Should Be Greater Than Or Equal To "+parseInt(minlen,10));
	}
	else if (value_str.length>maxlen)
	{
		return("The Data Should Be Less Than Or Equal To "+parseInt(maxlen,10));
	}
	else 
	{
		var re=/^[0-9]+$/;	
		if(value_str.match(re))
		{
			if(value_str.length>1)
			{
				var dig=parseInt(value_str,10);
				if(dig<=0)
				{
					return("All Zeros Are Not Allowed");
				}
				else
				{
					return("");
				}
			}
			
			return(""); 
		}
		else
		{
			return("Other Than Numbers Are Not Allowed");
		}
	}
}


/******************* Only Numbers, accept all zeros also ************************/

function onlynumbers(value_str,minlen,maxlen)
{
	if (value_str.length<minlen)
	{
		return("The Data Should Be Greater Than Or Equal To "+parseInt(minlen,10));
	}
	else if (value_str.length>maxlen)
	{
		return("The Data Should Be Less Than Or Equal To "+parseInt(maxlen,10));
	}
	else 
	{
		var re=/^[0-9]+$/;	
		if(value_str.match(re))
		{
			return(""); 		
		}
		else
		{
			return("Other Than Numbers Are Not Allowed");
		}
	}
}

function onlycardnumbers(value_str,minlen,maxlen)
{
	if (value_str.length<minlen)  
	{
	
		return("The Data Should Be Equal To "+parseInt(minlen,10));
	}
	else if (value_str.length>minlen && value_str.length!=maxlen)
	{
	
		return("The Data Should Be Equal To "+parseInt(minlen,10));
	}
	else 
	{
		var re=/^[0-9]+$/;	
		if(value_str.match(re))
		{
			return(""); 
		}
		else
		{
			return("Other Than Numbers Are Not Allowed");
		}
	}
}

/******************* Only Numbers (PIN Code)************************/

function pindigits(value_str,minlen,maxlen)
{
	if (value_str.length<minlen)
	{
		return("The Data Should Be Equal To "+parseInt(minlen,10));
	}
	else if (value_str.length>maxlen)
	{
		return("The Data Should Be Equal To "+ parseInt(maxlen,10));
	}
	else 
	{
		var re=/^[0-9]+$/;	
		if(value_str.match(re))
		{
			if(value_str.length>1)
			{
				var dig=parseInt(value_str,10);
				if(dig<=0)
				{
					return("All Zeros Are Not Allowed");
				}
				else
				{
					return("");
				}
			}
			return(""); 
		}
		else
		{
			return("Other Than Numbers Are Not Allowed");
		}
	}
}




/******************* Only Numbers And Dot ************************/

function dotnumbval(value_str,minlen,maxlen)
{
	if (value_str.length<minlen)
	{
		return("The Data Should Be Greater Than Or Equal To "+parseInt(minlen,10));
	}
	else if (value_str.length>maxlen)
	{
		return("The Data Should Be Less Than Or Equal To "+ parseInt(maxlen,10));
	}
	else 
	{
		var re=/^[0-9.]+$/;
		if(value_str.match(re))
		{
			var fst=value_str.substring(0,value_str.indexOf("."));
			var lst=value_str.substring(value_str.indexOf(".")+1);
			var repstr = value_str.replace(/[\.]/g, '');
			var dig=parseInt(repstr,10);
			var dec=lst.indexOf(".");
	   
			if(dig<=0)
			{
				return("All Zeros Are Not Allowed");
			}
			else if(dec!="-1")
			{
				return("Please Enter Valid Amount");
			}  
			else
			{
				if(parseInt(fst,10)<=0 && fst.length>=2)
				{
					return("Only One Zero Is Allowed Before Decimal");
				}
				if(fst!="")
				{
					//if(!(lst.length==4 || lst.length==2))
					//if(lst.length>=5)
					if(lst.length>=5 || lst.length<2 || lst.length==3)
					{
						return("Only Two Or Four Digits Are Allowed After Decimal");
					}
				}
				return("");
			}
		}
		else
		{
			return("Other Than Numbers And Dot Are Not Allowed");
		}
	}
}


/******************* Only Numbers And Dot And Comma************************/

function dotcommanumbval(value_str,minlen,maxlen)
{
	if (value_str.length<minlen)
	{
		return("The Data Should Be Greater Than Or Equal To "+parseInt(minlen,10));
	}
	else if (value_str.length>maxlen)
	{
		return("The Data Should Be Less Than Or Equal To "+ parseInt(maxlen,10));
	}
	else 
	{
		var re=/^[0-9.,]+$/;
		if(value_str.match(re))
		{
			var fst=value_str.substring(0,value_str.indexOf("."));
			var lst=value_str.substring(value_str.indexOf(".")+1);
			var repstr = value_str.replace(/[\.]/g, '');
			var dig=parseInt(repstr,10);
			var dec=lst.indexOf(".");
	  
			var fst1=value_str.substring(0,value_str.indexOf(","));
			var lst1=value_str.substring(value_str.indexOf(",")+1);
			var repstr1 = value_str.replace(/[\,]/g, '');
			var dig1=parseInt(repstr1,10);
			var dec1=lst1.indexOf(",");
	   

			/****Dot Validation Starting***/
			if(dig<=0)
			{
				return("");
			}
			else if(dec!="-1")
			{
				return("Please Enter Valid Amount");
			}  
			else
			{
				if(parseInt(fst,10)<=0 && fst.length>=2)
				{
					return("Only One Zero Is Allowed Before Decimal");
				}
				if(fst!="")
				{
					if(lst.length>=5)
					{
						return("Only Four Digits Are Allowed After Decimal");
					}
				}
				return("");
			}
			/****Dot Validation Ending***/


			/****Comma Validation Starting***/
			if(dig<=0)
			{
				return("");
			}
			else if(dec!="-1")
			{
				return("Please Enter Valid Amount");
			}  
			/****Comma Validation Ending***/
		}
		else
		{
			return("Other Than Numbers,Dot And Comma Are Not Allowed");
		}
	}
}



/******************* Only Numbers And Hyphen ************************/

function numbandhypen(value_str,minlen,maxlen)
{
	if (value_str.length<minlen)
	{
		return("The Data Should Be Greater Than Or Equal To "+parseInt(minlen,10));
	}
	else if (value_str.length>maxlen)
	{
		return("The Data Should Be Less Than Or Equal To "+ parseInt(maxlen,10));
	}
	else 
	{
		var re=/^[0-9-]+$/;
		if(value_str.match(re))
		{
			var repstr = value_str.replace(/[\.]/g, '');
			var dig=parseInt(repstr,10);
			if(dig<=0)
			{
				return("All Zeros Are Not Allowed");
			}
			return("");
		}
		else
		{
			return("Other Than Numbers And Hyphen Are Not Allowed");
		}
	}
}



/******************* Only Characters And Numbers ************************/

function charnumb(value_str,minlen,maxlen)
{
	if(value_str.length<minlen)
	{
		if(minlen==maxlen)
			return ( "Data Should Be Equal to "+parseInt(minlen,10) );
		else
			return("The Data Should Be Greater Than Or Equal To "+parseInt(minlen,10));
	}
	else if (value_str.length>maxlen)
	{
		return("The Data Should Be Less Than Or Equal To "+ parseInt(maxlen,10));
	}
	else 
	{
		var re=/^[0-9a-zA-Z]+$/;
		if(value_str==0)
		{
			return("All Zeroes Are Not Allowed");
		}
		else if(value_str.match(re))
		{
			return("");
		}
		else
		{
			return("Only Characters And Numbers Are Allowed.");
		}
	}
}

/******************* Only Characters And Numbers and Spaces************************/

function charnumbspace(value_str,minlen,maxlen)
{
	if(value_str.length<minlen)
	{
		if(minlen==maxlen)
			return ( "Data Should Be Equal to "+parseInt(minlen,10) );
		else
			return("The Data Should Be Greater Than Or Equal To "+parseInt(minlen,10));
	}
	else if (value_str.length>maxlen)
	{
		return("The Data Should Be Less Than Or Equal To "+ parseInt(maxlen,10));
	}
	else 
	{
		var re=/^[0-9a-zA-Z ]+$/;
		if(value_str.match(re))
		{
			return("");
		}
		else
		{
			return("Only Characters,Numbers And Spaces Are Allowed.");
		}
	}
}




/******************* Only Characters And Numbers And Hyphen************************/

function charnumbhyphen(value_str,minlen,maxlen)
{
	if(value_str.length<minlen)
	{
		return("The Data Should Be Greater Than Or Equal To "+parseInt(minlen,10));
	}
	else if(value_str.length>maxlen)
	{
		return("The Data Should Be Less Than Or Equal To "+ parseInt(maxlen,10));
	}
	else 
	{
		var re=/^[0-9a-zA-Z-]+$/;
		if(value_str.match(re))
		{
			var nbre=/^[0-9-]+$/;
			if(value_str.match(nbre))
			{
				var repstr = value_str.replace(/[\.]/g, '');
				var dig=parseInt(repstr,10);
				if(dig<=0)
					return("All Zeros Are Not Allowed");
			}
			else
				return("");
		}
		else
		{
			return("Other Than Characters , Numbers And Hyphen Are Not Allowed");
		}
	}
}




/******************* Only Characters And Numbers And Underscore************************/

function charnumbunderscore(value_str,minlen,maxlen)
{
	if(value_str.length<minlen)
	{
		return("The Data Should Be Greater Than Or Equal To "+parseInt(minlen,10));
	}
	else if (value_str.length>maxlen)
	{
		return("The Data Should Be Less Than Or Equal To "+ parseInt(maxlen,10));
	}
	else 
	{
		var re=/^[0-9a-zA-Z_]+$/;
		if(value_str.match(re))
		{
			var nbre=/^[0-9_]+$/;
			if(value_str.match(nbre))
			{
				var repstr = value_str.replace(/[\.]/g, '');
				var dig=parseInt(repstr,10);
				if(dig<=0)
					return("All Zeros Are Not Allowed");
			}
			else
				return("");
		}
		else
		{
			return("Other Than Characters , Numbers And Underscore Are Not Allowed");
		}
   }
}






/******************* Only Characters And Numbers(For User ID) ************************/
 
function userid(value_str,minlen,maxlen)
{
	if (value_str.length<minlen)
	{
		if(minlen==maxlen)
			return ( "Data Should Be Equal to "+parseInt(minlen,10) );
		else
			return("The Data Should Be Greater Than Or Equal To "+parseInt(minlen,10));
	}
	else if (value_str.length>maxlen)
	{
		return("The Data Should Be Less Than Or Equal To "+ parseInt(maxlen,10));
	}
	else 
	{
		var re=/^[0-9a-zA-Z]+$/;
		if(value_str.match(re))
		{
			var nbre=/^[0-9]+$/;	
			if(value_str.match(nbre))
			{
				return("");
				if(parseInt(value_str,10)<=0)
					return("All Zeros Are Not Allowed");
			}
			else
				return("");
		}
		else
		{
			return("Other Than Charcters And Numbers Are Not Allowed");
		}
	}
}



/******************* AlphaNumeric ************************/

function alphanumericval(value_str,minlen,maxlen)
{
	var str2,i;
	if (value_str.length<minlen)
	{
		if(minlen==maxlen)
			return ( "Data Should Be Equal to "+parseInt(minlen,10) );
		else
			return("The Data Should Be Greater Than Or Equal To "+parseInt(minlen,10));
	}
	else if (value_str.length>maxlen)
	{
		return("The Data Should Be Less Than Or Equal To "+ parseInt(maxlen,10));
	}
	else 
	{
		//var re=/[0-9a-zA-Z_,.-/':@]$/;
		var re=/[0-9a-zA-Z_/@#,(). ]$/; 

		if(!(re.test(value_str)))
		{
			str2="Some Of The Special Characters Are Not Allowed";
		}
		else if(value_str==0)
		{
			return("All Zeroes Are Not Allowed");
		}
		else
		{
			str2="";
		}
	
		for(i=0;i<value_str.length-1;i++)
		{
	   		if(value_str.charAt(i)==' ' && value_str.charAt(i+1)==' ')
			{
				  str2="Too many spaces are not allowed";
				  break;
		    }
		}						  
	}
	return str2;
}




/******************* Email************************/

function mailval(value_str,minlen,maxlen)
{
	if (value_str.length<minlen)
	{
		return("The Data Should Be Greater Than Or Equal To "+parseInt(minlen,10));
	}
	else if (value_str.length>maxlen)
	{
		return("The Data Should Be Less Than Or Equal To "+ parseInt(maxlen,10));
	}
	else 
	{
		var supported = 0;	
	  	if (window.RegExp)
	    {
			var tempStr = "a";
			var tempReg = new RegExp(tempStr);
			if (tempReg.test(tempStr))
				supported = 1;
		}
	    if (!supported) 
			return (str.indexOf(".") > 2) && (str.indexOf("@") > 0);
	    var r1 = new RegExp("(@.*@)|(\\.\\.)|(@\\.)|(^\\.)");
	    //var r2 = new RegExp("^.+\\@(\\[?)[a-zA-Z0-9\\-\\.]+\\.([a-zA-Z]{2,3}|[0-9]{1,3})(\\]?)$");
           var r2 = new RegExp("^[a-zA-Z0-9\\-\\.\\_]+\\@(\\[?)[a-zA-Z0-9\\-\\.\\_]+\\.([a-zA-Z]{2,3})$");
	    var flag= (!r1.test(value_str) && r2.test(value_str));
	    if (flag==false)
	    {
	      return ("Please Enter A Valid Email Address");
	    }
	    else
	    {
	     return ("");
	   }
   }
}




/******************* Date Validation ************************/
function dateval(value_str,minlen,maxlen)
{
	if (value_str.length<minlen)
	{
		return("The Data Should Be Greater Than Or Equal To "+parseInt(minlen,10));
	}
	else if (value_str.length>maxlen)
	{
		return("The Data Should Be Less Than Or Equal To "+ parseInt(maxlen,10));
	}
	else 
	{
		var objRegExp = /^\d{1,2}(\-|\/|\.)\d{1,2}\1\d{4}$/
		//check to see if in correct format
		if(!objRegExp.test(value_str))
			return("Please Enter A Valid Date Format"); //doesn't match pattern, bad date
		else
		{
			var strSeparator = value_str.substring(2,3) //find date separator
			var arrayDate = value_str.split(strSeparator); //split date into month, day, year
			//create a lookup for months not equal to Feb.
			var arrayLookup = { '01' : 31,'03' : 31, '04' : 30,'05' : 31,'06' : 30,'07' : 31,
                        '08' : 31,'09' : 30,'10' : 31,'11' : 30,'12' : 31}
    		var intDay = arrayDate[0];
			var intMonth = arrayDate[1];
			var intYear = arrayDate[2];
			if(intYear<1900)
			{
				return("Please enter A Valid Date");
			}

		    //check if month value and day value agree
			if(arrayLookup[arrayDate[1]] != null) 
			{	
				if(intDay <= arrayLookup[arrayDate[1]] && intDay != 0)
					return (""); //found in lookup table, good date
			}
 
			if (intMonth=="02")
			{
				if(((intYear % 4 == 0 && intDay <= 29) || (intYear % 4 != 0 && intDay <=28)) && intDay !=0)
					return (""); //Feb. had valid number of days
			}
		}
		return ("Please Enter A Valid Date"); //any other values, bad date
	}
}


/*******************Date and Time **********************************/

function datetimeval(value_str,minlen,maxlen)
{
	if (value_str.length<minlen)
	{
		return("The Data Should Be Greater Than Or Equal To "+parseInt(minlen,10));
	}
	else if (value_str.length>maxlen)
	{
		return("The Data Should Be Less Than Or Equal To "+ parseInt(maxlen,10));
	}
	else 
	{
		var objRegExp = /^\d{1,2}(\-|\/|\.)\d{1,2}\1\d{4}(\ |\/|\:)\d{1,2}(\ |\/|\:)\d{1,2}$/
		//check to see if in correct format
		if(!objRegExp.test(value_str))
			return("Please Enter A Valid Date and Time Format"); //doesn't match pattern, bad date
		else
		{
			var strSeparator = value_str.substring(2,3) //find date separator
			var arrayDate = value_str.split(strSeparator); //split date into month, day, year
			//create a lookup for months not equal to Feb.
			var arrayLookup = { '01' : 31,'03' : 31, '04' : 30,'05' : 31,'06' : 30,'07' : 31,
                        '08' : 31,'09' : 30,'10' : 31,'11' : 30,'12' : 31}
    		var intDay = arrayDate[0];
			var intMonth = arrayDate[1];
			var intYear = arrayDate[2];
			if(intYear<1900)
			{
				return("Please enter A Valid Date and Time");
			}

		    //check if month value and day value agree
			if(arrayLookup[arrayDate[1]] != null) 
			{	
				if(intDay <= arrayLookup[arrayDate[1]] && intDay != 0)
					return (""); //found in lookup table, good date
			}
 
			if (intMonth=="02")
			{
				if(((intYear % 4 == 0 && intDay <= 29) || (intYear % 4 != 0 && intDay <=28)) && intDay !=0)
					return (""); //Feb. had valid number of days
			}
		}
		return ("Please Enter A Valid Date and Time"); //any other values, bad date
	}
}




/******************* Current Date Validation ************************/

function currdateval(value_str,minlen,maxlen)
{
	if (value_str.length<minlen)
	{
		return("The Data Should Be Greater Than Or Equal To "+parseInt(minlen,10));
	}
	else if (value_str.length>maxlen)
	{
		return("The Data Should Be Less Than Or Equal To "+parseInt(maxlen,10));
	}
	else 
	{
		var objRegExp = /^\d{1,2}(\-|\/|\.)\d{1,2}\1\d{4}$/;
		if(!objRegExp.test(value_str))
		{
			return("Please Enter A Valid Date Format"); //doesn't match pattern, bad date
		}
		else
		{
			var strSeparator = value_str.substring(2,3) //find date separator
			var arrayDate = value_str.split(strSeparator); //split date into month, day, year
			//create a lookup for months not equal to Feb.
			var arrayLookup = { '01' : 31,'03' : 31, '04' : 30,'05' : 31,'06' : 30,'07' : 31,'08' : 31,'09' : 30,'10' : 31,'11' : 30,'12' : 31}
			
			var intDay = arrayDate[0];
			var intMonth = arrayDate[1];
			var intYear = arrayDate[2];
			if(intYear<1900)
			{
				return ("Please Enter A Valid Date");
			}

			if (intMonth=="02")
			{  
				if(((intYear % 4 == 0 && intDay <= 29) || (intYear % 4 != 0 && intDay <=28)) && intDay !=0)
				{
					var st=value_str;
					var dd=st.substr(0,2);
					var mm=st.substr(3,2);
					var yyyy=st.substr(6,4);
					var orgdt=mm+"-"+dd+"-"+yyyy;
					var reldt=new Date(orgdt);
		  
					var currdat=new Date();

					var currdt=new Date();
					if(reldt>currdt)
					{
		   
		   				return("Entered Date Should Be Less Than Or Equal To Current Date");
					}	
					
			
				}
				else
				{
					return ("Please Enter A Valid Date");
				}
				return("");	
			}

			if(arrayLookup[arrayDate[1]] != null)  //check if month value and day value agree 
			{ 
				if(intDay <= arrayLookup[arrayDate[1]] && intDay != 0)
				{
					var st=value_str;
					var dd=st.substr(0,2);
					var mm=st.substr(3,2);
					var yyyy=st.substr(6,4);
					var orgdt=mm+"-"+dd+"-"+yyyy;
					var reldt=new Date(orgdt);
		  
					var currdat=new Date();
					var crdd=currdat.getDate();
					var crmm=currdat.getMonth();
					crmm=crmm+1;
					var cryyyy=currdat.getYear();
					var cdt=crmm+"-"+crdd+"-"+cryyyy;
					var currdt=new Date(cdt);
					if(reldt>currdt)					
						return("Entered Date Should Be Less Than Or Equal To Current Date");
				
					
				}
				else
				{
		  			return ("Please Enter A Valid Date");
				}
		 		return (""); //found in lookup table, good date
			}
			else
			{	  
				return ("Please Enter A Valid Date");
			}
		}
	}  
}




/******************* Future Date Validation ************************/

function futdateval(value_str,minlen,maxlen)
{
	if (value_str.length<minlen)
	{
		return("The Data Should Be Greater Than Or Equal To "+parseInt(minlen,10));
	}
	else if (value_str.length>maxlen)
	{
		return("The Data Should Be Less Than Or Equal To "+parseInt(maxlen,10));
	}
	else 
	{
		var objRegExp = /^\d{1,2}(\-|\/|\.)\d{1,2}\1\d{4}$/
		//check to see if in correct format
		if(!objRegExp.test(value_str))
		{    
			return("Please Enter A Valid Date Format"); //doesn't match pattern, bad date
		}
		else
		{
			var strSeparator = value_str.substring(2,3) //find date separator
			var arrayDate = value_str.split(strSeparator); //split date into month, day, year
			//create a lookup for months not equal to Feb.
			var arrayLookup = { '01' : 31,'03' : 31, '04' : 30,'05' : 31,'06' : 30,'07' : 31,
                        '08' : 31,'09' : 30,'10' : 31,'11' : 30,'12' : 31}
						
			var intDay =arrayDate[0];
			var intMonth =arrayDate[1];
			var intYear =arrayDate[2];
			if(intYear<1900)
			{
				return ("Please Enter A Valid Date");
			}
			if (intMonth=="02")
			{  
				if(((intYear % 4 == 0 && intDay <= 29) || (intYear % 4 != 0 && intDay <=28)) && intDay !=0)
				{
		  
					var st=value_str;
					var dd=st.substr(0,2);
					var mm=st.substr(3,2);
					var yyyy=st.substr(6,4);
					var orgdt=mm+"-"+dd+"-"+yyyy;
					var reldt=new Date(orgdt);
		  
					var currdat=new Date();
					var crdd=currdat.getDate();
					var crmm=currdat.getMonth();
					crmm=crmm+1;
					var cryyyy=currdat.getYear();
					var cdt=crmm+"-"+crdd+"-"+cryyyy;
					var currdt=new Date(cdt);
					
					if(reldt<currdt)
					{
						return("Entered Date Should Be Greater Than Or Equal To Current Date");
					}
			
				}
				else
				{
					return ("Please Enter A Valid Date");
				}
				return("");	
			}
			if(arrayLookup[arrayDate[1]] != null)  //check if month value and day value agree 
			{ 
				if(intDay <= arrayLookup[arrayDate[1]] && intDay != 0)
				{
					var st=value_str;
					var dd=st.substr(0,2);
					var mm=st.substr(3,2);
					var yyyy=st.substr(6,4);
					var orgdt=mm+"-"+dd+"-"+yyyy;
					var reldt=new Date(orgdt);
		  
					var currdat=new Date();
					var crdd=currdat.getDate();
					var crmm=currdat.getMonth();
					crmm=crmm+1;
					var cryyyy=currdat.getYear();
					var cdt=crmm+"-"+crdd+"-"+cryyyy;
					var currdt=new Date(cdt);
					
					if(reldt<currdt)
						return("Entered Date Should Be Greater Than Or Equal To Current Date");
				}
				else
				{
		 
	   				return ("Please Enter A Valid Date");
				}
		 
				return (""); //found in lookup table, good date
			}
			else
			{  
				return ("Please Enter A Valid Date");
			}
		}
	}  
}




/******************* Only Current Date Validation ************************/

function crtdateval(value_str,minlen,maxlen)
{
	if (value_str.length<minlen)
	{
		return("The Data Should Be Greater Than Or Equal To "+parseInt(minlen,10));
	}
	else if (value_str.length>maxlen)
	{
		return("The Data Should Be Less Than Or Equal To "+parseInt(maxlen,10));
	}
	else 
	{
		var objRegExp = /^\d{1,2}(\-|\/|\.)\d{1,2}\1\d{4}$/
		//check to see if in correct format
		if(!objRegExp.test(value_str))
		{		
			return("Please Enter A Valid Date Format"); //doesn't match pattern, bad date
		}
		else
		{

			var strSeparator = value_str.substring(2,3) //find date separator
			var arrayDate = value_str.split(strSeparator); //split date into month, day, year
			//create a lookup for months not equal to Feb.
			var arrayLookup = { '01' : 31,'03' : 31, '04' : 30,'05' : 31,'06' : 30,'07' : 31,
                        '08' : 31,'09' : 30,'10' : 31,'11' : 30,'12' : 31}
						
			var intDay = arrayDate[0];
			var intMonth = arrayDate[1];
			var intYear = arrayDate[2];
			if(intYear<1900)
			{
				return ("Please Enter A Valid Date");
			}
			if (intMonth=="02")
			{  
				if(((intYear % 4 == 0 && intDay <= 29) || (intYear % 4 != 0 && intDay <=28)) && intDay !=0)
				{
		  
					var st=value_str;
					var dd=st.substr(0,2);
					var mm=st.substr(3,2);
					var yyyy=st.substr(6,4);
					var orgdt=mm+"-"+dd+"-"+yyyy;
					var reldt=new Date(orgdt);
					var currdt=new Date();
					if(reldt!=currdt)
					{
		   
		   				return("Entered Date Should Be Equal To Current Date");
					}
		
				}
				else
				{
					return ("Please Enter A Valid Date");
				}
				return("");	
			}
			if(arrayLookup[arrayDate[1]] != null)  //check if month value and day value agree 
			{ 
				if(intDay <= arrayLookup[arrayDate[1]] && intDay != 0)
				{
					var st=value_str;
					var dd=st.substr(0,2);
					var mm=st.substr(3,2);
					var yyyy=st.substr(6,4);
					var orgdt=mm+"-"+dd+"-"+yyyy;
					var reldt=new Date(orgdt);
		  
					var currdat=new Date();
					var crdd=currdat.getDate();
					var crmm=currdat.getMonth();
					crmm=crmm+1;
					var cryyyy=currdat.getYear();
					var cdt=crmm+"-"+crdd+"-"+cryyyy;
					var currdt=new Date(cdt);
					if(reldt!=currdt)
					{
		    
						return("Entered Date Should Be  Equal To Current Date");}
					}
					else
					{
		 
	   					return ("Please Enter A Valid Date");
					}
		 
					return (""); //found in lookup table, good date
				}
				else
				{  
					return ("Please Enter A Valid Date");
				}
			}
		}  
 
}



/**************************Function To trim the String*****************/
function trim(Str) {
	
 var objRegExp = /^(\s*)$/;

    //check for all spaces
    if(objRegExp.test(Str)) {
       Str = Str.replace(objRegExp, '');
       if( Str.length == 0)
          return Str;
    }

   //check for leading & trailing spaces
   objRegExp = /^(\s*)([\W\w]*)(\b\s*$)/;
   if(objRegExp.test(Str)) {
       //remove leading and trailing whitespace characters
      Str = Str.replace(objRegExp, '$2');
	
    }
  return Str;
}



/**************************Conversion Of Date******************/
function ddmmyyyy(str)
{
	if (str!="" && str.length==8)
	{
		var dd=str.substr(0,2);
		var mm=str.substr(2,2);
		var yyyy=str.substr(4,4);
		return(dd+"-"+mm+"-"+yyyy);
	}
	else if (str!="" && str.length==10)
	{
		var dd=str.substr(0,2);
		var mm=str.substr(3,2);
		var yyyy=str.substr(6,4);
		return(dd+"-"+mm+"-"+yyyy);
	}
	else
		return("");
}


function ddmmyyyydt(str)
{
	if (str!="" && str.length==8)
	{
		var dd=str.substr(0,2);
		var mm=str.substr(2,2);
		var yyyy=str.substr(4,4);
		return(dd+"."+mm+"."+yyyy);
	}
	else if (str!="" && str.length==10)
	{
		var dd=str.substr(0,2);
		var mm=str.substr(3,2);
		var yyyy=str.substr(6,4);
		return(dd+"."+mm+"."+yyyy);
	}
	else
		return("");
}


function ddmmyyyysl(str)
{
	if (str!="" && str.length==8)
	{
		var dd=str.substr(0,2);
		var mm=str.substr(2,2);
		var yyyy=str.substr(4,4);
		return(dd+"/"+mm+"/"+yyyy);
	}
	else if (str!="" && str.length==10)
	{
		var dd=str.substr(0,2);
		var mm=str.substr(3,2);
		var yyyy=str.substr(6,4);
		return(dd+"/"+mm+"/"+yyyy);
	}
	else
		return("");
}


function dtnbchk(val)
{
	var str="";
      
    if(val.indexOf(".")!=-1 )
    {
		if(val=="." ||val=="-" || val.indexOf("-")+1==val.indexOf("."))
        {
			str="Not A Valid Number Format";
        }
	}
    if(val=="-")
    {
		str="Not A Valid Number Format";
	}
	return (str);
}



/******************* Free Text ************************/

function freetext(value_str,minlen,maxlen)
{
	var str2,i;
	if (value_str.length<minlen)
	{
		return("The Data Should Be Greater Than Or Equal To "+parseInt(minlen,10));
	}
	else if (value_str.length>maxlen)
	{
        return("The Data Should Be Less Than Or Equal To "+ parseInt(maxlen,10));
	}
	else
	{
		/*
			var re=/^[':]+$/;
			if((re.test(value_str)))
			{
				str2="Single Quote or Colon Symbols Are Not Allowed";
			}
			else
			{
				str2="";
			}
		*/

		var ind1=value_str.indexOf("'");
		var ind2=value_str.indexOf("&");
		var ind3=value_str.indexOf("%");
		if((ind1==-1) && (ind2==-1) && (ind3==-1))
		{
			return("");
		}
		else
		{
			return("Some Special Characters Are Not Allowed");
		}
	
	}
	return str2;
}

function rows(val,val1)
{
var str1="";
  var tbl = document.getElementById('tablespace');
  var ro=tbl.rows.length;
   
  

if(ro<2)
{	
	str1+="<table align=center cellpadding=0 cellspacing=0 class='errorarea' style='font-size:14px;'>";
     	str1+="<tr onclick='window.parent.frames[\"mainframe\"].document.forms[0]."+val+".focus()' style='cursor:hand'><td><font style='font-weight:bold;font-size:11;font-family:arial;'>At "+val1+" : \n</font>\n</td>\n<td style='font-size:11px;color:green;font-weight:bold;font-family:arial;'>Please add atleast one row</td></tr>";
     	str1+="</table>";
	return str1;
}
	else
	{
	
		return str1;
	}

}

/*function doSelect(path,transcode)
{


	var els= document.forms[0].elements;
	for(var i= 0; i < els.length; i++)
  	{
		if (els[i].alt!="")
		{
		els[i].alt=(els[i].alt).replace("WI","WO");
		
		}
		}

if(formvalid()){

	document.forms[0].action=path+"/SchedularComponent/SchedularPage.jsp?trans_code="+transcode;
	document.forms[0].submit();
return true;
}

if(formvalid()==false){

	document.forms[0].action=path+"/SchedularComponent/SchedularPage.jsp?trans_code="+transcode;
	document.forms[0].submit();
return true;
}

}*/

function doSelect(path,transcode)
{

	document.forms[0].action=path+"/SchedularComponent/SchedularPage.jsp?trans_code="+transcode;
	document.forms[0].submit();
}
