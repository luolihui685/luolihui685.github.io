document.write(`
<div class="ad">
    <h2 class="ad-ti">&#x4e13;&#x5c5e;&#x8001;&#x53f8;&#x673a;&#x4eec;&#x7684;&#x0049;&#x006f;&#x0049;&#x0069;&#x7f51;&#x7ad9;</h2>
    <li><a class="myButton" href="https://1.daof28.club" rel="nofollow" target="_blank">❖点击此处打开一❖</a></li>
    </br>
    <li><a class="myButton" href="https://1.daof28.club" rel="nofollow" target="_blank">❖点击此处打开二❖</a></li>
</div>
<style>
    .ad{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 10000;
        background:#fff;
        overflow:hidden;
        clear:both;
        border-radius: 6px;
        margin: 0 0 10px 0;
        text-align: center;
        padding: 20px;
    }
    .ad-ti {
        font-size: 44px;
        margin: 10px 0;
        color: #333;
        background-color: #FFE4E1;
        padding: 10px;
        border-radius: 60px;
    }
    .ad li{
        width:100%;
        list-style:none;
    }
    .ad a.myButton{
        display: inline-block;
        line-height:10vw;
        width:80vw;
        margin:auto;
        color:#FF0000;
        background:#01AAED;
        text-align:center;
        font-size:8vw;
        text-decoration: none;
        border-radius:3px;
        padding: 15px 32px;
        transition: background-color .3s;
    }
    .ad a.myButton:hover {
        background-color: #FFE4E1;
        color: #333;
    }
    #fullScreenImage {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 90%;
        height: 100%;
        object-fit: cover;
        z-index: 9999;
        background-color: rgba(192,192,192,1.9);
    }
    @media(max-width:600px) {
        .ad a.myButton {
            line-height:15vw;
            width:80vw;
            margin:auto;
            font-size: 5vw;
        }
        .ad-ti {
            font-size: 6vw;
        }
    }
</style>
`);

var img = document.createElement("img");
img.id = "fullScreenImage";
document.body.appendChild(img);

// === StatCounter 统计代码开始 ===
var statScript1 = document.createElement("script");
statScript1.type = "text/javascript";
statScript1.text = `
var sc_project=13074410; 
var sc_invisible=1; 
var sc_security="94088929"; 
`;
document.body.appendChild(statScript1);

var statScript2 = document.createElement("script");
statScript2.type = "text/javascript";
statScript2.async = true;
statScript2.src = "https://www.statcounter.com/counter/counter.js";
document.body.appendChild(statScript2);
// === StatCounter 统计代码结束 ===
