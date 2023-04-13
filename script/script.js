console.log('.')



//주문영역 상품 이미지 view(작은이미지->큰이미지로 변경)script
const big = document.querySelector('.big img')
const thum = document.querySelectorAll('.thum a')
console.log(big, thum)

thum.forEach((target,index)=>{
    target.addEventListener('click', (e)=>{
        e.preventDefault()
        /* console.log(target, index) */
        big.src = `./image/product_0${index+1}.jpg`
    })
})

//주문영역 브랜드와 기종선택시 내부 옵션 변경 script
const brand = document.querySelector('.contents dl dd #brand')
const galaxy = document.querySelector('.contents dl dd #galaxy')
const iphone = document.querySelector('.contents dl dd #iphone')
console.log(brand, galaxy, iphone)

iphone.style.display = "none" //아이폰 숨기기(초기값)
galaxy.disabled = 1 //비활성화시키는방법(선택X)

brand.addEventListener('change', ()=>{
    if (brand.options[2].selected == true){
        brand_dis(iphone, false)
    }
    else if (brand.options[1].selected == true){
        brand_dis(galaxy, false)
    }
    else {
        brand_dis(galaxy, true)
    }
})


//매개변수
function brand_dis(target, boolean){
        iphone.style.display = "none"
        galaxy.style.display = "none"
        target.style.display ="block"
        target.disabled = boolean
}

//기종선택시 기종값 대입하기

const result = document.querySelector('.order .order_l #result')
const galaxy_op =document.querySelectorAll('#galaxy option')
const iphone_op =document.querySelectorAll('#iphone option')
console.log(galaxy_op, iphone_op)
//갤럭시 기종 출력
galaxy.addEventListener('change', ()=>{
/*     console.log(galaxy) */
    let galaxy_index = galaxy.selectedIndex
    console.log(galaxy_op[galaxy_index])
    result.appendChild(galaxy_op[galaxy_index])
})

//수량증가시 총합계 대입
const total = document.querySelector('.order .order_r h2 span')
const num = document.querySelector('.order .order_r input')
console.log(total, num)
num.value = 1
let price = 17000
num.addEventListener('change', ()=>{
    if(num.value > 0){
        console.log(typeof num.value)
        let g = Number(num.value) * price
        total.innerHTML = `${g.toLocaleString('ko-kr')}`
    }
    else{
        window.alert('최소 주문 수량입니다.')
        num.value = 1
    }
})

const cancel = document.querySelector('.order .order_r #cancel')
cancel.addEventListener('click', ()=>{
    num.value = 1
    total.innerHTML = `${price.toLocaleString('ko-kr')}`
})