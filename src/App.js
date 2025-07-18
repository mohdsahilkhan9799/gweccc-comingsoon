import './App.css';
  const transparentLogo = true;

function App() {
  return (
<>

<div className='container-fluid '>
  <div className="container coming-soon mx-auto ">
        <div className="nav_container pt-5 ">
          {/* Left Logo */}
          <div className="nav_left">
            <a href="/">
              <img
                src="https://gweccc.com/assets/logo/main_logo/gweccc_white.png"
                alt="GWECCC Logo"
                className="main_logo"
              />
            </a>
          </div>

          {/* Right Logos Section */}
          <div className="nav_right">
            <div className="logo_block">
              <p className="label">An Initiative By</p>
              <img
                src={
                  transparentLogo
                    ? 'https://gweccc.com/assets/logo/Govt_of_Bahrain_01.png'
                    : 'https://gweccc.com/assets/logo/bahrain.png'
                }
                alt="Bahrain"
              />
              
            </div>

            <div className="logo_block">
              <p className="label">Exclusive Hosts</p>
              <div className="flex_row">
                     <div className="divider1"></div>

                <img
                  src={
                    transparentLogo
                      ? 'https://gweccc.com/assets/logo/ministry_of_oil.png'
                      : 'https://gweccc.com/assets/logo/ministry-of-oil_black.png'
                  }
                  alt="Oil Ministry"

              
                 
                />
                <div className="divider"></div>
                <img
                  src="https://gweccc.com/assets/logo/UNEP-02.png"
                  alt="UNEP"
                  className='unep-logo'
                />
                     <div className="divider1"></div>
              </div>
            </div>

            <div className="logo_block">
              <p className="label">Founding Partner</p>
              
              <img
                src={
                  transparentLogo
                    ? 'https://www.aramco.com/-/jssmedia/project/aramcocom/aramco-logo--white.png'
                    : 'https://gweccc.com/assets/logo/aramco-logo.webp'
                }
                alt="Aramco"
                className='aramco-logo'
              />

              
            </div>
            
 
                     <div className="divider-ne"></div>

                <div className="logo_block">
              <p className="label">Organising Partner</p>
              <img
                src={
                  transparentLogo
                    ? 'https://gweccc.com/assets/logo/NEXUS_EVENTS_WHITE.png'
                    : 'https://gweccc.com/assets/logo/NEXUS_EVENTS_WHITE.png'
                }
                alt="Bahrain"
                className='ne-logo'

              />
              
            </div>
          </div>
        </div>

        {/* Date and Event Info */}

{/* Animated Date Info */}
<div className="event-info slide-up pt-5">
  <div className="date-text">
    <div className="event-date">
      09 <span className="date-separator">-</span> 11 September 2025
    </div>
    <span className="event-location">Exhibition World Bahrain</span>
  </div>

  <div className="underline"></div>

  <div className="coming-soon-text">Launching Soon</div>

  <div className="logo-row3 py-3">
    <p className="enquiry-label">
      For any inquiries, please contact <strong>info@gweccc.com</strong>
    </p>
  </div>
</div>





      </div>
  </div>

</>
  );
}

export default App;
