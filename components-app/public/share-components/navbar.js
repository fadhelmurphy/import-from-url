const SharedNavbar = () => (
    
    <div>
    <style jsx global>
        {`
        .horizontal {
            list-style-type: none;
            margin: 0;
            padding: 0;
            overflow: hidden;
            background-color: #333;
        }
        
        .horizontal li {
            float: left;
        }
        
        .horizontal li a {
            display: inline-block;
            color: white;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
        }
        
        .horizontal li a:hover:not(.active) {
            background-color: #000;
        }
        
        .horizontal li a.active {
            background-color:#04AA6D;
        }
        
        `}
    </style>
    <ul class="horizontal">
    <li><a class="active" href="javascript:void(0)">Home</a></li>
    <li><a href="javascript:void(0)">News</a></li>
    <li><a href="javascript:void(0)">Contact</a></li>
    <li class="rightli"><a href="javascript:void(0)">About</a></li>
  </ul>
    </div>
)

  export default SharedNavbar;
  