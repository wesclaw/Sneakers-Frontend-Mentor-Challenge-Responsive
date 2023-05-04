const btns = document.querySelectorAll('.btns');
const value = document.getElementById('value');
let count = 0;

const add_cart_btn = document.querySelector('.add-cart')

const btn_cart_icon = document.querySelector('.btn-cart-icon')

const cart_numbers = document.createElement('div')

function addToCart(){
    if(count===0){
      return 
    }
    btn_cart_icon.append(cart_numbers)
    cart_numbers.classList.add('cart-numbers')
    cart_numbers.style.display = 'block'
    cart_numbers.textContent = count;
}

btns.forEach((btn)=>{
  btn.addEventListener('click',(e)=>{
    const style = e.currentTarget.classList;
    if(style.contains('increase')){
      count++
    }else if(style.contains('decrease')){
      count--
      if(count<=0){
        count = 0;
        cart_numbers.style.display = 'none'
      }
    }
    value.textContent = count
  })
})