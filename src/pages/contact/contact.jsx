import React from 'react'
import './contact.css';

export default function Contact() {
  return (
    <div>
      <form class="form" action="https://formsubmit.co/a7e63825664dc9ddac4daf0af7762f02" method="POST">
                      <div class="container">

                          <p>Have a Question? <br/>
                          Contact me! </p>


                      </div>

                      <div class="container" >
                            <input type="text" placeholder="Enter your name" name="name" required/>
                      </div>      
                      <div class="container" >      
                            <input type="text" placeholder="Enter your email" name="mail" required/>

                      </div>

                      <div id="container">
                        <textarea name="Message" placeholder="Enter Your message" rows="6" cols="24" required></textarea>
                     </div>  
                      <div id="container" class="submit">   
                        <button class="button" type="submit" value="Submit">SEND MESSAGE</button>
                      </div>
              
            </form>

    </div>
  )
}
