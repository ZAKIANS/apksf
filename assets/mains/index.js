import { url } from "./config.js";
const getAllApks = async () => {
  try {
    const { data } = await axios.get(`${url}/apk/approved`);
    console.log({ allApks: data.data });

    data.data.map((apk) => {
      const currentDate = new Date( apk.createdAt );
      const currentDayOfMonth = currentDate.getDate();
      const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
      const currentYear = currentDate.getFullYear();
      const dateString = currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear;
     
      if (apk.category === "Rhapsody Languages") {
        const lis = ` 
          <dl>
              <dt><a ><img alt="image" src="${url}/img/${apk.image}"/></a></dt>
              <dd class="title-dd"><a title="${apk.title}" >${apk.title}</a></dd>
              <dd>downloads(${apk.downloads})</dd>
              <dd>${dateString}</dd>
              <dd class="down"><a rel="nofollow" class="downs" title="${apk.title}" href="#">Download</a></dd>
          </dl>
        `;
        const li = document.createElement("li");
        li.setAttribute("class", "w33");
        li.innerHTML = lis;
        li.querySelector(".downs").addEventListener("click", (e) => {
          e.preventDefault();
          window.location = "/ProductDetails.html?title=" + e.target.title;
        });
        document.querySelector(".c_Rhapsody").appendChild(li);
         }
         if (apk.category == "Pre register") {
          const lis = ` 
<a   title="${apk.title}">
    <dl>
        <dt><img alt="${apk.title}" src="${url}/img/${apk.image}" /></dt>
        <dd class="title-dd downs" title="${apk.title}">${apk.title}</dd>
        <dd>downloads(${apk.downloads})</dd>

        <dd>Pre-Registrants: 29</dd>
    </dl>
</a>
          `;
          const li = document.createElement("li");
          li.setAttribute("class", "w33");
          li.innerHTML = lis;
          li.querySelector(".downs").addEventListener("click", (e) => {
            e.preventDefault();
            window.location = "/ProductDetails.html?title=" + e.target.title;
          });
          document.querySelector(".c_preregister").appendChild(li);
        console.log({name:apk.category});
      }
      if (apk.category == "Game on sale") {
        const lis = ` 
        <a  title="${apk.title}" >
            <dl>
                <dt><img alt="${apk.title}" src="${url}/img/${apk.image}" ></dt>
                <dd class="title-dd downs"  title="${apk.title}" >${apk.title}</dd>
                <dd>downloads(${apk.downloads})</dd>
                <dd>Raw Fury</dd>
                <dd class="price">
                                <span class="price-new">$1.99</span>
                                <span class="price-old">$5.49</span>
                                <span class="price-disco">-64%</span>
                            </dd>
            </dl>
        </a>
        `;
        const li = document.createElement("li");
        li.setAttribute("class", "w5");
        li.innerHTML = lis;
        li.querySelector(".downs").addEventListener("click", (e) => {
          e.preventDefault();
          window.location = "/ProductDetails.html?title=" + e.target.title;
        });
        document.querySelector(".c_game_sale").appendChild(li);
      // console.log({name:apk.category});
    } 
    if (apk.top&&apk.category==='Games') {
      const lis = ` 
      <dl>
          <dt><a title="${apk.title}" ><img alt="${apk.title}" src="${url}/img/${apk.image}"></a></dt>
          <dd class="title-dd"><a title="${apk.title}" >${apk.title}</a></dd>
          <dd>
              <div class="stars"><span class="score" title="${apk.title}" style="width:20%"></span><span class="star">2.0</span></div>
          </dd> <dd>${dateString}</dd>
          <dd class="down "><a rel="nofollow" class="downs" title="${apk.title}" >Download</a></dd>
      </dl>
      `;
      const li = document.createElement("li");
      li.setAttribute("class", "w33");
      li.innerHTML = lis;
      li.querySelector(".downs").addEventListener("click", (e) => {
        e.preventDefault();
        window.location = "/ProductDetails.html?title=" + e.target.title;
      });
      document.querySelector(".c_top_games").appendChild(li);
  } 
  if (apk.top&&apk.category==='Apps') {
    const lis = ` 
    <dl>
        <dt><a title="${apk.title}" ><img alt="${apk.title}" src="${url}/img/${apk.image}"></a></dt>
        <dd class="title-dd"><a title="${apk.title}" >${apk.title}</a></dd>
        <dd>
            <div class="stars"><span class="score" title="${apk.title}" style="width:20%"></span><span class="star">2.0</span></div>
        </dd> <dd>${dateString}</dd>
        <dd class="down "><a rel="nofollow" class="downs" title="${apk.title}" >Download</a></dd>
    </dl>
    `;
    const li = document.createElement("li");
    li.setAttribute("class", "w33");
    li.innerHTML = lis;
    li.querySelector(".downs").addEventListener("click", (e) => {
      e.preventDefault();
      window.location = "/ProductDetails.html?title=" + e.target.title;
    });
    document.querySelector(".c_top_apps").appendChild(li);
} 
if (apk.hot&&apk.category==='Games') {
  const lis = ` 
    <div class="day_list_number">1</div>
    <dl>
        <dt><a title="${apk.title}" ><img alt="${apk.title}"  src="${url}/img/${apk.image}"></a></dt>
        <dd class="title-dd"><a title="${apk.title}" >${apk.title}</a></dd>
        <dd>${apk.version}</dd>
        <dd>${apk.category}</dd>
        <dd class="down downs"><a rel="nofollow" class="" title="${apk.title}">Download</a></dd>
    </dl>
  `;
  const li = document.createElement("li");
  li.innerHTML = lis;
  li.querySelector(".downs").addEventListener("click", (e) => {
    e.preventDefault();
    window.location = "/ProductDetails.html?title=" + e.target.title;
  });
  document.querySelector(".c_hot_games").appendChild(li);
} 
if (apk.hot&&apk.category==='Apps') {
const lis = ` 
<div class="day_list_number">1</div>
<dl>
    <dt><a title="${apk.title}" ><img alt="${apk.title}"  src="${url}/img/${apk.image}"></a></dt>
    <dd class="title-dd"><a title="${apk.title}" >${apk.title}</a></dd>
    <dd>${apk.version}</dd>
    <dd>${apk.category}</dd>
    <dd class="down downs"><a rel="nofollow" class="" title="${apk.title}">Download</a></dd>
</dl>
`;
const li = document.createElement("li");
li.innerHTML = lis;
li.querySelector(".downs").addEventListener("click", (e) => {
  e.preventDefault();
  window.location = "/ProductDetails.html?title=" + e.target.title;
});
document.querySelector(".c_hot_apps").appendChild(li);
} 
if (apk.editorChoice) {
  const lis=`
  <a  title="${apk.title}"   >
      <div class="wrap">
          <div class="icon">
              <img  alt="image"  src="${url}/img/${apk.image}">
          </div>
          <div class="info">
              <div class="floatr"><i></i>
                  <span>9.1</span></div>
              <div title="${apk.title}"   class="tit downs">${apk.title}</div>
          </div>
          <div class="des">${apk.title}</div>
      </div>
  </a>
 `
  const li = document.createElement("li");
  li.innerHTML = lis;
  li.querySelector(".downs").addEventListener("click", (e) => {
    e.preventDefault();
    window.location = "/ProductDetails.html?title=" + e.target.title;
  });
  document.querySelector(".c_editor_coice").appendChild(li);
  }

     if (apk.category === "Apps") {
        const lis = ` 
          <dl>
              <dt><a ><img alt="English" src="${url}/img/${apk.image}" width="100px" height="100px"/></a></dt>
              <dd class="title-dd"><a title="${apk.title}" >${apk.title}</a></dd>
              <dd>downloads(${apk.downloads})</dd>
              <dd>${dateString}</dd>
              <dd class="down"><a rel="nofollow" class="downs" title="${apk.title}" href="#">Download</a></dd>
          </dl>
        `;

        const li = document.createElement("li");
        li.setAttribute("class", "w33");
        li.innerHTML = lis;
        li.querySelector(".downs").addEventListener("click", (e) => {
          e.preventDefault();
          window.location = "/ProductDetails.html?title=" + e.target.title;
        });
        document.querySelector(".c_discover").appendChild(li);
      }
    });
  } catch (error) {
    console.log(error);
  }
};
getAllApks();

const getAPapular = async () => {
  try {
    const { data } = await axios.get(`${url}/apk/papular`);
    console.log({ papular_apps: data.data });
    data.data.map((apk) => {
      const currentDate = new Date( apk.createdAt );
      const currentDayOfMonth = currentDate.getDate();
      const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
      const currentYear = currentDate.getFullYear();
      const dateString = currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear;
      const lis = ` 
          <dl>
              <dt><a ><img alt="English" src="${url}/img/${apk.image}" width="100px" height="100px"/></a></dt>
              <dd class="title-dd"><a title="${apk.title}" >${apk.title}</a></dd>
              <dd>downloads(${apk.downloads})</dd>
              <dd>${dateString}</dd>
              <dd class="down"><a rel="nofollow" class="downs" title="${apk.title}" href="#">Download</a></dd>
          </dl>
        `;

      const li = document.createElement("li");
      li.setAttribute("class", "w33");
      li.innerHTML = lis;
      li.querySelector(".downs").addEventListener("click", (e) => {
        e.preventDefault();
        window.location = "/ProductDetails.html?title=" + e.target.title;
      });
      document.querySelector(".c_popular").appendChild(li);
    });
  } catch (error) {
    console.log(error);
  }
};
getAPapular();

const getTrending = async () => {
  try {
    const { data } = await axios.get(`${url}/apk/trend`);
    console.log({ papular_apps: data.data });
    data.data.map((apk) => {
      const currentDate = new Date( apk.createdAt );
      const currentDayOfMonth = currentDate.getDate();
      const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
      const currentYear = currentDate.getFullYear();
      const dateString = currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear;
     
      const lis = ` 
          <dl>
              <dt><a ><img alt="English" src="${url}/img/${apk.image}" /></a></dt>
              <dd class="title-dd"><a title="${apk.title}" >${apk.title}</a></dd>
              <dd>downloads(${apk.downloads})</dd>
              <dd>${dateString}</dd>
              <dd class="down"><a rel="nofollow" class="downs" title="${apk.title}" href="#">Download</a></dd>
          </dl>
        `;

      const li = document.createElement("li");
      li.setAttribute("class", "w33");
      li.innerHTML = lis;
      li.querySelector(".downs").addEventListener("click", (e) => {
        e.preventDefault();
        window.location = "/ProductDetails.html?title=" + e.target.title;
      });
      document.querySelector(".c_trending").appendChild(li);
    });
  } catch (error) {
    console.log(error);
  }
};
getTrending();

const allSliders = async () => {
  try {
    const { data } = await axios.get(`${url}/apk/activesliders`);
    console.log({ papular_apps: data.data });
    data.data.map((apk,index) => {
      const image = `
     <a title="${apk.title}" ><img alt="${apk.title}" src="${url}/img/${apk.image}" width="100%" height="100%"/></a>
        `;
        const lis=document.createElement('li');
        const title=document.createElement('li');
        title.innerText=apk.title;
        lis.innerHTML=image;
        document.querySelector("#slider_titles").appendChild(title);
        document.querySelector("#slider_images").appendChild(lis);
      });
  } catch (error) {
    console.log(error);
  }
};
allSliders();


