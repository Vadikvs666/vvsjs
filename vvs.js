/**
*	Vadim Vagin

**/
function isset(variable){
  if(typeof(variable) != "undefined" && variable !== null) {
      return true;
    }else
    {
        return false;
    }
  
}

function formSubmit(elem)
{

    elem.form.submit();
}

function removeChildren(node) {
    var children = node.childNodes

    while (children.length) {

        node.removeChild(children[0])

    }

}
