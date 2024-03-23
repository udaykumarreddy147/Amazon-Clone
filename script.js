const imgs=document.querySelectorAll('.hero_section ul img'); 
const hero_prev=document.querySelector('.hero_control_prev');
const hero_next=document.querySelector('.hero_control_next');

let n=0;

function changeSlide()
{
    for(let i=0;i<imgs.length;i++)
    {
        imgs[i].style.display='none';
    }
    imgs[n].style.display='block';
}

changeSlide();

// hero_prev.addEventListener('click',(e)=>{
//     if(n>0)
//     {
//         n--;
//     }
//     else
//     {
//         n=imgs.length-1;
//     }
//     changeSlide();
// })


// hero_next.addEventListener('click',(e)=>{
//     if(n<imgs.length-1)
//     {
//         n++;
//     }
//     else
//     {
//         n=0;
//     }
//     changeSlide();
// })

hero_prev.addEventListener('click',handleLeftClick)

function handleLeftClick()
{
    if(n>0)
    {
        n--;
    }
    else
    {
        n=imgs.length-1;
    }
    changeSlide();
}

hero_next.addEventListener('click',handleRightClick)

function handleRightClick()
{
    if(n<imgs.length-1)
    {
        n++;
    }
    else
    {
        n=0;
    }
    changeSlide();
}

// render automatic images will slide after 5 seconds 
function renderSlideAuto()
{
    handleRightClick()
}
setInterval(renderSlideAuto,8000);



// const scrollContainer =document.querySelectorAll('.products');
// for (const item of scrollContainer)
// {
//     item.addEventListener('wheel',(evt)=>{
//         evt.preventDefault();
//         item.scrollLeft+=evt.deltaY;
//     });
// }


// slider scrol of images 

const product_prev =document.querySelector('.product_prev');
const product_next =document.querySelector('.product_next');

product_next.addEventListener('click',function(event)
{
    const conent=document.querySelector('.products');
    conent.scrollLeft+=1100;
    event.preventDefault();
});

product_prev.addEventListener('click',function(event)
{
    const conent=document.querySelector('.products');
    conent.scrollLeft-=1100;
    event.preventDefault();
});

const product_prev1 =document.querySelector('.product_prev-1');
const product_next1 =document.querySelector('.product_next-1');

product_next1.addEventListener('click',function(event)
{
    const conent=document.querySelector('.products-1');
    conent.scrollLeft+=1100;
    event.preventDefault();
});

product_prev1.addEventListener('click',function(event)
{
    const conent=document.querySelector('.products-1');
    conent.scrollLeft-=1100;
    event.preventDefault();
});

const product_prev2 =document.querySelector('.product_prev-2');
const product_next2 =document.querySelector('.product_next-2');

product_next2.addEventListener('click',function(event)
{
    const conent=document.querySelector('.products-2');
    conent.scrollLeft+=1100;
    event.preventDefault();
});

product_prev2.addEventListener('click',function(event)
{
    const conent=document.querySelector('.products-2');
    conent.scrollLeft-=1100;
    event.preventDefault();
});

const product_prev3 =document.querySelector('.product_prev-3');
const product_next3 =document.querySelector('.product_next-3');

product_next3.addEventListener('click',function(event)
{
    const conent=document.querySelector('.products-3');
    conent.scrollLeft+=1100;
    event.preventDefault();
})

product_prev3.addEventListener('click',function(event)
{
    const conent=document.querySelector('.products-3');
    conent.scrollLeft-=1100;
    event.preventDefault();
})


// footer Back to Top

const backtop = document.querySelector('.backtop');

backtop.addEventListener('click',()=>
{
    window.scrollTo(
        {
            top:0,
            behavior:'smooth'
        }
    );
})

// Side menu of panel => All

const sidebar = document.querySelector('.sidebar');
const cross = document.querySelector('.fa-xmark');
const black = document.querySelector('.black');
const sidebtn = document.querySelector('.second-1');

sidebtn.addEventListener('click',()=>
{
    sidebar.classList.add('active');
    cross.classList.add('active');
    black.classList.add('active'); 
    document.body.classList.add('stop-scroll');
})

cross.addEventListener('click',()=>
{
    sidebar.classList.remove('active');
    cross.classList.remove('active');
    black.classList.remove('active'); 
    document.body.classList.remove('stop-scroll');
})

// sign in hidden

const sign = document.querySelector('.ac')
const tri= document.querySelector('.triangle')
const signin = document.querySelector('.hdn-sign')

sign.addEventListener('click',()=>
{
    black.classList.toggle('active-1');
    signin.classList.toggle('active');
    tri.classList.toggle('active');
    document.body.classList.toggle('stop-scroll');
})
