import './post.css';

const Post = () => {
   return (
      <div className='post'>
         <img className='postImg' src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
         <div className="postInfo">
            <div className="postCats">
               <span className="postCat">Music</span>
               <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Lorem ipsum dolor sit</span>
            <hr/>
            <span className="postDate">1 hour ago</span>
         </div>
         <p className='postDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, illum molestias! Natus porro eius iste voluptate cumque! Nulla, rem aspernatur? Dolore deleniti adipisci, sit ea error nobis beatae excepturi consequuntur! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque quisquam necessitatibus ex rem magni voluptate itaque libero, vel, eum recusandae possimus iste consectetur non expedita blanditiis! Asperiores veniam obcaecati quis!</p>
      </div>
   );
}

export default Post;
