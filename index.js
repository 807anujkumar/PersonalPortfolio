let NEwbtm= document.querySelector('.btm');
let knowmore=document.querySelector('.left_side_home2');
NEwbtm.addEventListener('click',function(){
    knowmore.classList.add('active');
});
knowmore.addEventListener('click',function()
{
    knowmore.classList.remove("active");
})
  let newWrapper= document.querySelector('.wrapper');
  newWrapper.addEventListener('click',function()
  {
    // knowmore.classList.remove('active');

  })
  let newmenu_bar= document.querySelector('.menu_bar');
  let NewRightSide2=document.querySelector('.right_side2')
  
  newmenu_bar.addEventListener('click',function(){
     if(screen.width <=690)
    //  NewRightSide2.style.opacity="0";
    NewRightSide2.classList.toggle('active')
    
else{
   
  NewRightSide2.style.classList.opacity="0";
}
  });