*{
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
}
.header {
    height: 100vh;\
    
    width: 100%;
    background-position: center;
    background-size: cover;
    position: relative;
}

@media (min-aspect-ratio:16/9) {
    .back-video{
        width: 100%;
        height: auto;
    }
}
@media (max-aspect-ratio:16/9) {
    .back-video{
        width: auto;
        height: 100%;
    }
} 
nav{
    display: flex;
    padding: 2% 6%;
    justify-content: space-between;
    align-items: center;
}
nav img{
    width: 100px;
}
.nav-links{ 
    flex: 1;
    text-align: right;
}
.nav-links ul li{ 
    list-style: none;
    display: inline-block;
    padding: 8px 12px;
    position: relative;
}
.nav-links ul li a{ 
    color: #fff;
    text-decoration: none;
    font-size: 13px;
}
.nav-links ul li ::after{ 
    content: '';
    width: 0%;
    height: 2px;
    background: #f44336;
    display: block;
    margin: auto;
    transition: 0.5s;
}
.nav-links ul li:hover ::after{
    width: 100%;
}
.hero-btn{
    display: inline-block;
    text-decoration: none;
    color: #fff;
    border: 1px solid #fff;
    padding: 12px 34px;
    font-size: 13px;
    background: transparent;
    position: relative;
    cursor: pointer;
}
.hero-btn:hover{ /*78*/
    border: 1px solid #f44336;
    background: #f44336;
    transition: 1s;
}
nav .fa{
    display: none;
}
@media(max-width: 700px){ /*84*/
    .text-box h1{
        font-size: 20px;
    }
    .nav-links ul li{ /*88*/
        display: block;
    }
    .nav-links{ /*95*/
        position: fixed;
        background: #f44336;
        height: 100vh;
        width: 200px;
        top: 0;
        right: -200px;
        text-align: left;
        z-index: 2; /*24:24*/
        transition: 1s;
    }
    nav .fa{
        display: block;
        color: #fff;
        margin: 10px;
        font-size: 22px;
        cursor: pointer;
    }
    .nav-links ul{
        padding: 30px;
    }
}

/* footer */
.footer{
    width: 100%;
    text-align: center;
    padding: 30px 0;
}
.footer h4{
    margin-bottom: 25px;
    margin-top: 20px;
    font-weight: 600;
}
.icons .fa-brands{
    color: #f44336;
    margin: 0 13px;
    cursor: pointer;
    padding: 18px 0;
}
.fa-regular{
    color: #f44336; 
}
/* About us Page */
.sub-header{
    height: 50vh;
    width: 100%;
    background-image: linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)), url(/images/background.jpg);
    background-position: center;
    background-size: cover;
    text-align: center;
    color: #fff;
}
.sub-header h1{
    margin-top: 100px;
}
.about-us{
    width: 80%;
    margin: auto;
    padding-top: 80px;
    padding-bottom: 50px;
}
.about-col{
    flex-basis: 48%;
    padding: 30px 2px;
}
.about-col img{
    height: 75%;
    width: 75%;
}
.about-col h1{
    padding-top: 0;
}
.about-col p{
    padding: 15px 0 25px;
}
.red-btn{
    border: 1px solid #f44336;
    background: transparent;
    color: #f44336;
}
.red-btn:hover{
    color: #fff;
}

/* course */
.course{
    width: 80%;
    margin: auto;
    text-align: center;
    padding-top: 100px; 
}
h1{
    font-size: 36px;
    font-weight: 600;
}
p{
    color: #777;
    font-size: 14px;
    font-weight: 300;
    line-height: 22px;
    padding: 10px;
}
.row{
    margin-top: 5%;
    display: flex;
    justify-content: space-between;
}
.course-col{
    flex-basis: 31%;
    background: lightgoldenrodyellow;
    border-radius: 10px;
    margin-bottom: 5%;
    padding: 20px 12px;
    box-sizing: border-box;
    transition: 0.5s;
}
h3{
    text-align: center;
    font-weight: 600;
    margin: 10px 0;
}
.course-col:hover{
    box-shadow: 0 0 20px 0px rgba(0,0,0,0.2);
}
@media(max-width: 700px){
    .row{
        flex-direction: column;
    }
}
/* Facilities */
.facilities{
    width: 80%;
    margin: auto;
    text-align: center;
    padding-top: 100px;
}
.facilities-col{
    flex-basis: 31%;
    border-radius: 10px;
    margin-bottom: 5%;
    text-align: left;
}
.facilities-col img {
    width: 100%;
    border-radius: 10px;
}
.facilities-col p{
    padding: 0;
}
.facilities-col h3{
    margin-top: 16px;
    margin-bottom: 15px;
    text-align: left;
}
/