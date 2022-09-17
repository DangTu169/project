$(document).ready(function(){
    $('.fix1').on('click',function(){
        $(this).hide();
        $('.cancel').show();
        $('.close').show(500);
    })
    $('.cancel').on('click',function(){
        $(this).hide();
        $('.fix1').show();
        $('.close').hide(500);
    })
    $('.close').on('click',function(){
        $('.product').hide(500);
        $('.clear').show(500);
        $('.container').hide();
        $('.logo').hide();
    })

    // validate
    $('.btn-next').on('click',function(){
      validateInfoCustomer();
    })

    $('#info-customer #email').on('blur',function(){
        validateInfoCustomer();
    }) 
    $('#info-customer #name').on('blur',function(){
        validateInfoCustomer();
    }) 
    $('#info-customer #phone').on('blur',function(){
        validateInfoCustomer();
    }) 
    $('#info-customer #address').on('blur',function(){
        validateInfoCustomer();
    }) 

    function validateInfoCustomer(){
        let check = true
        let email = $('#email').val()
        let name = $('#name').val()
        let phone = $('#phone').val()
        let address = $('#address').val()

        if(name.length == 0){
            check = false
            $('#errName').text('* Không được bỏ trống họ tên *')
        }
        else{
            $('#errName').text('')
        }

        if(address.length == 0){
            check = false
            $('#erraddress').text('* Không được bỏ trống địa chỉ *')
        }
        else{
            $('#erraddress').text('')
        }

        if(email.length == 0){
            check = false
            $('#errEmail').text('* Không được bỏ trống Email *')
        }
        else{
            $('#errEmail').text('')
        }

        if(phone.length == 0){
            check = false
            $('#errPhone').text(' * Không được bỏ trống Số điện thoại *')
        }
        else{
            $('#errPhone').text('')
        }

        if(check){
            $('.payment').show(500)
            $('.btn-next').hide(500)
        }
    }

    $('.col40').on('click',function(){
        $('.col40').removeClass('active')
        $(this).addClass('active')
    })

    $('.btn-ok').on('click',function(){
        $('.done').show(500)
        $('.product').hide(500);
        $('.container').hide();
        $('.logo').hide();
    })
})