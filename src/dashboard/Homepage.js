import React from 'react'
import '../styling/Homepage.css';

function Homepage() {
  return (
    <div className = "container">
      <div class="pimg1">
        
      </div>

      <section class="section section-light">
        <h2>What is IPL?</h2>
        <p>
        The Indian Premier League (IPL) is a professional Twenty20 cricket league in India contested during March or April and May of every year by eight teams representing eight different cities in India.
        </p>
      </section>
      
      <div class="pimg2">
        <div class="ptext">
          <span class="border trans">
            Background
          </span>
        </div>
      </div>
      
      <section class="section section-dark">
        <h2>Foundation</h2>
        <p>
        On 13 September 2007, the BCCI announced the launch of a franchise-based Twenty20 cricket competition called Indian Premier League whose first season was slated to start in April 2008, in a "high-profile ceremony" in New Delhi. BCCI vice-president Lalit Modi, said to be the mastermind behind the idea of the IPL, spelled out the details of the tournament including its format, the prize money, franchise revenue system and squad composition rules.
        </p>
      </section>
      
      <div class="pimg3">
        <div class="ptext">
          <span class="border trans">
            Awards
          </span>
        </div>
      </div>
    
      <section class="section section-dark">
        <h2>Orange Cap</h2>
        <p>
        The Orange Cap is awarded to the top run-scorer in the IPL during a season. It is an ongoing competition with the leader wearing the cap throughout the tournament until the final game, with the eventual winner keeping the cap for the season             
        </p>
        <h2>Purple Cap</h2>
        <p>
        The Purple Cap is awarded to the top wicket-taker in the IPL during a season. It is an ongoing competition with the leader wearing the cap throughout the tournament until the final game, with the eventual winner keeping the cap for the season      
        </p>
      </section>
      
      <div class="pimg1">
        <div class="ptext">
          <span class="border">
            Gautam Rajpal
          </span>
        </div>
      </div>
    </div>
  )
}

export default Homepage

