import React from 'react'; 
import bubbleBg from '../assets/bubbleBg.jpg'; 
import qrCode from '../assets/qr_code.png'; 


const LandingPage = () => {

  return (
    <>
      <div className="row">
      <div className="col-sm-6">
    <div className="card mt-5" style={{ border: "none"}}>
      <div className="card-body">
        <h1 className="card-title display-2 fw-bold" style={{color:"#000080"}}>Download Uifry, open an account!</h1>
        <p className="card-text mt-5 text-dark h5">Scan the QR code below with your phone camera to download the Uifry app.</p>
        <p className='text-muted'>fully licensed by the CBN. Deposit insured by the  <span className='text-primary lead fw-bold'>NDIC</span></p>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card mt-5" style={{ border: "none"}}>
      <div className="card-body">
      <img src={bubbleBg} className="rounded mx-auto d-block img-fluid" alt="bubble image" style={{height:"300px",width:"200px"}}/>
      </div>
    </div>
  </div>
</div>
  <div className='mt-1 mb-3'>
    <img src={qrCode}  className="rounded d-block img-fluid text-start"  alt="qr_code" style={{height:"50px", width:"50px"}} />
  </div>
<div className='container-fluid'>
<div className="row row-cols-1 row-cols-md-3 g-5">
  <div className="col mb-3">
    <div className="card">
      <div className="card-body shadow bg-body rounded">
        <h5 className="card-title text-primary">Download Unifry on Google Play or the App Store</h5>
      </div>
    </div>
  </div>
  <div className="col mb-3">
    <div className="card">
      <div className="card-body shadow bg-body rounded">
        <h5 className="card-title text-primary">Open the app and follow the prompts on your screen to open an account</h5>
      </div>
    </div>
  </div>
  <div className="col mb-3">
    <div className="card">
      <div className="card-body shadow-lg bg-body rounded">
        <h5 className="card-title text-primary">Add money to your account and start your new life of freedom from fees.</h5>
        
      </div>
    </div>
  </div>
</div>
</div>
    </>
  )
}

export default LandingPage