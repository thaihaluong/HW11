/**
 * Created by Admin on 12/30/2016.
 */

//alert("Hello Jane");

function loadData() {
    console.log(">> LoadData");
    console.log("Loading data");
    $.ajax({
    type: 'get',
    //data: JSON.stringify(lookup),
    url: "/api/see",
    contentType: 'application/json',
    dataType: 'json',
    contenType: "json",
    success: function (data) {
        console.log(data);
        var dataListEl = document.getElementById("data-list");

        // var h3Child = document.createElement("h3");
        // h3Child.innerHTML="I am new here";
        // dataListEl.appendChild(h3Child);
        // var imgChild = document.createElement("img");
        // imgChild.src = "https://s-media-cache-ak0.pinimg.com/originals/65/b5/be/65b5beb839e196f60206ec6d5eb30224.jpg";
        // dataListEl.appendChild(imgChild);
        for (var i = 0; i < data.length; i+=1){
            console.log(i);
            console.log(data[i])
            var item = data[i];
            console.log(item.img);
            console.log(item.name);
            console.log(item.desc);
            console.log(item._id);
            var manChild = document.createElement("img");
            manChild.src = item.img;
            dataListEl.appendChild(manChild);
        }
    }
});

    }

function addData() {
    var manName = document.getElementById("man-name").value;
    var manDesc = document.getElementById("man-desc").value;
    var manImg = document.getElementById("man-img").value;
    console.log(manName,manDesc);
    var data = {
        name: manName,
        desc: manDesc,
        img: manImg
    };
    $.ajax ({
        type: 'post',
        url:'api/add',
        dataType:'json', //format minh nhan ve
        contentType: 'application/json', //format minh gui di
        data: JSON.stringify(data),
        success: function (data) {
            console.log(data)

        }


    })

};

function delData(men_id) {

    
        $.ajax ({
        type: 'delete',
        url: '/api/del/'<men_id>'',

        success: function () {
        console.log("")

        }
    })
}
//delData('586a0bd410093a0c24429bb9');

function putData() {
    var manName2 = document.getElementById("man-name2").value;
    var manDesc2 = document.getElementById("man-desc2").value;
    var manImg2 = document.getElementById("man-img2").value;
    var men_id = document.getElementById("man-id2").value;
    console.log(men_id,manName2);
    var data = {
        name: manName2,
        desc: manDesc2,
        img: manImg2
    };
    $.ajax ({
        type: 'put',
        url:'/api/put/'<men_id>'',
        dataType:'json', //format minh nhan ve
        contentType: 'application/json', //format minh gui di
        data: JSON.stringify(data),
        success: function () {
            console.log("Done")

        }
    })

};

//putData('5865308b10093a1040f2b2dc')




//addData()

//loadData();