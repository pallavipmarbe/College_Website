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
 