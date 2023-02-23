function condition()
{

  const x=document.querySelector('#slct')

  y=x.selectedIndex;
  var wrd=document.getElementById('str').value;

  if(y == 0)
  {


      let len =wrd.length;
      //document.write("String is :"+wrd);
      document.getElementById('display1').innerHTML="Length of string "+wrd+" is: "+len;


  }

  if(y === 1)
  {


      let start = prompt('Enter starting limit: ');
      let end = prompt('Enter end limit')
      let slc =wrd.slice(start,end);

      document.getElementById('display1').innerHTML="Sliced version of string "+wrd+" with limit ("+start+","+end+") is: "+slc;
    }

    if(y === 2)
    {
      let rep=prompt('Enter the string to replace '+wrd+': ');
      document.getElementById('display1').innerHTML=wrd+' is relaced as: '+rep;
    }

    if(y===3)
    {
      let con=prompt('Enter the string to be concatenated with '+wrd+': ');
      document.getElementById('display1').innerHTML="Strings after concatenation: "+wrd+' '+con;
    }

}

function conditionMath()
{
  const a=document.querySelector('#slctd')

  b=a.selectedIndex;
  let num=document.getElementById('st').value;

   if(b === 0)
  {
      document.getElementById('display2').innerHTML=num+' is rounded to: '+Math.round(num);
    }

  if(b === 1)
  {
      document.getElementById('display2').innerHTML=num+' is rounded up to: '+Math.ceil(num);
    }

  if(b === 2)
  {
      document.getElementById('display2').innerHTML=num+' is rounded down to: '+Math.floor(num);
    }

  if(b === 3)
  {
      document.getElementById('display2').innerHTML='Integer part of '+num+' is: '+Math.trunc(num);
    }

  if(b === 4)
  {
      document.getElementById('display2').innerHTML='Sign of '+num+' is: '+Math.sign(num);
    }

  if(b === 5)
  {
      document.getElementById('display2').innerHTML='Square root of '+num+' is: '+Math.sqrt(num);
    }




  

}


