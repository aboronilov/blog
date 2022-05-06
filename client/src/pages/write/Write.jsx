import './write.css';

const Write = () => {
   return (
      <div className='write'>
         <img
            className='writeImg'
            src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="" />
         <form action="writeForm">
            <div className="writeFormGroup">
               <label htmlFor='fileInput'>
                  <i className="writeIcon fa-solid fa-plus"></i>
               </label>
               <input type="file" id="fileInput" style={{ display: "none" }} />
               <input type="text" placeholder="Title" className="writeInput" autofocus={true} />
            </div>
            <div className="writeFormGroup">
               <textarea placeholder='Tell your story' type='text' className='writeInput writeText'></textarea>
            </div>
            <button className="writeSubmit">
               Publish
            </button>
         </form>
      </div>
   );
}

export default Write;
