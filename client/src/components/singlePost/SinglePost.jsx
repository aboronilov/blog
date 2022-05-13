import { useLocation } from 'react-router-dom';
import './singlepost.css';

const Singlepost = () => {
   const location = useLocation();
   console.log(location.pathname.split("/")[2])
   return (
      <div className='singlePost'>
         <div className="singlePostWrapper">
            <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">Lorem ipsum dolor sit amet.
               <div className="singlePostEdit">
                  <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                  <i className="singlePostIcon fa-regular fa-trash-can"></i>
               </div>
            </h1>
            <div className="singlePostInfo">
               <span className="singlePostAuthor">Author: <b>Jane</b></span>
               <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quibusdam laboriosam voluptatibus obcaecati possimus, inventore expedita debitis! Deserunt voluptatum quidem porro delectus inventore, a illum molestiae, cupiditate ea voluptates nobis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quibusdam laboriosam voluptatibus obcaecati possimus, inventore expedita debitis! Deserunt voluptatum quidem porro delectus inventore, a illum molestiae, cupiditate ea voluptates nobis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quibusdam laboriosam voluptatibus obcaecati possimus, inventore expedita debitis! Deserunt voluptatum quidem porro delectus inventore, a illum molestiae, cupiditate ea voluptates nobis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quibusdam laboriosam voluptatibus obcaecati possimus, inventore expedita debitis! Deserunt voluptatum quidem porro delectus inventore, a illum molestiae, cupiditate ea voluptates nobis.</p>
         </div>
      </div>
   );
}

export default Singlepost;
