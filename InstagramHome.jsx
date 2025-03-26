// import React from 'react';
// function HomeScreen() {
//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h2>Instagram</h2>
//     </div>
//   );
// }


// export default HomeScreen;


import React from "react";
import "./InstagramHome.css";


function InstagramHome() {
  return (
    <div className="instagram-container">
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">Instagram</h2>
        <div className="nav-icons">
          <span>🏠</span>
          <span>💬</span>
          <span>❤️</span>
          <span>🔍</span>
        </div>
      </nav>

     

           
        <div className="profile-container">
      {/* Profile Header */}
      <div className="profile-header">
        <img className="profile-pic" src="https://cdn.pixabay.com/photo/2022/12/05/04/18/ai-generated-7635902_1280.jpg" alt="Profile" height="200px" width="200px"/>
        <div className="profile-info">
          <div className="profile-top">
            <h2>udayaa@99</h2>
            <button className="edit-btn">Edit Profile</button>
            <button className="settings-btn">⚙</button>
          </div>
          <div className="profile-stats">
            <span><strong>50</strong> posts</span>
            <span><strong>1.2K</strong> followers</span>
            <span><strong>200</strong> following</span>
          </div>
          <div className="profile-bio">
            <p><strong>Udayaa</strong></p>
            <p>🚀 Web Developer | Photographer 📷</p>
            <p>📍 Bangalore, India</p>
          </div>
        </div>
      </div>

      {/* Story Highlights */}
      <div className="story-highlights">
        <div className="highlight">
          <img src="https://cdn.pixabay.com/photo/2025/03/12/09/53/fashion-9464657_1280.jpg" alt="Highlight" height="200px" width="200px" />
          <p>Travel</p>
        </div>
        <div className="highlight">
          <img src="https://cdn.pixabay.com/photo/2022/05/11/07/10/porridge-7188630_1280.jpg" alt="Highlight"  height="200px" width="200px"/>
          <p>Food</p>
        </div>
        <div className="highlight">
          <img src="https://cdn.pixabay.com/photo/2023/09/05/12/44/mug-8235059_1280.jpg" alt="Highlight" height="200px" width="200px" />
          <p>Memories</p>
        </div>
      </div>
      {/* post Grid Heading */}
      <div  className="post-grid-heading">
          <div className="post-items">
            <p>Posts</p>
          </div>
          <div className="post-items">
            <p>Reels</p>
          </div>
          <div className="post-items">
            <p>Tags</p>
          </div>
      </div>

      {/* Post Grid */}
      <div className="post-grid">
        <img src="https://cdn.pixabay.com/photo/2014/02/02/17/40/photographs-256888_1280.jpg" alt="Post" height="200px" width="200px"/>
        <img src="https://cdn.pixabay.com/photo/2022/12/01/12/26/countryside-7629017_1280.jpg" alt="Post" height="200px" width="200px"/>
        <img src="https://cdn.pixabay.com/photo/2019/05/01/01/03/vintage-4169862_1280.jpg" alt="Post" height="200px" width="200px"/>
        <img src="https://cdn.pixabay.com/photo/2022/10/23/19/31/chains-7541973_1280.jpg" alt="Post" height="200px" width="200px"/>
        <img src="https://cdn.pixabay.com/photo/2017/04/30/17/52/book-2273477_1280.jpg" alt="Post" height="200px" width="200px"/>
        <img src="https://cdn.pixabay.com/photo/2015/08/02/23/10/memorial-day-872189_1280.jpg" alt="Post" height="200px" width="200px"/>
        <img src="https://cdn.pixabay.com/photo/2014/02/02/17/40/photographs-256888_1280.jpg" alt="Post" height="200px" width="200px"/>
        
        <img src="https://cdn.pixabay.com/photo/2022/03/27/12/46/street-lamp-7094954_1280.jpg" alt="Post" height="200px" width="200px"/>
        <img src="https://cdn.pixabay.com/photo/2016/11/23/00/39/bicycle-1851497_1280.jpg" alt="Post" height="200px" width="200px"/>
        <img src="https://cdn.pixabay.com/photo/2013/09/28/21/13/bridge-187843_1280.jpg" alt="Post" height="200px" width="200px"/>
        <img src="https://cdn.pixabay.com/photo/2017/08/07/10/22/buildings-2602324_1280.jpg" alt="Post" height="200px" width="200px"/>
        <img src="https://cdn.pixabay.com/photo/2018/11/04/11/28/nagold-3793678_1280.jpg" alt="Post" height="200px" width="200px"/>
        <img src="https://cdn.pixabay.com/photo/2017/01/16/14/30/winter-1984140_1280.jpg" alt="Post" height="200px" width="200px"/>
        <img src="https://cdn.pixabay.com/photo/2020/11/21/13/18/lamp-post-5763988_1280.jpg" alt="Post" height="200px" width="200px"/>
        <img src="https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553_1280.jpg" alt="Post" height="200px" width="200px"/>
        <img src="https://cdn.pixabay.com/photo/2020/09/10/11/30/girl-5560212_1280.jpg" alt="Post" height="200px" width="200px"/>
        <img src="https://cdn.pixabay.com/photo/2020/03/11/23/24/lamp-post-4923527_1280.jpg" alt="Post" height="200px" width="200px"/>
        <img src="https://cdn.pixabay.com/photo/2017/05/22/07/20/woman-2333326_1280.jpg" alt="Post" height="200px" width="200px"/>
        <img src="https://cdn.pixabay.com/photo/2016/09/18/01/42/lamp-post-1677272_1280.jpg" alt="Post" height="200px" width="200px"/>
        <img src="https://cdn.pixabay.com/photo/2017/04/15/05/06/portrait-2231838_1280.jpg" alt="Post" height="200px" width="200px"/>
        <img src="https://cdn.pixabay.com/photo/2021/11/12/03/04/woman-6787784_1280.png" alt="Post" height="200px" width="200px"/>
        
      </div>
    </div>

        {/* Sidebar */}
        <div className="sidebar">
          <div className="profile">
            <img src="https://cdn.pixabay.com/photo/2022/12/05/04/18/ai-generated-7635902_1280.jpg"  height="200px" width="200px" alt="Profile" />
            <span>udayaa</span>
          </div>
          <h4>Suggestions for You</h4>
          <div className="suggestion">
            <img src="https://cdn.pixabay.com/photo/2021/11/21/13/29/autumn-6814134_1280.png" alt="User"  height="200px" width="200px"/>
            <span>Anupama</span>
            <button>Follow</button>
          </div>
          <div className="suggestion">
            <img src="https://cdn.pixabay.com/photo/2022/03/27/12/46/street-lamp-7094954_1280.jpg" alt="User"  height="200px" width="200px" />
            <span>Aradya</span>
            <button>Follow</button>
          </div>
        </div>
      </div>
    
  );
}

export default InstagramHome;



