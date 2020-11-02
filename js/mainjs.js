$('.quantity').on('input',function(){
    var quantity=$(this).val();
    var parents= $(this).parents('tr');    
    var item_price=parents.find('.item_price').text();
    var total=parents.find('.money');
    total.text((item_price*quantity).toLocaleString());
    var total=0;
    var inputs = document.getElementsByTagName('input');
    console.log(inputs);
    var moneys = document.getElementsByClassName("item_price");
    console.log(moneys);
    for (var i = 0; i < inputs.length; i++) {
        total += parseFloat(moneys[i].outerText) * inputs[i].value;
    }
    $("#total_money").html(total.toLocaleString());
});