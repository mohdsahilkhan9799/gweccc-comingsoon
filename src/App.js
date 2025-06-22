import './App.css';
  const transparentLogo = true;
function App() {
  return (
<>

<div className='container'>
  <div className="coming-soon mx-5">
        <div className="nav_container pt-5">
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
                     <div className="divider"></div>

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
                />
                     <div className="divider"></div>
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
          </div>
        </div>

        {/* Date and Event Info */}

{/* Animated Date Info */}
<div className="event-info slide-up">
<div className="date-timeline">
  <div className="timeline-box">
    <div className="day">09</div>
    <div className="month">SEP 2025</div>
  </div>

  <div className="timeline-line">
    <div className="dot"></div>
    <div className="line"></div>
    <div className="dot"></div>
  </div>

  <div className="timeline-box">
    <div className="day">11</div>
    <div className="month">SEP 2025</div>
  </div>
</div>

  <div className="underline"></div>
  <h4 className='text-uppercase pt-3'>September 2025 &nbsp; | &nbsp; Exhibition World Bahrain</h4>
  <div className="logo-row3 pt-4">
    <p className='logo-row2'>info@gweccc.com</p>
  </div>
</div>

      </div>
  </div>

</>
  );
}

export default App;
