function PasGenHTML(chars,length) {
var res="";
var r;
var i;
	for (i=1;i<=length;i++)
	{
		r=Math.floor(Math.random()*chars.length);
		res=res+chars.substring(r,r+1);
	}   
res = res.replace("&","&amp;");
res = res.replace(">","&gt;");
res = res.replace("<","&lt;");
return res
}

function Check() {
  f.chars.value='';
  if (f.check1.checked) f.chars.value=f.chars.value+'abcdefghijklmnopqrstuvwxyz';
  if (f.check2.checked) f.chars.value=f.chars.value+'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (f.check3.checked) f.chars.value=f.chars.value+'1234567890';
  if (f.check4.checked) f.chars.value=f.chars.value+'!"№;%:?*()_+=-~/\\<>,.[]{}';
}

$(document).ready(function(){
	$('#create_pass').click(function(){
		var val = $('#input_length').val();
		if (val <= 3) {
			$('#input_length').val(4);
			$('#password').fadeIn();
			$('#create_pass').click();
		}
		else
			$('#password').fadeIn();
	});
	
	$("#input_length").keypress(function (e)  
	{ 
		if (e.which!=8 && e.which!=0 && (e.which<48 || e.which>57))
			return false;
      return true;
	});
});