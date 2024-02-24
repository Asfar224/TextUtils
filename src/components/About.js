import React from 'react'

function About() {
    return (
        <div className="container">
            <h2 style={{paddingTop : 30}}>About Section</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                             What this app do??
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        Text Utils is a user-friendly app for essential text tasks. Switch between uppercase and lowercase, track word and character usage, and enhance your experience with a stylish dark mode.
                          <p style={{paddingTop: 10}}><strong>Simple and Efficient:</strong> Focus on essential text tools without complexity.</p>
                             <p><strong>User-Friendly Design:</strong> Intuitive controls for users of all levels.</p>
                             <p><strong>Comfortable Viewing:</strong> Enjoy day or night with our eye-friendly dark mode.</p>
                             <p style={{paddingTop:10}}>Thank you for choosing Text Utils! Your trust in our app makes text manipulation a breeze. <strong>Happy text editing!</strong> </p>
                        </div>
                    </div>
                </div>
               </div>
        </div>
    )
}

export default About;