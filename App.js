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
 